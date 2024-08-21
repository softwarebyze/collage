"use client";

import React from "react";
import { motion } from "framer-motion";

const media = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1682686581498-5e85c7228119",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee",
  },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50",
  },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
] as const;

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

const Collage: React.FC = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    border: "3px solid pink",
    // padding: "2rem",
  };

  const itemStyle = {
    width: "250px",
  };

  const random = .50;
  const x = 80;
  const y = 80;

  const items: MediaItem[] = [
    {
      id: 0,
      ...media[0],
      x: random * x,
      y: random * y,
      scale: 1, //0.5 + random * 0.5,
      rotation: 0, //random * 30 - 15,
    },
  ];

  console.clear();
  console.log(items);

  return (
    <div style={containerStyle}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          style={{
            ...itemStyle,
            transform: `translate(${item.x}px, ${item.y}px) scale(${item.scale}) rotate(${item.rotation}deg)`,
          }}
        >
          {item.type === "image" ? (
            <img src={item.src} alt="" style={{ width: "100%" }} />
          ) : (
            <video src={item.src} controls style={{ width: "100%" }} />
          )}
        </motion.div>
      ))}
      {/* <pre>{JSON.stringify({ random, ...items[0] }, null, 2)}</pre> */}
    </div>
  );
};

export default Collage;
