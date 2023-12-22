import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react";
import "./navbar.css";
import { Route, Routes } from "react-router-dom";
import Video from "../pages/video/Video.jsx";
import Music from "../pages/music/Music.jsx";
import Main from "../pages/main/Main.jsx";

function Heder() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Navbar.Brand className="logo">AC</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Главная</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/video">Видео</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/music">Музыка</Link>
        </Nav.Link>
      </Nav>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/video" element={<Video />} />
        <Route path="/misic" element={<Music />} />
      </Routes>
    </Navbar>
  );
}

export default Heder;
