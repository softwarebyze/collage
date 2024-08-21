import { CSSProperties, PropsWithChildren } from "react";

export const Collage = ({
  children,
  style,
  ...props
}: PropsWithChildren & {
  style?: CSSProperties;
}) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "40rem",
      overflow: "hidden",
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);
