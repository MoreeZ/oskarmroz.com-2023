import React, { useEffect, useState, useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import SplashScreen from "../common/SplashScreen";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
import Heading from "../common/Heading";

export default function DefaultPageLayout({ children, title }) {
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
      <Header />
      <Heading title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
