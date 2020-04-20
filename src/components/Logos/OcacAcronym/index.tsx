import * as React from "react";

const imgRatio = 1;
const defaultSize = {
  width: "10px",
  height: "10px",
};

interface Props {
  /** The width of the `svg` element */
  width?: number;
  /** The height of the `svg` element */
  height?: number;
  /** The information that describe the `svg` element  */
  text: string;
  /** Define the color used to paint the `svg` element	 */
  color?: "primary" | "white";
  className?: string;
}

export default function OcacAcronym({
  width,
  height,
  text,
  color="primary",
  className,
  ...restProps
}: Props) {
  let svgWidth = defaultSize.width;
  let svgHeight = defaultSize.height;

  if (width) {
    svgWidth = `${width}px`;
    svgHeight = `${width / imgRatio}px`;
  }

  if (height) {
    svgHeight = `${height}px`;
    svgWidth = `${height * imgRatio}px`;
  }

  return (
    <div>
      <svg
        role="link"
        preserveAspectRatio="xMidYMid meet"
        width={svgWidth}
        height={svgHeight}
        id="prefix__Calque_1"
        x={0}
        viewBox="0 0 212.6 212.6"
        className={className}
        {...restProps}
      >
        <a href="https://octo.com">
          <text opacity="0">`${text}`</text>
        </a>
        <path
          className={color}
          stroke="#002458"
          strokeWidth={5.679}
          strokeMiterlimit={10}
          d="M31.686 148.221L32.3 94.55"
        />
        <path
          d="M31.814 129.57c-5.239.182-9.486 4.688-9.476 10.072.01 5.358 4.273 9.563 9.512 9.381 5.251-.183 9.492-4.685 9.482-10.042-.01-5.385-4.267-9.594-9.518-9.411z"
          fillRule="evenodd"
          clipRule="evenodd"
          className={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className={color}
          d="M31.731 143.743l9.295 24.852-18.473.106 9.178-24.958zM12.691 87.084l138.105-74.689 8.353 15.445-138.105 74.69z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className={color}
          d="M39.83 86.658l92.49-50.02 15.526 28.709-92.49 50.02z"
        />
        <g>
          <g className={color}>
            <path d="M182.865 62.129c3.827 3.827 3.827 10.033 0 13.858-3.827 3.826-10.03 3.826-13.857 0s-3.827-10.032 0-13.858 10.031-3.826 13.857 0zM143.794 101.023c3.826 3.827 3.826 10.031 0 13.857-3.826 3.827-10.03 3.827-13.859 0-3.825-3.827-3.825-10.03.003-13.856 3.825-3.827 10.028-3.829 13.856-.001z" />
          </g>
          <path
            d="M119.418 59.147c-36.55 0-66.285 29.797-66.285 66.42 0 36.624 29.735 66.42 66.285 66.42 36.549 0 66.288-29.796 66.288-66.42-.001-36.623-29.739-66.42-66.288-66.42zm0 104.895c-21.171 0-38.394-17.261-38.394-38.474 0-21.213 17.223-38.474 38.394-38.474s38.394 17.261 38.394 38.474c0 21.213-17.223 38.474-38.394 38.474z"
            fillRule="evenodd"
            clipRule="evenodd"
            className={color}
          />
        </g>
      </svg>
    </div>
  );
}
