import React from "react";

export default function LandingSection({ title, image, icon, href, id }) {
  return (
    <a className="landing-section" href={href} id={id}>
      <div className="bg-img-container">
        <img src={image} alt="screen with programming" />
        <div className="img-mask"></div>
      </div>
      <div data-aos="zoom-in">{icon}</div>
      <h2 data-aos="zoom-in">{title}</h2>
    </a>
  );
}
