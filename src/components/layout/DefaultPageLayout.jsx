import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import SplashScreen from "../common/SplashScreen";

export default function DefaultPageLayout({ children }) {
  // Initialize AOS on every page.
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <SplashScreen />
    </>
  );
}
