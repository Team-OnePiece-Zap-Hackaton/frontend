import React from "react";
import { SplashCont } from "../StyledComponents/styledComp";
import { motion } from "framer-motion";
import Streak from "../StreakStraight/Streak";

const SplashVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
  exit: {
    ease: "easeOut",
  },
};
const MottoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 4,
    },
  },
};

const Splash = () => {
  return (
    <>
      <SplashCont>
        <motion.div
          className="splash"
          variants={SplashVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Streak />
          {/* <motion.div className="text" variants={StreakVariants}>
            <h2>ZAP</h2>
          </motion.div> */}
          <motion.p className="motto" variants={MottoVariants}>
            Let's get that wallet going
          </motion.p>
        </motion.div>
      </SplashCont>
    </>
  );
};
export default Splash;
