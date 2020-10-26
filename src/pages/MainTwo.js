import React from "react";
import "../styles/MainTwo.scss";
import MainTwoWebp from "../images/main2/main2Left.webp";

export default function MainTwo() {
  return (
    <>
      <section className="maintwo grid">
        <div className="maintwo--left">
          <img src={MainTwoWebp} alt="Rose woman cloud" />
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
