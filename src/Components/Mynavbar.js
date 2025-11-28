import React from "react";
import { Link } from "react-router-dom";
import "./Mynavbar.css";

const Mynavbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>

      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/skill" className="nav-link">Skills</Link></li>
        <li><Link to="/education" className="nav-link">Education</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Mynavbar;

