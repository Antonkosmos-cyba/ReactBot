import React from "react";
import "./audio.css";
import audios from "./Playlist";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Audio() {
  return (
    <>
      <div className="section">
        <div className="cont">
          <Row xs={1} sm={2} md={2} xl={6} xxl={4} className="g-4 ">
            {audios.map((audio) => {
              return (
                <Col>
                  <Card className="cb" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={audio.img} />
                    <Card.Body>
                      <Card.Title>{audio.name}</Card.Title>
                      <Card.Text className="pp">{audio.song}</Card.Text>
                      <audio
                        className="player"
                        controls
                        src={audio.muz}
                      ></audio>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
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
