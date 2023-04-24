import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// components
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import SEO from "../components/layout/SEO";
import BlogCard from "../components/blogs/BlogCard";
// styles
import "../styles/blogs/blogs-page.scss";
import "../styles/blogs/blogs-card.scss";

export default function Blogs() {
  const {
    allMdx: { nodes: blogsData },
  } = useStaticQuery(graphql`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            slug
            readTime
            title
            description
            date
            author
            previewImage {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  height: 160
                  aspectRatio: 1
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  webpOptions: { quality: 100 }
                )
              }
            }
          }
        }
      }
    }
  `);

  return (
    <DefaultPageLayout title="Blogs">
      <div className="blogs-page">
        <div className="blogs-list">
          {blogsData.map((blog) => (
            <BlogCard data={blog.frontmatter} />
          ))}
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export function Head() {
  return (
    <SEO
      title="Blogs: Oskar Mroz, Ireland"
      description="Oskar Mroz, a software developer from Ireland, Read his latest blogs about software development, UI design, & photography."
    />
  );
}
