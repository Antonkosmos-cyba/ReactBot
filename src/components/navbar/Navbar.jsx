import React from "react";
// import { Link } from "react";
import "./navbar.css";
import { Route, Routes } from "react-router-dom";
import Video from "../pages/video/Video.jsx";
import Music from "../pages/music/Music.jsx";
import Main from "../pages/main/Main.jsx";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Heder() {
  return (
    <Navbar expand="md" className="bg-body-tertiary flex-column">
      <Container className="w-100">
        <Navbar.Brand className="text-logo">Новый 2024 год</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="m-auto">
            <Nav.Link>
              <Link to="/"> Главная</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/music">Музыка</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/video">Видео</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/video" element={<Video />}></Route>
      </Routes>
    </Navbar>
  );
}

export default Heder;
