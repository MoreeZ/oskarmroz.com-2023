import { graphql, Link } from "gatsby";
import React from "react";
import "../styles/blogs/blog-template.scss";
import "prismjs/themes/prism-okaidia.min.css";
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/layout/SEO";
import GithubIcon from "../icons/github.svg";

export default function Blogs({ data, children }) {
  const {
    internal,
    frontmatter: { title, date, author, featuredImage },
  } = data.mdx;
  const localPath = [
    ...internal.contentFilePath.split(
      "/oskarmroz.com-2023/opt/buildhome/repo/"
    ),
  ].pop();
  console.log(internal.contentFilePath);

  return (
    <div className="blog-page">
      <div className="blog-page-topbar">
        <Link to="/" className="oskar-mroz">
          {"<- my website"} 
        </Link>
        <div className="socials">
          <a
            href={
              "https://github.com/MoreeZ/oskarmroz.com-2023/blob/main " +
              localPath
            }
            target="_blank"
            rel="noopener"
          >
            <GithubIcon className="social-icon" />
          </a>
        </div>
      </div>

      <div className="blog-wrapper">
        <header className="blog-header">
          <h1>{title}</h1>
          <div className="subtitle">
            <div className="blog-author">
              <em>{author}</em>
            </div>
            <div className="blog-date">
              <em>Published: {new Date(date).toDateString()}</em>
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
            gatsbyImageData(width: 800)
          }
        }
      }
      internal {
        contentFilePath
      }
    }
  }
`;
