import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import profilePic from "../../static/profile-pic.jpg";

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
      <Helmet>
        {/* BASIC TAGS */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        {/* SEARCH ENGINE TAGS */}
        <title>{title || "Oskar Mroz - Software Developer from Ireland"}</title>
        <meta
          name="description"
          content={
            description ||
            "Oskar Mroz is a software developer from Ireland who loves coding, UI design, photography, and blogging. He works with React.js, React Native, Node.js, and other technologies. Visit his website to see his portfolio and blog posts."
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
        {/* OPEN GRAPH PREVIEW TAGS */}
        <meta
          property="og:title"
          content={openGraphData?.title || "Oskar Mroz - Personal Portfolio"}
        />
        <meta property="og:site_name" content="oskarmroz.com" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content={
            openGraphData?.description ||
            "Oskar Mroz is a software developer from Ireland who loves coding, UI design, photography, and blogging. He works with React.js, React Native, Node.js, and other technologies. Visit his website to see his portfolio and blog posts."
          }
        />
        <meta
          property="og:image"
          content={openGraphData?.image || profilePic}
        />
        <meta
          property="og:url"
          content={openGraphData?.url || "https://oskarmroz.com"}
        />
        <meta property="og:type" content={openGraphData?.type || "website"} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
