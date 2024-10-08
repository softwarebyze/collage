import { Collage, randomChoice } from "@/collage";
import { getCollageItemStyle } from "@/collage/getCollageItemStyle";
import Image from "next/image";

export default function FitnessCollage() {
  const images = [
    {
      src: "/images/a.webp",
      alt: "Fitness 1",
    },
    {
      src: "/images/b.webp",
      alt: "Fitness 2",
    },
    {
      src: "/images/c.webp",
      alt: "Fitness 3",
    },
  ];

  const manyImages = Array.from({ length: 100 }, () => randomChoice(images));

  return (
    <Collage>
      {manyImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={300}
          height={200}
          style={getCollageItemStyle()}
        />
      ))}
    </Collage>
  );
}
