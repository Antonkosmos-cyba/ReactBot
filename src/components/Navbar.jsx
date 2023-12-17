import React from "react";
import { Navbar } from "react-bootstrap";
// import "./navbar.css";

export function NaviBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nav"
      ></Navbar>
    </>
  );
}
