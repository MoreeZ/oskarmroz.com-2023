import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function LandingSection({ title, image, alt, icon, href, id }) {
  const gatImage = getImage(image);
  return (
    <Link className="landing-section" to={href} id={id} name={id}>
      <div className="bg-img-container">
        <GatsbyImage image={gatImage} />
        <div className="img-mask"></div>
      </div>
      <div data-aos="zoom-in">{icon}</div>
      <h2 data-aos="zoom-in">{title}</h2>
    </Link>
  );
}
