import React from "react";

const Gallery = () => {
  const milk = "./assets/images/desktop/image-gallery-milkbottles.jpg";
  const orange = "./assets/images/desktop/image-gallery-orange.jpg";
  const cone = "./assets/images/desktop/image-gallery-cone.jpg";
  const sugarcubes = "./assets/images/desktop/image-gallery-sugarcubes.jpg";
  return (
    <div className="gallery">
      <div className="gallery__row">
        <div className="gallery__row__item">
          <img src={milk} alt="milk bottles" className="photo" />
        </div>
        <div className="gallery__row__item">
          <img src={orange} alt="orange" className="photo" />
        </div>
        <div className="gallery__row__item">
          <img src={cone} alt="ice cream cone" className="photo" />
        </div>
        <div className="gallery__row__item">
          <img src={sugarcubes} alt="sugar cubes" className="photo" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
