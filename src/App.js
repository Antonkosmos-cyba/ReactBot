import React from "react";

// import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Heder from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Heder />
      </div>
    </BrowserRouter>
  );
}

export default App;
