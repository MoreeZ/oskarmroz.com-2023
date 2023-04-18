import React from "react";
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import Heading from "../components/common/Heading";

export default function blogs() {
  return (
    <DefaultPageLayout
      title="Blogs - Oskar Mroz, Ireland"
      description="If you're seeing this then please remind me to write this description."
    >
      <Heading title="Blogs" />
      {/* body */}
    </DefaultPageLayout>
  );
}
