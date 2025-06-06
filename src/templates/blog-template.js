import { graphql } from "gatsby";
import React from "react";
import "../styles/blogs/blog-template.scss";
import "prismjs/themes/prism-okaidia.min.css";
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/layout/SEO";
import BlogTemplateTopbar from "../components/blogs/BlogTemplateTopbar";

export default function Blogs({ data, children }) {
  const {
    internal,
    frontmatter: { title, date, author, featuredImage },
  } = data.mdx;
  const localPath = [
    ...internal.contentFilePath.split("/opt/buildhome/repo/"),
  ].pop();

  return (
    <div className="blog-page">
      <BlogTemplateTopbar localPath={localPath} />
      <div className="blog-wrapper">
        <header className="blog-header">
          <h1>{title}</h1>
          <div className="subtitle">
            <div className="blog-author">
              <em>{author}</em>
            </div>
            <div className="blog-date">
              <em>Published: {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</em>
            </div>
          </div>
          {featuredImage && (
            <GatsbyImage
              image={featuredImage.childImageSharp.gatsbyImageData}
            />
          )}
        </header>
        <main className="blog-content">{children}</main>
      </div>

      <footer>Copyright 2025 Oskar Mroz</footer>
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
        type: "article",
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
            gatsbyImageData(
              quality: 100
              webpOptions: { quality: 100 }
              width: 800
              placeholder: BLURRED
            )
          }
        }
      }
      internal {
        contentFilePath
      }
      tableOfContents(maxDepth: 2)
    }
  }
`;
