import React from "react";
import "../../styles/common/heading.scss";

export default function Heading({ title }) {
  if (typeof window === "undefined") return null;
  const { pathname } = window.location;
  
  const titleChars = title.split("");
  return (
    <header className="default-header">
      <h1 className="wave" aria-label={title}>
        {titleChars.map((char, index) => (
          <span
            key={index}
            style={{ "--i": index + 1 }}
            // data-aos-once="true"
            // data-aos="fade-in"
            // data-aos-delay={600 + index * 50}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </span>
        ))}
      </h1>
      <div
        className={`zigzag-wrapper${pathname === "/" ? " landing-zigzag" : ""}`}
        style={{ "--chars": titleChars.length }}
      >
        <div className="zigzag"></div>
      </div>
    </header>
  );
}
