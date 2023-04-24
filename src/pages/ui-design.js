import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// components
import Heading from "../components/common/Heading";
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import DesignCard from "../components/ui-design/DesignCard";
//styles
import "../styles/ui-design/ui-design-page.scss";
import "../styles/ui-design/ui-design-card.scss";
import "../styles/common/image-modal.scss";
import SEO from "../components/layout/SEO";

export default function UIDesign() {
  const imageData = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          relativeDirectory: { eq: "ui-design" }
          extension: { regex: "/(png|jpeg|jpg)/" }
        }
        sort: { relativePath: ASC }
      ) {
        edges {
          node {
            publicURL
            childImageSharp {
              gatsbyImageData(
                width: 800
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                aspectRatio: 1.333
              )
            }
          }
        }
      }
    }
  `);
  const images = imageData.allFile.edges;
  return (
    <DefaultPageLayout title="UI Design">
      <div className="ui-design-page-content">
        {images.map((image, index) => (
          <DesignCard
            image={image}
            key={index}
            alt={"UI Design showcase image #" + index + 1}
          />
        ))}
      </div>
    </DefaultPageLayout>
  );
}

export function Head() {
  return (
    <SEO
      title="UI Design: Oskar Mroz, Ireland"
      description="Oskar Mroz is a software developer from Ireland who values good UI design. See his UI design projects to learn more about his principles and tools."
    />
  );
}
