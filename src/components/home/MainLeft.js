import React from "react";
import ChevronDown from "../../icons/chevron-down.svg";

export default function MainLeft() {
  return (
    <div className="landing-main-left">
      <div className="typewriter monospace">
        Hey there! I'm <span className="green-text">Oskar Mróz</span>, a{" "}
        <span className="green-text">Software Developer</span> from Ireland.
        I've been tinkering with code since I was 16. I'm a natural
        problem-solver, so programming was like love at first sight for me. I
        consider it not only a practical tool but also a form of art.
        <br />
        <br />
        One thing that really grinds my gears is when people underestimate the
        importance of <span className="green-text">good UI</span>. I mean, come
        on! It's the face of your software and what ultimately sells it to the
        end user.
        <br />
        <br />
        Aside from programming, I also have an interest in{" "}
        <span className="green-text">photography</span> and{" "}
        <span className="green-text">blogging</span>. If you're curious, feel
        free to check out my latest work.
      </div>
      <br />
      <br />
      <a className="scroll-down" href="#software" data-scroll>
        Scroll down &nbsp;
        <ChevronDown className="chevron-down" />
      </a>
    </div>
  );
}
