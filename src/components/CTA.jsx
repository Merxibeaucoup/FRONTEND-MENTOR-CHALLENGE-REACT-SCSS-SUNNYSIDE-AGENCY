import React from "react";

const CTA = () => {
  const eggImage = "./assets/images/desktop/image-transform.jpg";
  const pinkGlass = "./assets/images/desktop/image-stand-out.jpg";
  const cherry = "./assets/images/desktop/image-graphic-design.jpg";
  const orange = "./assets/images/desktop/image-photography.jpg";
  return (
    <div className="snake">
      <div className="row">
        <div className="row__texts ">
          <h3 className="row__texts__title">Transform your brand</h3>
          <p className="row__texts__paragraph ">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="/learn" className="row__texts__link1">
            learn more
          </a>
        </div>
        <div className="row__image">
          <img src={eggImage} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="row__image">
          <img src={pinkGlass} alt="" />
        </div>
        <div className="row__texts">
          <h3 className="row__texts__title">Stand out to the right audience</h3>
          <p className="row__texts__paragraph ">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="/learn" className="row__texts__link2">
            learn more
          </a>
        </div>
      </div>
      <div className="row ">
        <div className="row__image double-container">
          <img src={cherry} alt="" />
          <div className="row__image__texts graphic-design ">
            <h3 className="row__texts__title">Graphic Design</h3>
            <p className="row__texts__paragrah">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        <div className="row__image double-container">
          <img src={orange} alt="" />
          <div className="row__image__texts photography">
            <h3 className="row__texts__title">Photography</h3>
            <p className="row__texts__paragrah">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
