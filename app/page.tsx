"use client";
import React, { useState, useEffect } from "react";
import Splash from "../components/SplashPage/Splash";

const LandingPage = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    if (splash == true) {
      setTimeout(() => {
        window.location.href = "/onboard";
      }, 5000);
    }
  }, [splash]);
  return (
    <>
      {splash && (
        <>
          <div>
            <Splash />
          </div>
        </>
      )}
    </>
  );
};
export default LandingPage;
