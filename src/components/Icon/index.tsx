import React from "react";
import "../index.scss";

const imgRatio = 1;
const defaultSize = {
  width: 25,
  height: 25 / imgRatio,
};

const renderPath = (icon: IconType, color?: string) => {
  switch (icon) {
    case "close":
      return (
        <path
          transform="translate(3, 3)"
          aria-hidden="true"
          className={color}
          d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
        />
      );
    case "error":
      return (
        <path
          aria-hidden="true"
          className={color}
          d='M9 13H11V15H9V13ZM9 5H11V11H9V5ZM9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="black" fill-opacity="0.87'
        />
      );
    case "validate":
      return (
        <path
          transform="translate(1, 3)"
          aria-hidden="true"
          className={color}
          d="M6 11.1701L1.83 7.00009L0.410004 8.41009L6 14.0001L18 2.00009L16.59 0.590088L6 11.1701Z"
        />
      );
    case "search":
      return (
        <path
          transform="translate(1, 2)"
          aria-hidden="true"
          className={color}
          d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
        />
      );
    case "unfold":
      return (
        <path
          transform="translate(5, 1)"
          className={color}
          aria-hidden="true"
          d="M4.99997 2.83L8.16997 6L9.57997 4.59L4.99997 0L0.409973 4.59L1.82997 6L4.99997 2.83ZM4.99997 15.17L1.82997 12L0.419973 13.41L4.99997 18L9.58997 13.41L8.16997 12L4.99997 15.17Z"
        />
      );
    default:
      return;
  }
};

export type IconType = "error" | "validate" | "close" | "search" | "unfold";

interface IconProps {
  /** Specify the width of the `svg` element */
  width?: number;
  /** Specify the height of the `svg` element */
  height?: number;
  /** The information that describe the `svg` element  */
  text?: string;
  /** Set the icon component of button */
  icon: IconType;
  /** Provide the the color used to paint the `svg` element:
   *  "primary" | "secondary"  | "white | "red" | "green"
   */
  color?: "primary" | "secondary" | "white" | "red" | "green";
  className?: string;
}

export default function Icon({
  icon,
  color = "primary",
  className,
  width,
  height,
  text,
}: IconProps) {
  let svgWidth = defaultSize.width;
  let svgHeight = defaultSize.height;

  if (width) {
    svgWidth = width;
    svgHeight = width / imgRatio;
  }

  if (height) {
    svgHeight = height;
    svgWidth = height * imgRatio;
  }
  return (
    <svg
      className={className}
      width={`${svgHeight}px`}
      height={`${svgWidth}px`}
      viewBox="0 0 20 20"
    >
      {text && <text opacity="0">{text}</text>}
      {renderPath(icon, color)}
    </svg>
  );
}
