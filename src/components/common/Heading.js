import React from "react";
import "../../styles/common/heading.scss";

export default function Heading({ title }) {
  return (
    <header>
      <h1 className="wave">
        {title.split("").map((char, index) => (
          <span
            key={index}
            style={{ "--i": index + 1 }}
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-delay={600 + index * 50}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </span>
        ))}
      </h1>
    </header>
  );
}
