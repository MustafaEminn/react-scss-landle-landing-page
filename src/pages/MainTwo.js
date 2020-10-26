import React, { useEffect } from "react";
import "../styles/MainTwo.scss";
import MainTwoWebp from "../images/main2/main2Left.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainTwo() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <section data-aos="zoom-out-down" className="maintwo grid">
        <div className="maintwo--left">
          <img src={MainTwoWebp} alt="Rose woman cloud" loading="lazy" />
        </div>
        <div className="maintwo--right">
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
