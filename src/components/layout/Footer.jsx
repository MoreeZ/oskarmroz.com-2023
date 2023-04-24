import React from "react";
import ChevronUp from "../../icons/chevron-up.svg";
import "../../styles/layout/footer.scss";
import { Link } from "gatsby";
import { scroller } from "react-scroll";

export default function Footer() {
  const scrollToTop = () => {
    scroller.scrollTo("navbar", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <svg
        className="gradient-left"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L300 300H0V0Z" fill="#2F2F2F"></path>
        <path d="M0 60.0002L240 300H0V60.0002Z" fill="#404040"></path>
        <path d="M0 120L180 300H0V120Z" fill="#5E5E5E"></path>
        <path d="M0 180L120 300H0V180Z" fill="#7B7B7B"></path>
        <path d="M0 240L60 300H0V240Z" fill="#989898"></path>
      </svg>

      <div className="funny-title">~~ Nothing useful here ~~</div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <span>Take me back to the good stuff</span>
        <ChevronUp className="chevron-up" />
      </button>
      <div className="copyright">
        Copyright 2023 Oskar Mroz etc. etc. as if this meant anything.
      </div>
      <svg
        className="gradient-right"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L300 300L300 1.31134e-05L0 0Z" fill="#2F2F2F"></path>
        <path d="M60 0L300 240L300 1.04907e-05L60 0Z" fill="#404040"></path>
        <path d="M120 0L300 180L300 7.86805e-06L120 0Z" fill="#5E5E5E"></path>
        <path d="M180 0L300 120L300 5.24537e-06L180 0Z" fill="#7B7B7B"></path>
        <path d="M240 0L300 60L300 2.62268e-06L240 0Z" fill="#989898"></path>
      </svg>
    </>
  );
}
