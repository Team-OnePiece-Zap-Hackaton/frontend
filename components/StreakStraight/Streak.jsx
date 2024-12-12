import React, { useEffect } from "react";
import { StreakLogo } from "../StyledComponents/styledComp";
import { motion, useCycle } from "framer-motion";

const Streak = () => {
  return (
    <>
      <StreakLogo>
        <div className="mobile">
          <div className="logo">
            <img src={"/streak_logo.png"} alt="" />
          </div>
          <div className="streakBtn" />
        </div>
        <div className="base">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
          <div className="line4" />
        </div>
      </StreakLogo>
    </>
  );
};
export default Streak;
