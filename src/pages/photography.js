import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// components
import Heading from "../components/common/Heading";
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import PhotoCard from "../components/photography/PhotoCard";
//styles
import "../styles/photography/photography-page.scss";
import "../styles/photography/photography-card.scss";
import "../styles/common/image-modal.scss";

export default function Photography() {
  const imageData = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          relativeDirectory: { eq: "photography" }
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
              )
            }
          }
        }
      }
    }
  `);
  const images = imageData.allFile.edges;

  return (
    <DefaultPageLayout
      title="Photography - Oskar Mroz, Ireland"
      description="Oskar Mroz is a software developer from Ireland who also has a passion for photography. He enjoys capturing stunning portraits, landscapes, and events with his camera. Browse his photography portfolio and see the world through his lens."
    >
      <Heading title="Photography" />
      {/* body */}
      <div className="photography-page-content">
        {images.map((image, index) => (
          <PhotoCard image={image} key={index} alt={"Photo gallery item #" + index+1}/>
        ))}
      </div>
    </DefaultPageLayout>
  );
}
