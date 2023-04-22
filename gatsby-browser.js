// global styles
import "./src/styles/global/styles.scss";
import "./src/styles/common/splash-screen.scss";
import "./src/styles/dist/aos.css";

// Global state
import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

// Splash Screen
export const onClientEntry = () => {
  setTimeout(() => {
    if (document.getElementById("loader-wrapper")) {
      document.getElementById("loader-wrapper").style.opacity = 1;
      document.getElementById("loader-wrapper").style.pointerEvents = "all";
      document.getElementById("loader-wrapper").style.transition = "none";
    }
  }, 0);
};

export const onInitialClientRender = () => {
  setTimeout(() => {
    if (document.getElementById("loader-wrapper")) {
      document.getElementById("loader-wrapper").style.opacity = 1;
      document.getElementById("loader-wrapper").style.pointerEvents = "all";
      document.getElementById("loader-wrapper").style.transition = "none";
    }
  }, 0);
};

export const onRouteUpdate = () => {
  setTimeout(() => {
    if (document.getElementById("loader-wrapper")) {
      document.getElementById("loader-wrapper").style.opacity = 0;
      document.getElementById("loader-wrapper").style.pointerEvents = "none";
      document.getElementById("loader-wrapper").style.transition =
        "200ms opacity ease-in-out";
    }
  }, 1000);
};
