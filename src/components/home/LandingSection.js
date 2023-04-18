import React from "react";
import { Link } from "gatsby";

export default function LandingSection({ title, image, icon, href, id }) {
  return (
    <Link className="landing-section" to={href} id={id} name={id}>
      <div className="bg-img-container">
        <img src={image} alt="screen with programming" />
        <div className="img-mask"></div>
      </div>
      <div data-aos="zoom-in">{icon}</div>
      <h2 data-aos="zoom-in">{title}</h2>
    </Link>
  );
}
