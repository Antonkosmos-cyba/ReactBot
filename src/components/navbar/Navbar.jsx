import React from "react";
// import { Link } from "react";
import "./navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CustLink } from "../Customlink";
import logo from "./music_logo.svg";

function Heder() {
  return (
    <Navbar expand="md" className="bg-body-tertiary fonblur flex-column">
      <Container className="w-100">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="m-auto flex-row justify-content-around stil">
            <Nav.Link>
              <CustLink to="/" className="no-underline text-h">
                Главная
              </CustLink>
            </Nav.Link>
            <Nav.Link>
              <CustLink to="/music" className="no-underline text-h">
                Музыка
              </CustLink>
            </Nav.Link>
            <Nav.Link>
              <CustLink to="/audio" className="no-underline text-h">
                Плеер
              </CustLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heder;
