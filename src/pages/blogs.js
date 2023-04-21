import React from "react";
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import Heading from "../components/common/Heading";
import SEO from "../components/layout/SEO";

export default function blogs() {
  return (
    <DefaultPageLayout>
      <Heading title="Blogs" />
      {/* body */}
    </DefaultPageLayout>
  );
}

export function Head() {
  return (
    <SEO
      title="Blogs - Oskar Mroz, Ireland"
      description="Oskar Mroz is a software developer from Ireland who also loves blogging. He writes about his experiences, insights, and opinions on various topics related to software development, UI design, photography, and more. Read his latest blog posts and join the discussion."
    />
  );
}
