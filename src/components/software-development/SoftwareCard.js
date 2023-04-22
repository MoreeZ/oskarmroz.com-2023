import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function SoftwareCard({ data }) {
  const image = getImage(data.image);
  return (
    <div
      className="software-card"
      data-aos="zoom-in"
      data-aos-offset="-40"
      data-aos-delay="100"
    >
      {image && (
        <div className="software-card-left">
          <GatsbyImage image={image} alt={data.alt} />
        </div>
      )}
      <div className="software-card-right">
        <h3
          className="software-card-heading"
        >
          {data.heading}
        </h3>
        <p
          className="software-card-description"
        >
          {data.description}
        </p>
        <div
          className="software-card-links"
          data-aos-anchor=".software-card"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          {data.links.map((link, index) => (
            <a key={index} href={link.link} target="_blank">
              <div className="icon">{link.icon}</div>
              <span className="hidden-text">
                <span>{link.text}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
