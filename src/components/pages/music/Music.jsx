import React from "react";
import "./music.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./milana5.png";
import Image2 from "./di5.png";
import Image3 from "./Nuzhnye5.jpg";

function Music() {
  return (
    <div className="cont">
      <Carousel fade className="positem">
        <Carousel.Item>
          <img
            src={Image1}
            alt=""
            // max-width={100}
            // height={300}
            className="pos"
          ></img>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image2}
            alt=""
            // max-width={400}
            // height={200}
            className="pos"
          ></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image3}
            alt=""
            // max-width={400}
            // height={200}
            className="pos"
          ></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Music;
