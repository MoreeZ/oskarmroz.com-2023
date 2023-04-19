import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// components
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import Heading from "../components/common/Heading";
import SoftwareCard from "../components/software-development/SoftwareCard";
// styles
import "../styles/software/software-page.scss";
import "../styles/software/software-card.scss";
// icons
import GithubIcon from "../icons/github.svg";
import WebIcon from "../icons/web-link.svg";
import LinkedinIcon from "../icons/linkedin.svg";
import InstagramIcon from "../icons/instagram.svg";
import TwitterLogoIcon from "../icons/twitter-logo.svg";

export default function SoftwareDevelopment() {
  const imageData = useStaticQuery(graphql`
    {
      clove: file(relativePath: { eq: "clove_icon.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 150
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      ldl: file(relativePath: { eq: "ldl_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 150
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      luna: file(relativePath: { eq: "luna_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 150
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  const PROJECTS_DATA = [
    {
      image: imageData.clove,
      alt: "Clove Software Logo",
      heading: "Clove Software",
      description: (
        <>
          I am working on a startup developing and selling productivity
          software. Some of our current products in development include
          Trackl.ie, Taskl.ie, and Ticketl.ie.
        </>
      ),
      links: [
        { icon: <WebIcon />, text: "Website", link: "https://clove.ie" },
        {
          icon: <LinkedinIcon />,
          text: "LinkedIn",
          link: "https://www.linkedin.com/company/clove-software",
        },
        {
          icon: <GithubIcon />,
          text: "Github",
          link: "https://github.com/CloveSoftware",
        },
      ],
    },
    {
      image: imageData.ldl,
      alt: "Lon don Leon Logo",
      heading: "Lón don Leon",
      description: (
        <>
          I am currently working for Abair, a research laboratory in Trinity
          College, Dublin. I am developing a React Native app teaching aspects
          of Irish phonology to pre-literate children.
        </>
      ),
      links: [
        { icon: <WebIcon />, text: "Abair Website", link: "https://abair.ie" },
        {
          icon: <GithubIcon />,
          text: "Github",
          link: "https://github.com/phonlab-tcd",
        },
        {
          icon: <TwitterLogoIcon />,
          text: "Twitter",
          link: "https://twitter.com/phonetics_tcd",
        },
      ],
    },
    {
      image: imageData.luna,
      alt: "Luna Technology Society Logo",
      heading: "Luna Technology Society",
      description: (
        <>
          I’m a part of a society is Poland that builds model rocket ships. My
          roles include design and software development. I am currently
          maintaining the official website.
        </>
      ),
      links: [
        { icon: <WebIcon />, text: "Website", link: "https://lunatech.pl" },
        {
          icon: <GithubIcon />,
          text: "Github",
          link: "https://github.com/Luna-Technology-Society",
        },
        {
          icon: <InstagramIcon />,
          text: "Instagram",
          link: "https://www.instagram.com/lsdlunaspacedevelopment/?hl=en",
        },
      ],
    },
  ];

  return (
    <DefaultPageLayout
      title="Software Development - Oskar Mroz, Ireland"
      description="If you're seeing this then please remind me to write this description."
    >
      <Heading title="Software Development" />
      <div className="software-page">
        <h2 className="divider-heading">Current Projects</h2>
        <div className="software-projects-list">
          {PROJECTS_DATA.map((data, index) => (
            <SoftwareCard data={data} key={index} />
          ))}
        </div>
      </div>
    </DefaultPageLayout>
  );
}
