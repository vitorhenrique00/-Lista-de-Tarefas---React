// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import logo from "./assets/logo.png"; // ajuste o nome do arquivo se for diferente
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <img src={logo} alt="Logo" height="50" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>

      <footer>
        © 2025 Meu App
      </footer>
    </Router>
  );
}

export default App;
