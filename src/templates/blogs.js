import { graphql } from "gatsby";
import React from "react";
import "../styles/blogs/blog-template.scss";

const Blogs = ({ data, children }) => {
  const {
    frontmatter: { title },
  } = data.mdx;

  return (
    <div className="blog-page">
      <div className="blog-page-topbar">Oskar Mroz</div>
      <div className="blog-wrapper">
        <header className="blog-header">
          <h1>{title}</h1>
        </header>
        <main className="blog-content">{children}</main>
      </div>
    </div>
  );
};

export default Blogs;

export const query = graphql`
  query PostBySlug($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        date
        title
        slug
      }
      internal {
        contentFilePath
        content
      }
    }
  }
`;
