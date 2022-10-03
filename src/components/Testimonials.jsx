import React from "react";

const Testimonials = () => {
  const emily = "./assets/images/image-emily.jpg";
  const thomas = "./assets/images/image-thomas.jpg";
  const jennie = "./assets/images/image-jennie.jpg";
  return (
    <>
      <div className="testimonials">
        <h2 className="testimonials__header">Client testimonials</h2>
        <div className="content-container">
          <div className="testimonials__content">
            <img
              src={emily}
              alt="emily"
              className="testimonials__content__image"
            />
            <p className="testimonials__content__paragraph">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="testimonials__content__info">
              <h4 className="testimonials__content__info__name">Emily R.</h4>
              <p className="testimonials__content__info__career">
                Marketing Director
              </p>
            </div>
          </div>
          <div className="testimonials__content">
            <img
              src={thomas}
              alt="thomas"
              className="testimonials__content__image"
            />
            <p className="testimonials__content__paragraph">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="testimonials__content__info">
              <h4 className="testimonials__content__info__name">Thomas S.</h4>
              <p className="testimonials__content__info__career">
                Chief Operating Officer
              </p>
            </div>
          </div>
          <div className="testimonials__content">
            <img
              src={jennie}
              alt="jennie"
              className="testimonials__content__image"
            />
            <p className="testimonials__content__paragraph">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="testimonials__content__info">
              <h4 className="testimonials__content__info__name">Jennie F.</h4>
              <p className="testimonials__content__info__career">
                Business Owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
