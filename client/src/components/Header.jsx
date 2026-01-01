import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="navbar">
        <Link to="/" className="brand-link">
          <div className="logo-section">
            <div className="logo">TMS</div>
            <h1 className="brand-name">TaskManagementSystem</h1>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/signup" className="btn signup">Signup</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;