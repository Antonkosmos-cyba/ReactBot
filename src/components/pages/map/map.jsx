import React from "react";
import "./map.css";

import Karta from "./map.png";

function Map() {
  return (
    <div className="karta">
      <img className="bord" src={Karta} alt=""></img>
    </div>
  );
}

export default Map;
