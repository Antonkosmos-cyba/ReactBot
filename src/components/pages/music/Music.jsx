import React from "react";
import "./music.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./milana2.jpeg";
import Image2 from "./di2.webp";
import Image3 from "./Nuzhnye2.jpg";

function Music() {
  return (
    <Carousel fade className="positem">
      <Carousel.Item>
        <img
          src={Image1}
          alt=""
          // max-width={600}
          // height={300}
          className="pos"
        ></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
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
  );
}

export default Music;
