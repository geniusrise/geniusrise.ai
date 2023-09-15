import React from "react";
import "./App.css";
import "@fontsource/fira-sans";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Intro } from "./components/intro/intro";

function App() {
  return (
    <div className="App">
      <div className="appContent">
        <div className="stars">
          <div className="twinkling">
            <Header></Header>
            <Routes>
              <Route path="/" element={<Intro></Intro>} />
            </Routes>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
