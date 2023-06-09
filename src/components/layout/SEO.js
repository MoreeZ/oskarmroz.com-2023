import React from "react";

export default function SEO({
  title,
  description,
  keywords,
  robots,
  canonical,
  openGraphData,
}) {
  return (
    <>
      <html lang="en" />
      {/* ========== BASIC TAGS ========== */}
      <meta charSet="utf-8" />
      <link rel="canonical" href={canonical || "https://oskarmroz.com/"} />
      {/* ========== SEARCH ENGINE TAGS ========== */}
      <title>{title || "Oskar Mroz - Software Developer from Ireland"}</title>
      <meta
        name="description"
        content={
          description ||
          "Oskar Mroz is a software developer from Ireland who specializes in React.js, React Native, Node.js, and other technologies. Check out his portfolio and blogs."
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

      {/* ========== OPEN GRAPH PREVIEW TAGS ========== */}
      <meta
        property="og:title"
        content={openGraphData?.title || title || "Oskar Mroz"}
      />
      <meta property="og:site_name" content="oskarmroz.com" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:description"
        content={
          openGraphData?.description ||
          description ||
          "Oskar Mroz is a software developer from Ireland who specializes in React.js, React Native, Node.js, and other technologies. Check out his portfolio and blogs."
        }
      />

      <meta
        property="og:image"
        content={
          openGraphData?.image ||
          "https://avatars.githubusercontent.com/u/47431553"
        }
      />
      <meta
        property="og:image:alt"
        content={openGraphData?.imageAlt || "Profile picture of Oskar Mroz"}
      />
      <meta
        property="og:url"
        content={openGraphData?.url || "https://oskarmroz.com"}
      />
      <meta property="og:type" content={openGraphData?.type || "website"} />

      <meta name="author" content="Oskar Mroz" />
    </>
  );
}
