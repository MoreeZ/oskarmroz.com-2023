import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import "../../styles/landing/main.scss";

export default function LandingMain() {
  return (
    <div className="landing-main" id="landing-main">
      <MainLeft />
      <MainRight />
    </div>
  );
}
