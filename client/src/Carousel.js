import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import hideaway1 from './images/hideaway1.jpg';
//const imagesize = { height:250px;width:250px;}
 const imagesize = {height: "325px", width: "350px"}
function CarouselPage() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img 
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway1.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>Hideaway Huts provide exclusive accomodation for 2 guests</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway2.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>Hideaway Huts provide exclusive accomodation for 2 guests</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway3.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>Hideaway Huts provide exclusive accomodation for 2 guests</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway4.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>Hideaway Huts provide exclusive accomodation for 2 guests</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway5.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>Hideaway Huts provide exclusive accomodation for 2 guests</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway6.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>Hideaway Huts provide exclusive accomodation for 2 guests</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/cottage1.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Holiday Cottage</h3>
          <p>Great base for exploring Cheviots, Banburgh & Seahouses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/cottage2.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Holiday Cottage</h3>
          <p>Great base for exploring Cheviots, Banburgh & Seahouses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/cottage3.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Holiday Cottage</h3>
          <p>Great base for exploring Cheviots, Banburgh & Seahouses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/cottage4.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Holiday Cottage</h3>
          <p>Great base for exploring Cheviots, Banburgh & Seahouses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/cottage5.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Holiday Cottage</h3>
          <p>Great base for exploring Cheviots, Banburgh & Seahouses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/cottage6.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Holiday Cottage</h3>
          <p>Great base for exploring Cheviots, Banburgh & Seahouses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/oldschool1.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Old School House</h3>
          <p>4 star accomodation, situated close to Hadrian's Wall and Pennine Way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/oldschool2.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Old School House</h3>
          <p>4 star accomodation, situated close to Hadrian's Wall and Pennine Way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/oldschool3.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Old School House</h3>
          <p>4 star accomodation, situated close to Hadrian's Wall and Pennine Way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/oldschool4.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Old School House</h3>
          <p>4 star accomodation, situated close to Hadrian's Wall and Pennine Way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/oldschool5.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Old School House</h3>
          <p>4 star accomodation, situated close to Hadrian's Wall and Pennine Way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/oldschool6.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Old School House</h3>
          <p>4 star accomodation, situated close to Hadrian's Wall and Pennine Way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hadrian1.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hadrian holiday lodges</h3>
          <p>Located on cycle route N72 between Greenhead and Gilsland</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hadrian2.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hadrian holiday lodges</h3>
          <p>Located on cycle route N72 between Greenhead and Gilsland</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hadrian3.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hadrian holiday lodges</h3>
          <p>Located on cycle route N72 between Greenhead and Gilsland</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hadrian4.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hadrian holiday lodges</h3>
          <p>Located on cycle route N72 between Greenhead and Gilsland</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hadrian5.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hadrian holiday lodges</h3>
          <p>Located on cycle route N72 between Greenhead and Gilsland</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-40"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hadrian6.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hadrian holiday lodges</h3>
          <p>Located on cycle route N72 between Greenhead and Gilsland</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselPage