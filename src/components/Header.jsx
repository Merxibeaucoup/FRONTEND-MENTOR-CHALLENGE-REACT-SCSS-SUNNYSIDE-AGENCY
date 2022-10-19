import React from "react";
import Nav from "./Nav";

const Header = () => {
  const bgImage = "./assets/images/desktop/image-header.jpg";

  const dArrow = "./assets/images/icon-arrow-down.svg";
  return (
    <header>
      <div
        className="header"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <Nav />

        <div className="header__contents">
          <h2 className="header__contents__heading">we are creatives</h2>
          <div className="header__contents__arrow">
            <img src={dArrow} alt="arrow down" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
