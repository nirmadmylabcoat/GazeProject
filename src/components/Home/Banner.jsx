import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


//variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut", // Use a built-in easing function
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className="banner leading-[20rem]" variants={banner}>
      <BannerRowTop title={"brand"} />
      <BannerRowCenter title={"fashion"} playMarquee={playMarquee} />
      <BannerRowBottom title={"studio"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        key={index} // Unique key prop added here
        className="row-letter"
        variants={letterAnimation}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);


const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="row-col"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
      >
        <span className="row-message">
          Turn Heads With Our Chicest Fashion Picks, Grab Yours Now. Only On Gaze.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        className="scroll leading-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }} // Use a built-in easing function
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default Banner;
