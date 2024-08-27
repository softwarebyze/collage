"use client";

import { Collage, randBetween, randomChoice } from "@/collage";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

const getCollageItemStyle = () => {
  const settings = {
    topRange: [0, 90],
    leftRange: [0, 90],
    bottomRange: [0, 90],
    rightRange: [0, 90],
    rotateRange: [-12, 12],
    scaleRange: [0.9, 1.1],
  };

  const transform = `translateX(${randBetween(
    -100,
    100
  )}%) translateY(${randBetween(-100, 100)}%) rotate(${randBetween(
    -12,
    12
  )}deg)`;

  const defaults = {
    position: "absolute" as const,
    transform,
  };

  const positionStyles = randomChoice([
    // from top left
    {
      top: `${randBetween(settings.topRange[0], settings.topRange[1])}%`,
      left: `${randBetween(settings.leftRange[0], settings.leftRange[1])}%`,
    },
    // from bottom right
    {
      bottom: `${randBetween(
        settings.bottomRange[0],
        settings.bottomRange[1]
      )}%`,
      right: `${randBetween(settings.rightRange[0], settings.rightRange[1])}%`,
    },
  ]);

  return { ...positionStyles, ...defaults };
};

// ❌  Doesn't work because the next/image component doesn't forward refs
// const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
//   function ExoticImageWrapper(props, ref) {
//     return <Image {...props} ref={ref} />; // ❌  this is not forwarded
//   }
// );

// const MotionImage = motion(ExoticImage);

const width = 300;
const height = 250;

const images = [
  {
    src: "/images/a.webp",
    alt: "Fitness 1",
    width,
    height,
  },
  {
    src: "/images/b.webp",
    alt: "Fitness 2",
    width,
    height,
  },
  {
    src: "/images/c.webp",
    alt: "Fitness 3",
    width,
    height,
  },
];

export const AnimatedFitnessCollage = () => {
  const [items, setItems] = useState<
    {
      src: string;
      alt: string;
      width: number;
      height: number;
      animate: AnimationProps["animate"];
      style: React.CSSProperties;
    }[]
  >([]);

  useInterval(() => {
    setItems((prev) => [
      ...prev,
      {
        ...randomChoice(images),
        animate: { ...getCollageItemStyle(), opacity: 1 },
        style: { scale: `${randBetween(0.9, 1.1)}` },
      },
    ]);
  }, 1500);

  const initial = {
    opacity: 0,
    top: "50%",
    bottom: "50%",
    left: "50%",
    right: "50%",
    transform: `translateX(50%) translateY(50%) rotate(0)`,
  };

  return (
    <Collage style={{ width: "100%", height: "400px" }}>
      <AnimatePresence>
        {items.map((item, i) => {
          return (
            <motion.img
              key={item.src + i}
              alt={item.alt}
              src={item.src}
              width={item.width}
              height={item.height}
              initial={initial}
              animate={item.animate}
              style={item.style}
            />
          );
        })}
      </AnimatePresence>
    </Collage>
  );
};
