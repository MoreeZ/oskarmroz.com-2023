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
            )
          }
        }
      }
    `);

  return (
    <DefaultPageLayout>
      <Heading title="About me" />
      <LandingMain />
      <LandingSection
        icon={<SoftwareIcon class="icon" />}
        image={softwareDevImage}
        title="Software Development"
        href="/software-development"
        id="software"
      />
      <LandingSection
        icon={<UiDesginIcon class="icon" />}
        image={uiDesignImage}
        title="UI Design"
        href="/ui-design"
        id="ui-design"
      />
      <LandingSection
        icon={<PhotographyIcon class="icon" />}
        image={photographyImage}
        title="Photography"
        href="/photography"
        id="photography"
      />
      <LandingSection
        icon={<BlogsIcon class="icon" />}
        image={blogsImage}
        title="Blogs"
        href="/blogs"
        id="blogs"
      />
    </DefaultPageLayout>
  );
}

export const Head = () => <title>Oskar Mroz</title>;
