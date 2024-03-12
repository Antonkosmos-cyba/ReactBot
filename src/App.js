import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Heder from "./components/navbar/Navbar";
import Liza from "./components/pages/liza/Liza.jsx";
import Vaina from "./components/pages/vaina/Vaina.jsx";
import Main from "./components/pages/main/Main";
import Map from "./components/pages/map/map.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Heder />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/Liza" element={<Liza />}></Route>
          <Route path="/vaina" element={<Vaina />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
