import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// components
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import SoftwareCard from "../components/software-development/SoftwareCard";
// styles
import "../styles/software/software-page.scss";
import "../styles/software/software-card.scss";
// icons
import GithubIcon from "../icons/github.svg";
import WebIcon from "../icons/web-link.svg";
import PlayStoreIcon from "../icons/playstore.svg";
import LinkedinIcon from "../icons/linkedin.svg";
import InstagramIcon from "../icons/instagram.svg";
import TwitterLogoIcon from "../icons/twitter-logo.svg";
import SEO from "../components/layout/SEO";

export default function SoftwareDevelopment({ location }) {
  const imageData = useStaticQuery(graphql`
    {
      ldl: file(relativePath: { eq: "ldl_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      mgnn: file(relativePath: { eq: "mgnn-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      luna: file(relativePath: { eq: "luna_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      rap: file(relativePath: { eq: "rap_icon.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      riverpeople: file(relativePath: { eq: "riverpeople_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      formula: file(relativePath: { eq: "formula_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
      oldIcon: file(relativePath: { eq: "old_website_icon.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  const CURRENT_PROJECTS_DATA = [
    // {
    //   image: imageData.clove,
    //   alt: "Clove Software Logo",
    //   heading: "Clove Software",
    //   description: (
    //     <>
    //       I am working on a startup developing and selling productivity
    //       software. Some of our current products in development include{" "}
    //       <a href="https://trackl.ie">Trackl.ie</a>,{" "}
    //       <a href="https://taskl.ie">Taskl.ie</a>, and{" "}
    //       <a href="https://ticketl.ie">Ticketl.ie</a>.
    //     </>
    //   ),
    //   links: [
    //     { icon: <WebIcon />, text: "Website", link: "https://clove.ie" },
    //     {
    //       icon: <LinkedinIcon />,
    //       text: "LinkedIn",
    //       link: "https://www.linkedin.com/company/clove-software",
    //     },
    //     {
    //       icon: <GithubIcon />,
    //       text: "Github",
    //       link: "https://github.com/CloveSoftware",
    //     },
    //   ],
    // },
    {
      image: imageData.ldl,
      alt: "Meall an Óige Logo",
      heading: "Meall an Óige",
      description: (
        <>
          Meall an Óige is an interactive learning platform for young Irish
          learners that builds early literacy through songs, games, and
          native-speaker speech. It teaches key sound contrasts and
          pronunciation using ABAIR technologies.
        </>
      ),
      links: [
        {
          icon: <WebIcon />,
          text: "Meall an Óige Website",
          link: "https://meallanoige.abair.ie",
        },
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
      image: imageData.mgnn,
      alt: "Míle Glór na nÓg",
      heading: "Míle Glór na nÓg",
      description: (
        <>
          A web app for a campaign aimed at improving Irish speech recognition.
          The campaign collects recordings of children reading Irish-language
          stories aloud. The goal is to enhance speech technology for young
          Irish speakers through daily contributions from fluent readers.
        </>
      ),
      links: [
        {
          icon: <WebIcon />,
          text: "Míle Glór na nÓg",
          link: "https://mileglornanog.abair.ie",
        },
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
          Luna is a society of scientists who share the passion for advanced
          technologies. The society works on building rockets, researching
          biofeedback techniques and running workshops to promote space science.
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

  const PAST_PROJECTS_DATA = [
    {
      image: imageData.rap,
      alt: "Random Anime Picker App",
      heading: "Random Anime Picker App",
      description: (
        <>
          I developed an app for anime fans that helped them choose their next
          anime from "MyAnimeList" database. It received thousands of downloads
          and positive reviews, but stopped working due to changes in the API.
        </>
      ),
      links: [
        {
          icon: <PlayStoreIcon />,
          text: "Google Play",
          link: "https://play.google.com/store/apps/details?id=com.randomanimepicker&hl=en&gl=US&pli=1",
        },
        {
          icon: <WebIcon />,
          text: "Website",
          link: "https://randomanimepicker.web.app",
        },
        {
          icon: <GithubIcon />,
          text: "Github",
          link: "https://github.com/MoreeZ/random_anime_and_manga_picker_android",
        },
      ],
    },
    {
      image: imageData.oldIcon,
      alt: "Old Portfolio",
      heading: "Old Portfolio website",
      description: (
        <>
          At the age of 17, I developed a portfolio using the create-react-app
          and class components. Although these technologies are now outdated,
          the website still maintains a visually appealing design. I included it
          in this list due to its nice design.
        </>
      ),
      links: [
        {
          icon: <WebIcon />,
          text: "Website",
          link: "https://old.oskarmroz.com",
        },
        {
          icon: <GithubIcon />,
          text: "Github",
          link: "https://github.com/MoreeZ/oskarmroz-com",
        },
      ],
    },
    {
      image: imageData.formula,
      alt: "Formula Trinity Logo PNG",
      heading: "Formula Trinity Website",
      description: (
        <>
          I maintained and optimized the society website for a short period. I
          actively updated website information. I also optimized page loading
          times by reducing server response time.
        </>
      ),
      links: [
        {
          icon: <WebIcon />,
          text: "Website",
          link: "https://formulatrinity.com",
        },
        {
          icon: <InstagramIcon />,
          text: "Instagram",
          link: "https://www.instagram.com/formulatrinity",
        },
      ],
    },
    {
      image: imageData.riverpeople,
      alt: "River People Logo PNG",
      heading: "River People Ecuador Website",
      description: (
        <>
          I maintained, improved and managed the company website for a period of
          three months. During that time I drastically boosted the company web
          presence and website search engine rankings.
        </>
      ),
      links: [
        {
          icon: <WebIcon />,
          text: "Website",
          link: "https://riverpeopleecuador.com",
        },
        {
          icon: <InstagramIcon />,
          text: "Instagram",
          link: "https://www.instagram.com/riverpeopleecuador",
        },
      ],
    },
    {
      image: null,
      alt: "Lavista Canoa",
      heading: "Lavista Canoa Webpage",
      description: (
        <>
          A website I made for an owner of a hotel I stayed at on a beach in
          Ecuador. The owner changed his mind after agreeing on the offer. I
          left the project as an unfinished demo.
        </>
      ),
      links: [
        {
          icon: <WebIcon />,
          text: "Website",
          link: "https://lavista-demo.web.app",
        },
        {
          icon: <GithubIcon />,
          text: "Github",
          link: "https://github.com/MoreeZ/lavista",
        },
      ],
    },
    {
      image: null,
      alt: "APM AUTOMOTIVE",
      heading: "APM AUTOMOTIVE",
      description: (
        <>
          APM AUTOMOTIVE is a website made for a small business in Poland. The
          website was used by the owner for some time until their domain expired
          and they decided to stop hosting it.
        </>
      ),
      links: [
        {
          icon: <WebIcon />,
          text: "Website",
          link: "https://apm-automotive.web.app",
        },
        {
          icon: <GithubIcon />,
          text: "Github",
          link: "https://github.com/MoreeZ/apm-automotive",
        },
      ],
    },
  ];

  return (
    <DefaultPageLayout title="Software Development" location={location}>
      <div className="software-page">
        <h2
          className="divider-heading"
          // data-aos="zoom-in"
          // data-aos-offset="-40"
        >
          Current Projects
        </h2>
        <div className="software-projects-list">
          {CURRENT_PROJECTS_DATA.map((data, index) => (
            <SoftwareCard data={data} key={index} />
          ))}
        </div>
        <h2
          className="divider-heading"
          // data-aos="zoom-in"
          // data-aos-offset="-40"
        >
          Past Projects
        </h2>
        <div className="software-projects-list">
          {PAST_PROJECTS_DATA.map((data, index) => (
            <SoftwareCard data={data} key={index} />
          ))}
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export function Head() {
  return (
    <SEO
      title="Software Development: Oskar Mroz, Ireland"
      description="Oskar Mroz is a software developer from Ireland who specializes in user-friendly websites and apps using React.js and React Native. Check out his projects."
    />
  );
}
