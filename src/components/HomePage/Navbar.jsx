// src/components/HomePage/Navbar.jsx
import React from "react";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/logo.png"; // correct logo

const Navbar = ({ onOpenContact }) => {
  return (
    <header className="navbar">
      {/* LEFT: logo + text */}
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
        <span>LogoIpsum</span>
      </div>

      {/* CENTER: links */}
      <nav className="navbar__links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Our Services</a>
        <a href="#blogs">Blogs</a>
        <a href="#careers">Careers</a>
      </nav>

      {/* RIGHT: Contact Us -> opens modal */}
      <button className="navbar__button" onClick={onOpenContact}>
        Contact Us
      </button>
    </header>
  );
};

export default Navbar;
