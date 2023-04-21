import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({
  data: { title, description, keywords, robots, openGraphData },
}) {
  return (
    <Helmet>
      {/* BASIC TAGS */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      {/* OPEN GRAPH PREVIEW TAGS */}
      <meta name="og:title" content={openGraphData?.title || "Oskar Mroz"} />
      <meta name="og:site_name" content="oskarmroz.com" />
      <meta name="og:locale" content="en_US" />
      <meta
        name="og:description"
        content={
          description ||
          "Oskar Mroz is a software developer from Ireland who loves coding, UI design, photography, and blogging. He works with React.js, React Native, Node.js, and other technologies. Visit his website to see his portfolio and blog posts."
        }
      />

      <meta
        name="og:image"
        content={
          openGraphData?.image ||
          "https://avatars.githubusercontent.com/u/47431553"
        }
      />
      <meta
        name="og:image:alt"
        content={openGraphData?.imageAlt || "Profile picture of Oskar Mroz"}
      />
      <meta
        name="og:url"
        content={openGraphData?.url || "https://oskarmroz.com"}
      />
      <meta name="og:type" content={openGraphData?.type || "website"} />
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
    </Helmet>
  );
}
