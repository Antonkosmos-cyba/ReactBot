import React from "react";
import "./main.scss";
import magu from "./magu.mp3";
import video from "./ant.mp4";

function Main() {
  return (
    <>
      <div className="blog">
        <audio controls src={magu}></audio>
        <div></div>
        <video controls width={400} height={300} src={video}></video>
      </div>
    </>
  );
}

export default Main;
