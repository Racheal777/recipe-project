import React from "react";
// import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/cock.jpg'
import photo from '../images/break.jpg'
import pic from '../images/cake.jpg'
import pics from '../images/fish.jpg'
import picss from '../images/burger.jpg'

// import '../Components/nav.css'


export default function App(props) {
  return (
    <>
   
    
      <Carousel>
        <Carousel.Item>
        <div className="banner"> 
          <img
            className="d-block w-100"
            src={logo}
            alt="First slide"style={{height:'500px', width: "50%"}}
          />
          </div>
          <Carousel.Caption> 
           
         
           
            <p>
             COCKTAIL.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="banner"> 
          <img
            className="d-block w-100"
            src={pic}
            alt="Third slide"style={{height:'500px', width: "50%"}}
          />
          </div>
          <Carousel.Caption>
            
            <p>CAKE</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className="banner"> 
          <img
            className="d-block w-100"
            src={photo}
            alt="Third slide"style={{height:'500px'}}
          /></div>
          <Carousel.Caption>
            
            <p>
              BREAKFAST
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className="banner"> 
          <img
            className="d-block w-100"
            src={pics}
            alt="Third slide" style={{height:'500px', width: "50%"}}
          /></div>
          <Carousel.Caption>
           
            <p>
              SALMON
            </p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
        <div className="banner"> 
          <img
            className="d-block w-100"
            src={picss}
            alt="Third slide" style={{height:'500px', width: "50%"}}
          /></div>
          <Carousel.Caption>
           
            <p>
             BURGER
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}