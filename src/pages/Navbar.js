import React, { useEffect } from "react";
import "../styles/Navbar.scss";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <section data-aos="fade" className="Navbar grid">
        <nav>
          <ul className="navbar--ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <h1 className="logo">Landie</h1>
        <span className="navbar--span">
          <a href="/">Buy Now</a>
        </span>
      </section>
    </>
  );
}
