import { CSSProperties } from "react";
import { randomChoice } from "../utils";
import { getCollageItemStyle } from "../getCollageItemStyle";
import { Collage } from "../Collage";

export const MixedImageVideoCollage = ({
  style,
}: {
  style?: CSSProperties | undefined;
}) => {
  const content = Array.from({ length: 50 }).map(() =>
    randomChoice([
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1682686581498-5e85c7228119",
      },
      { type: "image", src: "https://picsum.photos/id/1015/600/400" },
    ])
  );
  return (
    <Collage>
      {content.map((item, i) =>
        item.type === "image" ? (
          <img
            key={i}
            {...item}
            style={{ ...getCollageItemStyle(), height: 60 }}
          />
        ) : (
          <video
            key={i}
            {...item}
            style={{ ...getCollageItemStyle(), height: 60 }}
            autoPlay
            loop
            muted
          />
        )
      )}
    </Collage>
  );
};
