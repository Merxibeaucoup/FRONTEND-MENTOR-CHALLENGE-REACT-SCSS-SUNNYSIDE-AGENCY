import React from "react";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <img src="assets/images/logo.svg" alt="" />
        </div>
        <div className="nav__items">
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
        </div>
      </div>
    </>
  );
};

export default Nav;
