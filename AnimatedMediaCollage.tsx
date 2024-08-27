"use client";

import { AnimatePresence, motion } from "framer-motion";

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

const DynamicCollage: React.FC = () => {
  // const [items, setItems] = useState<MediaItem[]>([]);
  const outerWidth = `100%`;
  // const outerWidth = `${600}px`;
  // const outerHeight = `${400}px`;
  const outerHeight = `100%`;
  const motionDivWidth = `${250}px`;
  // const motionDivHeight = `${200}px`;
  const x = 80;
  const y = 80;

  const mediaItem = media[Math.floor(Math.random() * media.length)];
  // const random = +Math.random().toFixed(2);
  const random = 0.5;
  const items = [
    {
      id: 0, // Date.now(),
      ...media[0],
      x: random * x,
      y: random * y,
      scale: 0.5 + random * 0.5,
      rotation: random * 30 - 15,
    },
  ];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setItems((prev) => {
  //       const newItems = [...prev];
  //       if (newItems.length < 10) {
  //         const mediaItem = media[Math.floor(Math.random() * media.length)];
  //         newItems.push({
  //           id: Date.now(),
  //           ...mediaItem,
  //           x: Math.random() * 80,
  //           y: Math.random() * 80,
  //           scale: 0.5 + Math.random() * 0.5,
  //           rotation: Math.random() * 30 - 15,
  //         });
  //       } else {
  //         newItems.shift();
  //       }
  //       return newItems;
  //     });
  //   }, 1500);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      style={{
        width: outerWidth,
        height: outerHeight,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
        border: "1px solid blue",
      }}
    >
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 1, scale: 1, x: "50%", y: "50%" }}
            animate={{
              opacity: 1,
              scale: item.scale,
              x: `${50 + item.x}%`,
              y: `${50 + item.y}%`,
              rotate: item.rotation,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              width: motionDivWidth,
              // height: motionDivHeight,
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              border: "2px solid yellow",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      <pre>{JSON.stringify({ random, ...items[0] }, null, 2)}</pre>
    </div>
  );
};

export default DynamicCollage;
