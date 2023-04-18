import * as React from "react";
import "../styles/landing/section.scss";
// Components
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import Heading from "../components/common/Heading";
import LandingMain from "../components/home/LandingMain";
import LandingSection from "../components/home/LandingSection";

// Images
import softwareDevImage from "../images/software-dev.jpg";
import uiDesignImage from "../images/ui-design.jpg";
import photographyImage from "../images/photography.jpg";
import blogsImage from "../images/blogs.jpg";

// Icons
import SoftwareIcon from "../icons/software.svg";
import UiDesginIcon from "../icons/ui-design.svg";
import PhotographyIcon from "../icons/photography.svg";
import BlogsIcon from "../icons/blogs.svg";

export default function IndexPage() {
  return (
    <DefaultPageLayout
      title="Oskar Mroz - Software Developer from Ireland"
      description="Ticketl.ie offers cheap and simple ticketing for events and conferences. Get as many tickets as you like for one affordable fee. Our platform makes it easy for organizers to manage ticket sales and attendees."
      keywords="ticketing, events, conferences, affordable, cheap, simple, organizer, manage, attendees"
      canonical="https://ticketl.ie/"
    >
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
