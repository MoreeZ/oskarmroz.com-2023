import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// components
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import Heading from "../components/common/Heading";
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
      allMdx {
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
                  height: 150
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

  console.log(blogsData);
  return (
    <DefaultPageLayout>
      <Heading title="Blogs" />
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
      title="Blogs - Oskar Mroz, Ireland"
      description="Oskar Mroz is a software developer from Ireland who also loves blogging. He writes about his experiences, insights, and opinions on various topics related to software development, UI design, photography, and more. Read his latest blog posts and join the discussion."
    />
  );
}
