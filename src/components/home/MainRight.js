import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
// images and icons
import PointArrowIcon from "../../icons/point-arrow.svg";
import GithubIcon from "../../icons/github.svg";
import LinkedinIcon from "../../icons/linkedin.svg";
import DribbleIcon from "../../icons/dribble.svg";
import InstagramIcon from "../../icons/instagram.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function MainRight() {
  const SOCIALS = [
    {
      icon: <GithubIcon className="social-icon" />,
      text: "Github",
      link: "https://github.com/MoreeZ",
    },
    {
      icon: <LinkedinIcon className="social-icon" />,
      text: "Linkedin",
      link: "https://www.linkedin.com/in/oskar-mroz/",
    },
    {
      icon: <DribbleIcon className="social-icon" />,
      text: "Dribble",
      link: "https://dribbble.com/MoreeZ",
    },
    {
      icon: <InstagramIcon className="social-icon" />,
      text: "Instagram",
      link: "https://www.instagram.com/oskar_mroz_photography/",
    },
  ];
  const { profile } = useStaticQuery(graphql`
    {
      profile: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            quality: 100
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
    }
  `);
  const image = getImage(profile);

  return (
    <div className="landing-main-right">
      <div className="profile-card">
        <div className="img-container">
          {/* <img src={profilePic} alt="Profile picture of Oskar Mroz" /> */}
          <GatsbyImage
            image={image}
            alt="Profile picture of Oskar Mroz"
            loading="eager"
          />
          <div
            className="this-is-me"
            data-aos-once="true"
            data-aos="fade-in"
            data-aos-delay="3000"
          >
            <div className="text">This is me :)</div>
            <PointArrowIcon className="point-arrow" />
          </div>
        </div>
        <div className="socials">
          {SOCIALS.map((social, index) => (
            <a
              key={index}
              className="social"
              href={social.link}
              target="_blank"
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay={100 + 100 * index}
            >
              {social.icon}
              <p className="text">{social.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
