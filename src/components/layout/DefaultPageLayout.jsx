import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";

export default function DefaultPageLayout({
  children,
  title,
  description,
  keywords,
  robots,
  canonical,
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{title || "Oskar Mroz - Software Developer from Ireland"}</title>
        <meta
          name="description"
          content={
            description ||
            "If you're seeing this then please remind me to write this description."
          }
        />
        <meta
          name="keywords"
          content={
            keywords ||
            "oskar, oskar mroz, software developer, ireland, designer, photography, dublin, software, engineer, computer science"
          }
        />
        <meta name="robots" content={robots || "index, follow"} />
        <link rel="canonical" href={canonical || "https://oskarmroz.com/"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      <main>{children}</main>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <Footer />
    </>
  );
}
