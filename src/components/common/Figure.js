import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./Figure.scss";

const Figure = ({ src, alt, caption }) => {
  // Check if src is a Gatsby image object or a regular path
  const isGatsbyImage = typeof src === "object";

  return (
    <figure className="blog-figure">
      {isGatsbyImage ? (
        <GatsbyImage image={getImage(src)} alt={alt} />
      ) : (
        <img src={src} alt={alt} />
      )}
      {caption && <figcaption className="blog-figure-caption">{caption}</figcaption>}
    </figure>
  );
};

export default Figure;
