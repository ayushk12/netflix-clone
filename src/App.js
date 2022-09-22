import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" elemnet={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
