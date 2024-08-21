"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Collage } from "../Collage";
import { getCollageItemStyle } from "../getCollageItemStyle";
import { useState } from "react";
import { randomChoice } from "../utils";
import { useInterval } from "usehooks-ts";

const media = [
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1682686581498-5e85c7228119",
  },
  { type: "image", src: "https://picsum.photos/id/1015/600/400" },
];

export const AnimatedMediaExampleCollage = ({ height = "400px" }) => {
  const [items, setItems] = useState(() =>
    media.map((mediaStuff) => ({
      media: mediaStuff,
      animate: { ...getCollageItemStyle(), opacity: 1 },
    }))
  );

  useInterval(() => {
    if (items.length > 500) return;
    // @ts-ignore
    setItems((prev) => [
      ...prev,
      {
        media: randomChoice(media),
        animate: { ...getCollageItemStyle(), position: undefined, opacity: 1 },
      },
    ]);
  }, 1500);

  const initial = {
    opacity: 0,
    scale: 0,
    top: "50%",
    bottom: "50%",
    left: "50%",
    right: "50%",
    transform: `translateX(50%) translateY(50%) rotate(50%)`,
  };

  return (
    <Collage style={{ width: "100%", height }}>
      <AnimatePresence>
        {items.map(({ media: { type, src }, animate }, i) =>
          type === "image" ? (
            <motion.img
              key={src + i}
              {...{ src, animate, initial }}
              style={{ ...getCollageItemStyle(), width: 250, height: 150 }}
            />
          ) : (
            <motion.video
              key={src + i}
              {...{ src, animate, initial }}
              style={{ ...getCollageItemStyle(), width: 250, height: 150 }}
              autoPlay
              loop
              muted
            />
          )
        )}
      </AnimatePresence>
    </Collage>
  );
};
