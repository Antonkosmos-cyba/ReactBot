import React from "react";
import "./vaina.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./vaina4.png";
import Image2 from "./kar.jpg";
import Image3 from "./ort.jpg";

function Vaina() {
  return (
    <div className="cont">
      <Carousel fade className="positem">
        <Carousel.Item>
          <img src={Image1} alt="" className="pos"></img>
        </Carousel.Item>

        <Carousel.Item>
          <img src={Image2} alt="" className="pos"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image3} alt="" className="pos"></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Vaina;
