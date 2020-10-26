import React, { useEffect } from "react";
import "../styles/MainFive.scss";
import MainFiveWebp from "../images/main5/angle.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainFive() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <section data-aos="zoom-out-down" className="mainfive grid">
        <div className="mainfive--background">
          <img src={MainFiveWebp} alt="angle" />
        </div>
        <div className="mainfive--content">
          <h1>A Price To Suit Everyone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <h2>$40</h2>
          <h3>UI Design Kit</h3>
          <h4>See, One price. Simple.</h4>
          <a href="/">Purchase Now</a>
        </div>
      </section>
    </>
  );
}
