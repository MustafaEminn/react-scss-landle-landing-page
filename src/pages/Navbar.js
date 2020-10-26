import React from "react";
import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <>
      <section className="Navbar grid">
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
