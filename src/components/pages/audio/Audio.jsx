import React from "react";
import "./audio.css";
import audios from "./Playlist";
import Card from "react-bootstrap/Card";

function Audio() {
  return (
    <>
      {audios.map((audio) => {
        return (
          <div className="cont">
            <Card className="cb" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={audio.img} />
              <Card.Body>
                <Card.Title>{audio.name}</Card.Title>
                <Card.Text className="pp">{audio.song}</Card.Text>
                <audio className="player" controls src={audio.muz}></audio>
              </Card.Body>
            </Card>
          </div>
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
