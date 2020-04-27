import React from "react";

const imgRatio = 1;
const defaultSize = {
  width: 50,
  height: 50 / imgRatio,
};

interface Props {
  /** Specify the width of the `logo` element */
  width?: number;
  /** Specify the height of the `logo` element */
  height?: number;
  /** The information that describe the `logo` element  */
  text?: string;
  /** Provide the the color used to paint the `logo` element:
   *   "primary" | "secondary" | "white" | "twotone"
   */
  color?: "primary" | "secondary" | "white" | "twotone";
  /** Redirect url of logo */
  href?: string;
  className?: string;
}

export default function Acronym({
  width,
  height,
  text,
  color = "primary",
  href,
  className,
  ...restProps
}: Props) {
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
  return color === "twotone" ? (
    <svg
      role="link"
      preserveAspectRatio="xMidYMid meet"
      width={`${svgHeight}px`}
      height={`${svgWidth}px`}
      id="prefix__Calque_1"
      x={0}
      y={0}
      viewBox="-32 34 34 34"
      xmlSpace="preserve"
      className={className}
      {...restProps}
    >
      <a href={href}>
        <text opacity="0">{text}</text>
      </a>
      <style>{".prefix__st0{fill:#00abc7}"}</style>
      <g id="prefix__Symbols">
        <g id="prefix__Menu-Mobile" transform="translate(-30 -15)">
          <g id="prefix__T\xEAte-octo" transform="translate(30 14)">
            <g id="prefix__Group-3" transform="translate(28 .419)">
              <path
                id="prefix__Fill-1"
                className="prefix__st0"
                d="M-27.1 35.6c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c1-.9 2.6-.9 3.5 0"
              />
            </g>
            <path
              id="prefix__Fill-4"
              className="prefix__st0"
              d="M-8.9 45.8c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c1-.9 2.5-.9 3.5 0"
            />
            <g id="prefix__Group-8" transform="translate(0 .419)">
              <path
                id="prefix__Fill-6"
                d="M-15 61.3c-5.3 0-9.7-4.3-9.7-9.7 0-5.3 4.3-9.7 9.7-9.7s9.7 4.3 9.7 9.7c-.1 5.3-4.4 9.7-9.7 9.7m0-26.4c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7S1.7 60.8 1.7 51.6-5.8 34.9-15 34.9"
                fill="#0e2356"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ) : (
    <svg
      role="link"
      preserveAspectRatio="xMidYMid meet"
      width={`${svgHeight}px`}
      height={`${svgWidth}px`}
      id="prefix__Calque_1"
      x={0}
      y={0}
      viewBox="-32 34 34 34"
      xmlSpace="preserve"
      className={className}
      {...restProps}
    >
      <a href={href}>
        <text opacity="0">{text}</text>
      </a>
      <style>{".prefix__st15{fill:#00abc7}"}</style>
      <g aria-hidden="true" id="prefix__Symbols">
        <g
          aria-hidden="true"
          id="prefix__Menu-Mobile"
          transform="translate(-30 -15)"
        >
          <g
            aria-hidden="true"
            id="prefix__T\xEAte-octo"
            transform="translate(30 14)"
          >
            <g
              aria-hidden="true"
              id="prefix__Group-3"
              transform="translate(28 .419)"
            >
              <path
                aria-hidden="true"
                id="prefix__Fill-1"
                className={color}
                d="M-27.1 35.6c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c1-.9 2.6-.9 3.5 0"
              />
            </g>
            <path
              aria-hidden="true"
              id="prefix__Fill-4"
              className={color}
              d="M-8.9 45.8c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c1-.9 2.5-.9 3.5 0"
            />
            <g
              aria-hidden="true"
              id="prefix__Group-8"
              transform="translate(0 .419)"
            >
              <path
                aria-hidden="true"
                id="prefix__Fill-6"
                d="M-15 61.3c-5.3 0-9.7-4.3-9.7-9.7 0-5.3 4.3-9.7 9.7-9.7s9.7 4.3 9.7 9.7c-.1 5.3-4.4 9.7-9.7 9.7m0-26.4c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7S1.7 60.8 1.7 51.6-5.8 34.9-15 34.9"
                className={color}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
