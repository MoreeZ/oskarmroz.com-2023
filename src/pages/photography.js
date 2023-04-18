import React from "react";
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import Heading from "../components/common/Heading";

export default function Photography() {
  return (
    <DefaultPageLayout
      title="Photography - Oskar Mroz, Ireland"
      description="If you're seeing this then please remind me to write this description."
    >
      <Heading title="Photography" />
      {/* body */}
    </DefaultPageLayout>
  );
}
