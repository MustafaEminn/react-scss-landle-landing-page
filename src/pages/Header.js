import React, { useEffect } from "react";
import "../styles/Header.scss";
import HeaderRight from "../images/header/headerRight.webp";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section data-aos="zoom-out-down" className="Header grid">
        <div className="header--left">
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="header--span">
            <a className="header--a1" href="/">
              Purchase UI Kit
            </a>
            <a className="header--a2" href="/">
              Learn More
            </a>
          </div>
        </div>
        <div className="header--right">
          <img src={HeaderRight} alt="header man" loading="lazy" />
        </div>
      </section>
    </>
  );
}
