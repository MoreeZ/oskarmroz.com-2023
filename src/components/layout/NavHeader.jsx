import React from "react";
import { Link } from "gatsby";
// icons
import HomeIcon from "../../icons/home.svg";
import SoftwareIcon from "../../icons/software.svg";
import UiDesginIcon from "../../icons/ui-design.svg";
import PhotographyIcon from "../../icons/photography.svg";
import BlogsIcon from "../../icons/blogs.svg";
// styles
import "../../styles/layout/header.scss";

const NAV_ITEMS = [
  {
    text: "Home",
    icon: <HomeIcon className="nav-icon" />,
    href: "/",
  },
  {
    text: "Software",
    icon: <SoftwareIcon className="nav-icon" />,
    href: "/software-development/",
  },
  {
    text: "UI Design",
    icon: <UiDesginIcon className="nav-icon" />,
    href: "/ui-design/",
  },
  {
    text: "Photography",
    icon: <PhotographyIcon className="nav-icon" />,
    href: "/photography/",
  },
  {
    text: "Blogs",
    icon: <BlogsIcon className="nav-icon" />,
    href: "/blogs/",
  },
];

export default function NavHeader() {
  if (typeof window === "undefined") return null;
  const { pathname } = window.location;
  return (
    <div className="header-container" name="navbar">
      <div className="nav-list">
        {NAV_ITEMS.map((item, index) => (
          <Link
            key={index}
            className={
              "nav-element " +
              item.src +
              (pathname === item.href ? " active" : "")
            }
            to={item.href}
          >
            {item.icon}
            <span className="nav-text">{item.text}</span>
            <div className="underline" />
          </Link>
        ))}
      </div>
      <div className="mobile-nav-list">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <h2 className="top-title">Oskar Mroz</h2>
          <div className="menu-items">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                className={
                  "nav-element " +
                  item.src +
                  (pathname === item.href ? " active" : "")
                }
                to={item.href}
                // data-aos-once="true"
                // data-aos="fade-down"
                // data-aos-delay={0 + index * 100}
              >
                {item.icon}
                <span className="nav-text">{item.text}</span>
                <div className="underline" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
