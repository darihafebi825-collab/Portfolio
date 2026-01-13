import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mynavbar.css";

const Mynavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on link click
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on resize (back to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>

        {/* Desktop Nav Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/projects" className="nav-link" onClick={closeMobileMenu}>Projects</Link></li>
          <li><Link to="/skill" className="nav-link" onClick={closeMobileMenu}>Skills</Link></li>
          <li><Link to="/education" className="nav-link" onClick={closeMobileMenu}>Education</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>

        {/* Hamburger Button */}
        <div 
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      >
        <ul>
          <li><Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/projects" className="nav-link" onClick={closeMobileMenu}>Projects</Link></li>
          <li><Link to="/skill" className="nav-link" onClick={closeMobileMenu}>Skills</Link></li>
          <li><Link to="/education" className="nav-link" onClick={closeMobileMenu}>Education</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Mynavbar;
