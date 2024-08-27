"use client";
import React, { createContext, useContext, useRef } from "react";
import { useResizeObserver } from "usehooks-ts";

interface Size {
  width: number;
  height: number;
}

const PositionContainerContext = createContext<Size | undefined>(undefined);

export const usePositionContainerContext = () => {
  return useContext(PositionContainerContext);
};

const PositionContainerContextProvider = ({
  children,
  width,
  height,
}: {
  children: React.ReactNode;
  width: number;
  height: number;
}) => {
  return (
    <PositionContainerContext.Provider value={{ width, height }}>
      {/* <p style={{ textAlign: "center" }}>
        {width} x {height}
      </p> */}
      {children}
    </PositionContainerContext.Provider>
  );
};

const PositionContainer = ({
  children,
  style,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

const Positioned = ({
  children,
  x,
  y,
}: {
  children: React.ReactNode;
  x: number;
  y: number;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
      }}
      title={`${x}, ${y}`}
    >
      {children}
    </div>
  );
};

const createPositions = (width: number, height: number) => {
  const { columns, rows } = getGridDimensions(width, height);

  const calculateEvenlySpacedPositions = (
    itemCount: number,
    totalRange: number
  ): number[] => {
    return Array.from(
      { length: itemCount },
      (_, index) => ((index + 1) * totalRange) / (itemCount + 1)
    );
  };

  const xPositions = calculateEvenlySpacedPositions(columns, width);
  const yPositions = calculateEvenlySpacedPositions(rows, height);

  const positions = [];
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      positions.push({ x: xPositions[i], y: yPositions[j] });
    }
  }

  return positions;
};

const getGridDimensions = (
  width: number,
  height: number
): { columns: number; rows: number } => {
  let columns = 1;
  let rows = 1;

  if (width >= 900) {
    columns = 3;
  } else if (width >= 600) {
    columns = 2;
  }

  if (height >= 900) {
    rows = 3;
  } else if (height >= 600) {
    rows = 2;
  }

  return { columns, rows };
};

export const CollagePositioning = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { width = 0, height = 0 } = useResizeObserver({
    ref,
    box: "border-box",
  });

  const positions = createPositions(width, height);

  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "magenta",
  ];

  return (
    <div
      className="ref"
      ref={ref}
      style={{
        width: "100%",
      }}
    >
      <PositionContainerContextProvider width={width} height={height}>
        <PositionContainer
          style={{
            position: "relative",
            backgroundColor: "grey",
          }}
        >
          {positions.map(({ x, y }, i) => (
            <Positioned key={i} x={x} y={y}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: colors[i % colors.length],
                }}
              />
            </Positioned>
          ))}
        </PositionContainer>
      </PositionContainerContextProvider>
    </div>
  );
};

{
  /* <div
  style={{
    position: "absolute",
    width: 40,
    height: 40,
    background: "red",
    left: 0,
    top: 0,
  }}
/>
<div
  style={{
    position: "absolute",
    width: 40,
    height: 40,
    background: "green",
    left: 20,
    top: 20,
  }}
/>
<div
  style={{
    position: "absolute",
    width: 40,
    height: 40,
    background: "blue",
    left: 80,
    top: 80,
  }}
/> */
}
