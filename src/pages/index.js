import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Components
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import LandingMain from "../components/home/LandingMain";
import LandingSection from "../components/home/LandingSection";
// Icons
import SoftwareIcon from "../icons/software.svg";
import UiDesginIcon from "../icons/ui-design.svg";
import PhotographyIcon from "../icons/photography.svg";
import BlogsIcon from "../icons/blogs.svg";
// Styles
import "../styles/landing/section.scss";
import SEO from "../components/layout/SEO";

export default function IndexPage({ location }) {
  console.log("location: ", location);
  const { softwareDevImage, uiDesignImage, photographyImage, blogsImage } =
    useStaticQuery(graphql`
      {
        softwareDevImage: file(relativePath: { eq: "software-dev.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 50
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [WEBP, AVIF, JPG]
            )
          }
        }
        uiDesignImage: file(relativePath: { eq: "ui-design.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 50
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [WEBP, AVIF, JPG]
            )
          }
        }
        photographyImage: file(relativePath: { eq: "photography.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 50
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [WEBP, AVIF, JPG]
            )
          }
        }
        blogsImage: file(relativePath: { eq: "blogs.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 50
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [WEBP, AVIF, JPG]
            )
          }
        }
      }
    `);

  return (
    <DefaultPageLayout title="About me" location={location}>
      <LandingMain />
      <LandingSection
        icon={<SoftwareIcon className="icon" />}
        image={softwareDevImage}
        alt={"A screen with code"}
        title="Software Development"
        href="/software-development"
        id="software"
        description="I love creating elegant and functional web applications using various frameworks and languages. Here are some of the projects that I am proud of."
      />
      <LandingSection
        icon={<UiDesginIcon className="icon" />}
        image={uiDesignImage}
        alt={"UI Design example"}
        title="UI Design"
        href="/ui-design"
        id="ui-design"
        description="I believe that a good user interface is essential for a successful web application. Here are some of the UI designs that I have created."
      />
      <LandingSection
        icon={<PhotographyIcon className="icon" />}
        image={photographyImage}
        alt={"Japanese man street food night tokyo"}
        title="Photography"
        href="/photography"
        id="photography"
        description="I enjoy taking photos with my camera, capturing the stunning landscapes and the vibrant city at night. Here are some of the photos that I have taken and edited."
      />
      {/*
      <LandingSection
        icon={<BlogsIcon className="icon" />}
        image={blogsImage}
        alt={"typewriter hands pexels"}
        title="Blogs"
        href="/blogs"
        id="blogs"
        description="I like writing blogs on topics that interest me. Mainly programming, design and personal rants. Here are some of the blogs that I have written and published."
      />
      */}
    </DefaultPageLayout>
  );
}

export function Head() {
  return <SEO />;
}
