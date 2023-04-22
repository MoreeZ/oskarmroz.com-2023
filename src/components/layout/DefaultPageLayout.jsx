import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import SplashScreen from "../common/SplashScreen";
import { useState } from "react";

export default function DefaultPageLayout({ children }) {
  const [loadApp, setLoadApp] = useState(false);
  // Initialize AOS on every page.
  useEffect(() => {
    AOS.init();
    let timer1 = setTimeout(() => setLoadApp(true), 700);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  if (!loadApp) return <SplashScreen />;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
