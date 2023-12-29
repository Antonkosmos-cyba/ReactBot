import React from "react";
// import { Link } from "react";
import "./navbar.css";

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
          <Nav className="m-auto flex-row justify-content-around stil">
            <Nav.Link>
              <Link to="/" className="no-underline">
                Главная
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/music" className="no-underline">
                Музыка
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/video" className="no-underline">
                Видео
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heder;
