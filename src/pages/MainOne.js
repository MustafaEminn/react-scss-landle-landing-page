import React, { useEffect } from "react";
import "../styles/MainOne.scss";
import MainOneSvg from "../images/main1/1.svg";
import MainOneRightWebp from "../images/main1/mainRight.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainOne() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <section data-aos="zoom-out-down" className="mainone grid">
        <div className="mainone--left">
          <h1 className="mainone__h1--1">Light, Fast & Powerful</h1>
          <p className="mainone__p--1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="mainone--titles">
            <div className="mainone--titles--one">
              <img src={MainOneSvg} alt="pencil paper svg" />
              <h1>Title Goes Here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>

            <div className="mainone--titles--two">
              <img src={MainOneSvg} alt="pencil paper svg" />
              <h1>Title Goes Here</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>

        <div className="mainone--right">
          <img src={MainOneRightWebp} alt="telephone woman rose" />
        </div>
      </section>
    </>
  );
}
