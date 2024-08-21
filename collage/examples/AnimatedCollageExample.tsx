"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Collage } from "../Collage";
import { getCollageItemStyle } from "../getCollageItemStyle";
import { useState } from "react";
import { randomChoice } from "../utils";
import { useInterval } from "usehooks-ts";

export const AnimatedCollageExample = ({ height = "400px" }) => {
  const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "pink",
    "cyan",
    "magenta",
  ];
  const [items, setItems] = useState<any[]>(
    Array.from({ length: 200 }).map(() => ({
      color: randomChoice(colors),
      animate: getCollageItemStyle(),
    }))
  );

  useInterval(() => {
    if (items.length > 500) return;
    setItems((prev) => [
      ...prev,
      {
        color: randomChoice(colors),
        animate: { ...getCollageItemStyle(), position: undefined },
      },
    ]);
  }, 500);

  return (
    <Collage style={{ width: "100%", height }}>
      <AnimatePresence>
        {items.map(({ color, animate }, index) => (
          <motion.div
            key={index}
            style={{
              backgroundColor: color,
              width: "6rem",
              height: "3rem",
              position: "absolute",
            }}
            initial={{
              opacity: 0,
              scale: 0,
              top: "50%",
              bottom: "50%",
              left: "50%",
              right: "50%",
              transform: `translateX(50%) translateY(50%) rotate(50%)`,
            }}
            animate={{
              ...animate,
              opacity: 1,
            }}
          />
        ))}
      </AnimatePresence>
    </Collage>
  );
};
