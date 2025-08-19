// src/components/Header.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo do App" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
