import React from "react";

// import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NaviBar from "./components/navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NaviBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
