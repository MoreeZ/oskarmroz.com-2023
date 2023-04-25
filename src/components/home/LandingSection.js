import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function LandingSection({
  title,
  image,
  alt,
  icon,
  href,
  id,
  description,
}) {
  const gatImage = getImage(image);
  return (
    <Link className="landing-section" to={href} id={id} name={id}>
      <div className="bg-img-container">
        <GatsbyImage image={gatImage} alt={alt} />
        <div className="img-mask"></div>
      </div>
      {icon}
      <h2>{title}</h2>
      <p className="desrcription">{description}</p>
    </Link>
  );
}
