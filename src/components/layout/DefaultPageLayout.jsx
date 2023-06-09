import React, { useEffect, useState, useContext } from "react";
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import AOS from "aos";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
import PageHeading from "../common/PageHeading";

export default function DefaultPageLayout({ children, title, location }) {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  // Initialize AOS on every page.
  useEffect(() => {
    AOS.init();
    //   let timer1 = setTimeout(() => dispatch({ type: "SET_ISLOADED" }), 700);

    //   return () => {
    //     clearTimeout(timer1);
    //   };
  }, []);

  // if (!state?.isLoaded) return <SplashScreen />;
  return (
    <>
      <NavHeader location={location} />
      <PageHeading title={title} location={location} />
      <main>{children}</main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </>
  );
}
