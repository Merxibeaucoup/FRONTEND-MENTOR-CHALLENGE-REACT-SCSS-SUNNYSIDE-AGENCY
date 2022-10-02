import React from "react";

const CTA = () => {
  const eggImage = "./assets/images/desktop/image-transform.jpg";
  return (
    <div className="snake">
      <div className="row">
        <div className="row__texts">
          <h3 className="row__texts__title">Transform your brand</h3>
          <p className="row__texts__paragraph">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="/learn" className="row__texts__link">
            learn more
          </a>
        </div>
        <div className="row__image">
          <img src={eggImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
