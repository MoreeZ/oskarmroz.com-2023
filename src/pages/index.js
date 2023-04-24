import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Components
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import Heading from "../components/common/Heading";
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

export default function IndexPage() {
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
    <DefaultPageLayout title="About me">
      <LandingMain />
      <LandingSection
        icon={<SoftwareIcon className="icon" />}
        image={softwareDevImage}
        alt={"A screen with code"}
        title="Software Development"
        href="/software-development"
        id="software"
      />
      <LandingSection
        icon={<UiDesginIcon className="icon" />}
        image={uiDesignImage}
        alt={"UI Design example"}
        title="UI Design"
        href="/ui-design"
        id="ui-design"
      />
      <LandingSection
        icon={<PhotographyIcon className="icon" />}
        image={photographyImage}
        alt={"Japanese man street food night tokyo"}
        title="Photography"
        href="/photography"
        id="photography"
      />
      <LandingSection
        icon={<BlogsIcon className="icon" />}
        image={blogsImage}
        alt={"typewriter hands pexels"}
        title="Blogs"
        href="/blogs"
        id="blogs"
      />
    </DefaultPageLayout>
  );
}

export function Head() {
  return <SEO />;
}
