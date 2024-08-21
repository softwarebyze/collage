import { Collage } from "../Collage";
import { getCollageItemStyle } from "../getCollageItemStyle";

export const ColorBlockExampleCollage = ({ height = "400px" }) => {
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
  return (
    <Collage style={{ height }}>
      <>
        {colors.map((color, index) => (
          <div
            style={{
              ...getCollageItemStyle(),
              backgroundColor: color,
              width: "6rem",
              height: "3rem",
            }}
            key={index}
          />
        ))}
      </>
    </Collage>
  );
};
