import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import SEO from "./SEO";
import { Helmet } from "react-helmet";

export default function DefaultPageLayout({
  children,
  title,
  description,
  keywords,
  robots,
  openGraphData,
}) {
  // Initialize AOS on every page.
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <SEO
        data={{
          title,
          description,
          keywords,
          robots,
          openGraphData,
        }}
      />
      <Helmet>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
