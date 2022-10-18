import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar onMenuClick={() => setIsMenuOpen((prev) => !prev)} />
        <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
