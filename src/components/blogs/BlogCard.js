import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import ChevronRight from "../../icons/chevron-right.svg";

export default function BlogCard({ data, alt }) {
  const image = data.previewImage ? getImage(data.previewImage) : null;
  return (
    <div className="blog-card">
      {image && (
        <div className="blog-card-preview">
          <GatsbyImage image={image} alt={alt} />
        </div>
      )}
      <div className="blog-card-content">
        <div className="blog-card-date">
          {new Date(data.date).toDateString()}
        </div>
        <h3 className="blog-card-title">{data.title}</h3>
        <p className="blog-card-description">{data.description}</p>
        <Link className="blog-card-button" to={`/blogs/${data.slug}`}>
          READ MORE <ChevronRight className="chevron-right" />
        </Link>
      </div>
    </div>
  );
}
