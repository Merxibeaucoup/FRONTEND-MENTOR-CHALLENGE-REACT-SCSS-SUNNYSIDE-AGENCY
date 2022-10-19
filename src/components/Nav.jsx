import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <img src="assets/images/logo.svg" alt="" />
        </div>
        <nav ref={navRef} className="nav__items">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn " onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Nav;
