import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

export default function SplashScreen() {
  return (
    <div id="loader-wrapper">
      <BeatLoader
        color="white"
        loading={true}
        size={"10vw"}
        aria-label="Loading"
        data-testid="loader"
      />
    </div>
  );
}
