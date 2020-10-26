import React, { useEffect } from "react";
import "../styles/MainThree.scss";
import MainThreeWebp from "../images/main3/main3Left.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainThree() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <section data-aos="zoom-out-down" className="mainthree grid">
        <div className="mainthree--left">
          <img
            src={MainThreeWebp}
            alt="tree telephone man heart"
            loading="lazy"
          />
        </div>
        <div className="mainthree--right">
          <h1>Light, Fast & Powerful</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </section>
    </>
  );
}
