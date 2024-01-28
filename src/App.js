import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Heder from "./components/navbar/Navbar";
import Audio from "./components/pages/audio/Audio";
import Music from "./components/pages/music/Music";
import Main from "./components/pages/main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Heder />
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/audio" element={<Audio />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
