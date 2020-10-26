import React, { useEffect } from "react";
import "../styles/MainFour.scss";
import MainFourWebp from "../images/main4/main4Left.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainFour() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <section data-aos="zoom-out-down" className="mainfour grid">
        <div className="mainfour--left">
          <img src={MainFourWebp} alt="Rose woman east" loading="lazy" />
        </div>
        <div className="mainfour--right">
          <h1>Light, Fast & Powerful</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <a href="/">Purchase Now</a>
        </div>
      </section>
    </>
  );
}
