import React from "react";
// import { Link } from "react";
import "./navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CustLink } from "../Customlink";

function Heder() {
  return (
    <Navbar expand="md" className="bg-body-tertiary flex-column">
      <Container className="w-100">
        <Navbar.Brand className="text-logo">Новый 2024 год</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="m-auto flex-row justify-content-around stil">
            <Nav.Link>
              <CustLink to="/" className="no-underline">
                Главная
              </CustLink>
            </Nav.Link>
            <Nav.Link>
              <CustLink to="/music" className="no-underline">
                Музыка
              </CustLink>
            </Nav.Link>
            <Nav.Link>
              <CustLink to="/video" className="no-underline">
                Видео
              </CustLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heder;
