import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import hideaway1 from './images/hideaway1.jpg';
//const imagesize = { height:250px;width:250px;}
 const imagesize = {height: "300px", width: "300px"}
function CarouselPage() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img 
        style={imagesize}
        className="d-block w-30"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway1.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-30"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway2.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={imagesize}
        className="d-block w-30"
        src={`${window.location.protocol + "//" + window.location.hostname + ':3000/hideaway3.jpg'}`}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hideaway</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselPage