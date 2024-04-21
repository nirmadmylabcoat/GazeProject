import { useRef } from "react";
import { motion, useTransform, useScroll } from 'framer-motion';
import React from "react";


const Example = () => {
  return (
    <motion.div className="scroll"
    initial={{ opacity: 0, y: -180}}
    animate={{ opacity: 1, y: 0}}
    transition={{ ease: "easeInOut", duration: 1, delay: .6}}>
    <div className="bg-neutral-900">
      <Scroll />
    </div>
    </motion.div>
  );
};

const Scroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <span className="font-semibold uppercase text-neutral-500 md:text-[12rem] ml-4 text-[7rem]">
          TRENDING COLLECTION
        </span>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute grid inset-0 z-10 place-content-end">
        <p className="p-8 text-2xl uppercase font-normal text-white">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/images/model1b.webp",
    title: "SATIN PINK BODYCON DRESS",
    id: 10,
  },
  {
    url: "/images/model7b.png",
    title: "Casual Printed shirt",
    id: 43,
  },
  {
    url: "/images/model42a.png",
    title: "biege sleeveless vest",
    id: 45,
  },
  {
    url: "/images/model33a.png",
    title: "distressed denim shorts",
    id: 31,
  },
  {
    url: "/images/model6b.png",
    title: "Brown Hoodie",
    id: 40,
  },
  {
    url: "/images/model30b.png",
    title: "white corset top",
    id: 22,
  },
  {
    url: "/images/model22a.png",
    title: "white oversized pullover",
    id: 2,
  },
  {
    url: "/images/model23a.png",
    title: "cocoa sweatshirt dress",
    id: 4,
  },
  {
    url: "/images/model21b.png",
    title: "black zipper jacket",
    id: 45,
  },
  {
    url: "/images/model9b.png",
    title: "rugrats oversized tee",
    id: 45,
  },
];