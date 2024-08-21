import { randBetween, randomChoice } from "./utils";

export const getCollageItemStyle = () => {
  const transform = `translateX(${randBetween(
    -100,
    100
  )}%) translateY(${randBetween(-100, 100)}%) rotate(${randBetween(
    -12,
    12
  )}deg)`;

  const scale = `${randBetween(0.9, .1)}`;

  const defaults = {
    position: "absolute" as const,
    scale,
    transform,
  };

  const positionStyles = randomChoice([
    // from top left
    {
      top: `${randBetween(0, 100)}%`,
      left: `${randBetween(0, 100)}%`,
    },
    // from bottom right
    {
      bottom: `${randBetween(0, 100)}%`,
      right: `${randBetween(0, 100)}%`,
    },
  ]);

  return { ...positionStyles, ...defaults };
};
