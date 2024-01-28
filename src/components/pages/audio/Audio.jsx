import React from "react";
import "./audio.css";
import audios from "./Playlist";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "./milana5.png";
import Image2 from "./di5.png";
// import Image3 from "./Nuzhnye5.jpg";

function Audio() {
  return (
    <>
      {audios.map((audio) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image1} />
            <Card.Body>
              <Card.Title>{audio.name}</Card.Title>
              <Card.Text>{audio.song}</Card.Text>
              <Button variant="primary">{audio.melody}</Button>
            </Card.Body>
          </Card>
        );
      })}

      {audios.map((audio) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>{audio.name}</Card.Title>
              <Card.Text>{audio.song}</Card.Text>
              <Button variant="primary">{audio.melody}</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Audio;

// function Playlist() {
//   return (
//     <>
//       {audios.map((audio) => {
//         return (
//           <div>
//             <p>{audio.name}</p>
//             <p>{audio.song}</p>
//             <p>{audio.melody}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }
// export default Playlist;
