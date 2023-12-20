import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react";
import "./navbar.css";
import { Route, Routes } from "react-router-dom";

const NaviBar = () => {
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
          <Link to="/foto">Фото</Link>
        </Nav.Link>
      </Nav>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Navbar>
  );
};

export default NaviBar;
