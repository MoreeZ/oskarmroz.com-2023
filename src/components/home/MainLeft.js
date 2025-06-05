import React from "react";
import ChevronDown from "../../icons/chevron-down.svg";
import { scroller } from "react-scroll";

export default function MainLeft() {
  const handleScrollDown = () => {
    scroller.scrollTo("software", {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="landing-main-left">
      <section className="typewriter monospace">
<p>
  I'm a passionate <span className="green-text">software engineer</span> with a strong foundation in both creative design and problem-solving. My journey began with a love for art, which evolved into interests like <span className="green-text">photography</span>, and <span className="green-text">web design</span>. At 16, I taught myself to code using YouTube and freeCodeCamp, building everything from Discord bots to full-scale e-commerce sites with React.js and CSS.
</p>
<p>
  In college, I consistently earned top grades in programming modules and worked part-time as a <span className="green-text">programming tutor</span> for two years. I worked for Trinity to develop a <span className="green-text">language-learning app</span> that became the focus of my Master's dissertation and was pilot tested in Irish primary schools with great results. I now lead its ongoing development part-time, managing a team of engineers.
</p>
<p>
  I've interned at <span className="green-text">Bloomberg</span> and <span className="green-text">Amazon</span>, gaining experience in large-scale development, sustainable engineering, and cross-functional collaboration. These roles deepened my understanding of enterprise software practices and improved my ability to communicate technical ideas across diverse teams.
</p>


        {/* <p>
          Hey there! I'm <span className="green-text">Oskar Mróz</span>, a{" "}
          <span className="green-text">Software Developer</span> from Ireland.
          I've been tinkering with code since I was 16. I'm a natural
          problem-solver, so programming was like love at first sight for me. I
          consider it not only a practical tool but also a form of art.
        </p>
        <p>
          One thing that really grinds my gears is when people underestimate the
          importance of <span className="green-text">good UI</span>. I mean,
          come on! It's the face of your software and what ultimately sells it
          to the end user.
        </p>
        <p>
          Aside from programming, I also have an interest in{" "}
          <span className="green-text">photography</span> and{" "}
          <span className="green-text">blogging</span>. If you're curious, feel
          free to check out my latest work.
        </p> */}
      </section>
      <br />
      <button className="scroll-down" onClick={handleScrollDown}>
        Scroll down &nbsp;
        <ChevronDown className="chevron-down" />
      </button>
    </div>
  );
}
