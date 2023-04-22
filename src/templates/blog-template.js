import { graphql } from "gatsby";
import React from "react";
import "../styles/blogs/blog-template.scss";
import "prismjs/themes/prism-okaidia.min.css";
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/layout/SEO";

export default function Blogs({ data, children }) {
  const {
    frontmatter: { title, date, author, featuredImage },
  } = data.mdx;

  return (
    <div className="blog-page">
      <div className="blog-page-topbar">Oskar Mroz</div>

      <div className="blog-wrapper">
        <header className="blog-header">
          <h1>{title}</h1>
          <div className="subtitle">
            <div className="blog-author">{author}</div>
            <div className="blog-date">
              Published: {new Date(date).toDateString()}
            </div>
          </div>
          {featuredImage && (
            <GatsbyImage
              image={featuredImage.childImageSharp.gatsbyImageData}
            />
          )}
        </header>
        <hr />
        <main className="blog-content">{children}</main>
      </div>
    </div>
  );
}

export function Head({
  data: {
    mdx: { frontmatter: blogData },
  },
}) {
  return (
    <SEO
      title={blogData.title}
      description={blogData.description}
      openGraphData={{
        image: blogData.featuredImage.publicURL,
        title: blogData.title,
        type: "article"
      }}
    />
  );
}

export const query = graphql`
  query PostBySlug($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        date
        title
        author
        description
        slug
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;
