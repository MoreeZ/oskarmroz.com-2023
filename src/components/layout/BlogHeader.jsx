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

export default function Header() {
  if (typeof window === "undefined") return null;
  const { pathname } = window.location;
  return (
    <div className="nav-header-container" name="navbar">
        
    </div>
  );
}
