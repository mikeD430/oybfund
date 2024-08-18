import React from 'react';
import Home from "./components/Home"
import AddProduct from "./components/AddProduct"
import BidProduct from "./components/BidProduct"
import Products from "./components/Products"
import CarouselPage from './Carousel';
import {Route, Routes} from "react-router-dom"
import Nav from "./components/Nav"
import './App.css';
import socketIO from "socket.io-client"
import 'bootstrap/dist/css/bootstrap.min.css';

const host = window.location.protocol + "//" + window.location.hostname + ":4000"
// console.log("App host is : " + host)
const socket = socketIO(host);
//const socket = socketIO()

function App() {
  return (
    <div>
        <Nav header="Fundraiser for On Yer Bike Event" socket={socket}/>
        <h3>Auction ends 8.00 pm Fri 23 Aug 2024</h3>
        <div>
        Please note that you will not be notified when you place a bid. 
          Winning bidders will be notified when the auction ends ,
          under the discretion of the organizers
        </div>
       
       
        <CarouselPage />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products socket={socket}/>}/>
        <Route path="/products/add" element={<AddProduct socket={socket}/>}/>
        <Route path="/products/bid/:name/:price" element={<BidProduct socket={socket}/>}/>
    </Routes>
    

    </div>
  );
}

export default App;
