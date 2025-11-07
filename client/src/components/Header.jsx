import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo-section">
          <div className="logo">TM</div>
          <h1 className="brand-name">TaskManagement</h1>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <Link to="/signup" className="btn signup">Signup</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;