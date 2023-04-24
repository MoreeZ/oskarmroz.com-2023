import React, { useState } from "react";
import { Link } from "gatsby";
import GithubIcon from "../../icons/github.svg";
import EmailIcon from "../../icons/email_v2.svg";
import InformationModal from "../common/InformationModal";

export default function BlogTemplateTopbar({ localPath }) {
  const [contactOpen, setContactOpen] = useState(true);
  const handleOpenModal = () => {
    setContactOpen(true);
  };
  return (
    <div className="blog-page-topbar">
    <InformationModal
      content={"oskar@clove.ie"}
      isOpen={contactOpen}
      setIsOpen={setContactOpen}
    />
      <Link to="/blogs/" className="nav-left">
        {"<- more blogs"}
      </Link>
      <div className="socials">
        <span className="text">Oskar Mroz Blogs</span>
        <a
          href={
            "https://github.com/MoreeZ/oskarmroz.com-2023/blob/main/" +
            localPath
          }
          target="_blank"
          rel="noopener"
        >
          <GithubIcon className="social-icon" />
        </a>
        {/* <button aria-label="Contact Email" onClick={handleOpenModal}>
          <EmailIcon className="social-icon" />
        </button> */}
      </div>
    </div>
  );
}
