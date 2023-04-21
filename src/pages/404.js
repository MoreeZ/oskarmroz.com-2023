import React, { useEffect } from "react";
import { navigate } from "gatsby";
import DefaultPageLayout from "../components/layout/DefaultPageLayout";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <DefaultPageLayout title={"Oskar Mroz - Page not found"}>
      <div>Redirecting...</div>
    </DefaultPageLayout>
  );
};

export default NotFoundPage;
