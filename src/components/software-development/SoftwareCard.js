import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function SoftwareCard({ data, alt }) {
  const image = getImage(data.image);
  return (
    <div className="software-card">
      {image && (
        <div className="software-card-left">
          <GatsbyImage image={image} alt={alt} />
        </div>
      )}
      <div className="software-card-right">
        <h3 className="software-card-heading">{data.heading}</h3>
        <p className="software-card-description">{data.description}</p>
        <div className="software-card-links">
          {data.links.map((link, index) => (
            <a key={index} href={link.link} target="_blank" rel="noopener">
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
