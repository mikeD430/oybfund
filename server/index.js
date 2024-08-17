const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const PORT = 4000;
const fs = require("fs")
const socketIO = require('socket.io')(http, {
  cors: {
    origin: ["http://localhost:3000",
      "http://192.168.1.250:3000",
      "http://13.40.96.69:3000"],
  },
}); 


//Gets the JSON file and parse the file into JavaScript object
const savedData = fs.readFileSync("data.json")
const objectData = JSON.parse(savedData)



app.use(cors());

console.log('🚀: In server code');

function findProduct(nameKey, myArray, last_bidder, amount){
  for (let i=0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
         myArray[i].last_bidder = last_bidder
         myArray[i].price = amount 
      }
    }
  const stringData = JSON.stringify(objectData, null, 2)
  fs.writeFile("data.json", stringData, (err)=> {
    console.error(err)
  })
}
//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });

    socket.on('addProduct', (data) => {
      objectData["products"].push(data)
      const stringData = JSON.stringify(objectData, null, 2)
      fs.writeFile("data.json", stringData, (err)=> {
        console.error(err)
      })
  socket.broadcast.emit("addProductResponse", data)
});

socket.on("bidProduct", data => {
  findProduct(data.name, objectData["products"], data.last_bidder, data.amount)   
  socket.broadcast.emit("bidProductResponse", data)
})
});

app.get("/api", (req, res) => {
  const data = fs.readFileSync("data.json")
  const products =  JSON.parse(data)
  res.json(products)
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



