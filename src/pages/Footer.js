import React from "react";
import "../styles/Footer.scss";
import FooterSocial1 from "../images/footer/Facebook.svg";
import FooterSocial2 from "../images/footer/Linkedin.svg";
import FooterSocial3 from "../images/footer/Twitter.svg";
import FooterSocial4 from "../images/footer/Youtube.svg";
import FooterSocial5 from "../images/footer/Instagram.svg";

export default function Footer() {
  return (
    <>
      <section className="footer grid">
        <div className="footer--background"></div>
        <div className="footer--up grid">
          <h3>©2020 Yourcompany</h3>
          <h1>Landie</h1>
          <div>
            <a href="/">Purchase now</a>
          </div>
        </div>
        <div className="footer--line--wrapper">
          <div className="footer--line"></div>
        </div>
        <div className="footer--down grid">
          <ul className="footer--links">
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
          <ul className="footer--socials">
            <li>
              <a href="/">
                <img src={FooterSocial1} alt="Facebook" loading="lazy" />
              </a>
            </li>

            <li>
              <a href="/">
                <img src={FooterSocial2} alt="Linkedin" loading="lazy" />
              </a>
            </li>

            <li>
              <a href="/">
                <img src={FooterSocial3} alt="Twitter" loading="lazy" />
              </a>
            </li>

            <li>
              <a href="/">
                <img src={FooterSocial4} alt="Youtube" loading="lazy" />
              </a>
            </li>

            <li>
              <a href="/">
                <img src={FooterSocial5} alt="instagram" loading="lazy" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
