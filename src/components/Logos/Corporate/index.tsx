import React from "react";

const imgRatio = 0.4;
const defaultSize = {
  width: 50,
  height: 50 / imgRatio,
};

interface Props {
  /** The width of the `svg` element */
  width?: number;
  /** The height of the `svg` element */
  height?: number;
  /** The information that describe the `svg` element  */
  text: string;
  /** Define the color used to paint the `svg` element	 */
  color?: "white" | "primary";
     /** Redirect url of logo */
     href?: string; 
  className?: string;
}

export default function CorporateLogo({
  width,
  height,
  text,
  className,
  color = "primary",
  href, 
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

  return color === "white" ? (
    <svg
      role="link"
      preserveAspectRatio="xMidYMid meet"
      width={`${svgHeight}px`}
      height={`${svgWidth}px`}
      id="prefix__Logo1"
      x={0}
      y={0}
      viewBox="0 0 608.031 249.48"
      className={className}
      {...restProps}
    >
       <a href={href}>
        <text opacity="0">{text}</text>
      </a>
      <g fill="#fff">
        <path d="M584.73 28.208c3.931 3.93 3.931 10.303 0 14.232-3.93 3.929-10.301 3.929-14.23 0s-3.93-10.303 0-14.232 10.301-3.929 14.23 0zM544.605 68.151c3.93 3.93 3.93 10.301 0 14.231-3.929 3.931-10.301 3.931-14.232 0-3.928-3.93-3.928-10.301.003-14.23 3.929-3.93 10.299-3.932 14.229-.001z" />
      </g>
      <path
        fill="#fff"
        d="M442.246 25.091H309.377V55.65h51.401v105.608h30.072V55.65h51.396z"
      />
      <path
        d="M244.877 132.869c-21.743 0-39.43-17.725-39.43-39.511 0-21.785 17.687-39.511 39.43-39.511 9.334 0 17.914 3.273 24.671 8.726l20.327-20.327c-12.003-10.63-27.756-17.099-44.999-17.099-37.535 0-68.072 30.6-68.072 68.211 0 37.613 30.537 68.213 68.072 68.213 17.136 0 32.801-6.393 44.781-16.904l-20.339-20.339c-6.723 5.339-15.213 8.541-24.441 8.541zM88.915 77.492c-8.811.001-15.951 7.174-15.952 16.022.001 8.849 7.141 16.02 15.954 16.019 8.811 0 15.952-7.174 15.949-16.022.001-8.848-7.144-16.02-15.951-16.019zm.003 28.265c-6.739.005-12.194-5.479-12.195-12.241-.001-6.765 5.454-12.245 12.193-12.245 6.731-.003 12.187 5.479 12.188 12.241 0 6.764-5.456 12.245-12.186 12.245z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      />
      <path
        d="M127.813 93.357c0 21.786-17.687 39.511-39.43 39.511s-39.43-17.725-39.43-39.511c0-21.785 17.687-39.511 39.43-39.511s39.43 17.726 39.43 39.511zM88.384 25.146c-37.535 0-68.072 30.6-68.072 68.211 0 37.613 30.537 68.213 68.072 68.213 37.535 0 68.074-30.6 68.074-68.213-.001-37.611-30.54-68.211-68.074-68.211z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      />
      <path
        d="M89.021 85.597c4.362 0 7.898 3.543 7.897 7.914.002 4.37-3.536 7.915-7.898 7.914-4.36 0-7.897-3.544-7.896-7.914 0-4.369 3.536-7.916 7.897-7.914z"
        fill="#fff"
      />
      <g>
        <path
          d="M519.572 25.146c-37.535 0-68.072 30.6-68.072 68.211s30.537 68.211 68.072 68.211c37.535 0 68.075-30.6 68.075-68.211s-30.54-68.211-68.075-68.211zm0 107.723c-21.742 0-39.43-17.726-39.43-39.511 0-21.785 17.688-39.511 39.43-39.511s39.43 17.726 39.43 39.511c0 21.785-17.687 39.511-39.43 39.511z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        />
      </g>
      <g fill="#fff">
        <path d="M30.242 203.752h-9.696v-6.625h26.88v6.625H37.73v27.359h-7.488v-27.359zM101.666 227.079c-1.151 1.473-2.608 2.608-4.368 3.408s-3.584 1.2-5.472 1.2c-1.792 0-3.479-.288-5.063-.864s-2.961-1.399-4.129-2.472-2.088-2.359-2.76-3.864c-.672-1.504-1.008-3.184-1.008-5.04 0-1.855.336-3.535 1.008-5.04a11.612 11.612 0 012.76-3.864c1.168-1.071 2.545-1.896 4.129-2.472s3.271-.864 5.063-.864c1.663 0 3.176.288 4.536.864a9.453 9.453 0 013.456 2.472c.943 1.072 1.672 2.361 2.184 3.864.512 1.505.769 3.185.769 5.04v2.256H86.066c.288 1.377.912 2.473 1.872 3.288s2.144 1.224 3.552 1.224c1.184 0 2.184-.264 3-.791a8.07 8.07 0 002.136-2.041l5.04 3.696zm-6.096-10.272c.031-1.215-.368-2.256-1.2-3.119-.832-.864-1.904-1.297-3.216-1.297-.801 0-1.505.129-2.112.385a5.293 5.293 0 00-1.56.984c-.433.4-.769.863-1.008 1.392a4.562 4.562 0 00-.408 1.655h9.504zM157.537 215.319c-.353-.512-.848-.937-1.487-1.272a4.38 4.38 0 00-2.064-.504c-1.824 0-3.24.545-4.248 1.633s-1.512 2.512-1.512 4.271.504 3.185 1.512 4.271c1.008 1.089 2.424 1.633 4.248 1.633.8 0 1.488-.176 2.064-.528a6.333 6.333 0 001.487-1.248l4.752 4.992c-1.12 1.151-2.44 1.96-3.96 2.424s-2.968.696-4.344.696c-1.792 0-3.479-.288-5.063-.864s-2.961-1.399-4.129-2.472-2.088-2.359-2.76-3.864c-.672-1.504-1.008-3.184-1.008-5.04 0-1.855.336-3.535 1.008-5.04a11.612 11.612 0 012.76-3.864c1.168-1.071 2.545-1.896 4.129-2.472s3.271-.864 5.063-.864c1.376 0 2.824.232 4.344.696s2.84 1.272 3.96 2.424l-4.752 4.992zM206.689 194.823v16.128h.096c.16-.447.433-.896.816-1.344a6.411 6.411 0 011.392-1.2 7.58 7.58 0 011.92-.864 8.242 8.242 0 012.4-.336c1.824 0 3.296.281 4.416.84 1.12.561 1.992 1.337 2.616 2.328.624.992 1.048 2.16 1.271 3.504s.336 2.801.336 4.369v12.863h-7.199v-11.424c0-.672-.024-1.368-.072-2.088a6.58 6.58 0 00-.432-1.992 3.444 3.444 0 00-1.104-1.488c-.496-.384-1.208-.576-2.136-.576-.929 0-1.681.168-2.256.504a3.435 3.435 0 00-1.32 1.344 5.486 5.486 0 00-.6 1.896c-.097.705-.145 1.44-.145 2.208v11.616h-7.2v-36.288h7.201zM261.648 207.783h6.912v3.168h.096c.224-.447.544-.896.961-1.344a6.981 6.981 0 011.487-1.2 8.489 8.489 0 011.968-.864 8.242 8.242 0 012.4-.336c1.824 0 3.296.281 4.416.84 1.12.561 1.992 1.337 2.616 2.328.624.992 1.048 2.16 1.271 3.504s.336 2.801.336 4.369v12.863h-7.199v-11.424c0-.672-.024-1.368-.072-2.088a6.58 6.58 0 00-.432-1.992 3.444 3.444 0 00-1.104-1.488c-.496-.384-1.208-.576-2.136-.576-.929 0-1.681.168-2.256.504a3.435 3.435 0 00-1.32 1.344 5.486 5.486 0 00-.6 1.896c-.097.705-.145 1.44-.145 2.208v11.616h-7.2v-23.328zM322.944 219.447c0-1.855.336-3.535 1.008-5.04a11.6 11.6 0 012.761-3.864c1.167-1.071 2.544-1.896 4.128-2.472s3.271-.864 5.063-.864 3.48.288 5.064.864 2.959 1.4 4.128 2.472a11.626 11.626 0 012.76 3.864c.672 1.505 1.008 3.185 1.008 5.04 0 1.856-.336 3.536-1.008 5.04a11.606 11.606 0 01-2.76 3.864c-1.169 1.072-2.544 1.896-4.128 2.472s-3.272.864-5.064.864-3.479-.288-5.063-.864-2.961-1.399-4.128-2.472a11.58 11.58 0 01-2.761-3.864c-.672-1.504-1.008-3.183-1.008-5.04zm7.201 0c0 1.76.504 3.185 1.512 4.271 1.008 1.089 2.424 1.633 4.248 1.633s3.24-.544 4.248-1.633c1.008-1.087 1.512-2.512 1.512-4.271s-.504-3.184-1.512-4.271-2.424-1.633-4.248-1.633-3.24.545-4.248 1.633-1.512 2.512-1.512 4.271zM387.792 194.823h7.199v36.288h-7.199v-36.288zM433.92 219.447c0-1.855.336-3.535 1.008-5.04a11.598 11.598 0 012.76-3.864c1.168-1.071 2.544-1.896 4.128-2.472s3.271-.864 5.064-.864c1.791 0 3.479.288 5.063.864s2.96 1.4 4.128 2.472a11.612 11.612 0 012.76 3.864c.673 1.505 1.009 3.185 1.009 5.04 0 1.856-.336 3.536-1.009 5.04-.672 1.505-1.592 2.792-2.76 3.864s-2.544 1.896-4.128 2.472-3.272.864-5.063.864c-1.793 0-3.48-.288-5.064-.864s-2.96-1.399-4.128-2.472a11.577 11.577 0 01-2.76-3.864c-.672-1.504-1.008-3.183-1.008-5.04zm7.199 0c0 1.76.504 3.185 1.513 4.271 1.008 1.089 2.424 1.633 4.248 1.633 1.823 0 3.239-.544 4.248-1.633 1.008-1.087 1.512-2.512 1.512-4.271s-.504-3.184-1.512-4.271c-1.009-1.088-2.425-1.633-4.248-1.633-1.824 0-3.24.545-4.248 1.633-1.009 1.088-1.513 2.512-1.513 4.271zM523.15 229.144c0 4.416-1.112 7.768-3.336 10.056-2.225 2.288-5.608 3.432-10.151 3.432a27.37 27.37 0 01-6.145-.695c-2.016-.465-3.872-1.368-5.567-2.712l3.983-5.952a15.1 15.1 0 003.528 2.208c1.231.544 2.584.815 4.056.815 2.208 0 3.832-.536 4.872-1.607 1.04-1.072 1.561-2.44 1.561-4.104v-2.256h-.097c-.832 1.12-1.864 1.913-3.096 2.376-1.232.464-2.393.696-3.48.696-1.728 0-3.296-.296-4.703-.888a10.48 10.48 0 01-3.624-2.496c-1.009-1.072-1.785-2.344-2.328-3.816-.545-1.471-.816-3.088-.816-4.848 0-1.536.248-3.04.744-4.512.496-1.473 1.2-2.768 2.112-3.889a10.613 10.613 0 013.336-2.712c1.312-.688 2.8-1.032 4.464-1.032 1.023 0 1.96.113 2.808.336.848.225 1.608.513 2.28.864a8.383 8.383 0 011.728 1.177c.48.432.864.855 1.152 1.271h.096v-3.072h6.624v21.36zm-18.143-9.841a5.617 5.617 0 001.657 4.009c.527.528 1.135.952 1.823 1.272s1.448.479 2.28.479c.8 0 1.552-.159 2.256-.479s1.32-.744 1.849-1.272a5.646 5.646 0 001.224-1.824 5.6 5.6 0 00.432-2.185 5.63 5.63 0 00-1.656-4.008c-.528-.527-1.145-.951-1.849-1.271s-1.456-.48-2.256-.48c-.832 0-1.592.16-2.28.48s-1.296.744-1.823 1.271a5.644 5.644 0 00-1.225 1.824 5.584 5.584 0 00-.432 2.184zM576.958 234.903a51.67 51.67 0 01-1.392 3.312c-.448.961-1.017 1.769-1.704 2.425-.688.655-1.56 1.151-2.616 1.487-1.056.336-2.447.504-4.176.504-1.856 0-3.647-.287-5.376-.863l.96-5.904c1.088.48 2.208.72 3.36.72.799 0 1.455-.088 1.968-.264a3.256 3.256 0 001.271-.768c.337-.337.616-.744.841-1.225.223-.479.463-1.04.72-1.68l.528-1.344-10.225-23.521h7.776l6 15.408h.096l5.136-15.408h7.393l-10.56 27.121z" />
      </g>
    </svg>
  ) : (
    <svg
      role="link"
      preserveAspectRatio="xMidYMid meet"
      width={`${svgHeight}px`}
      height={`${svgWidth}px`}
      id="prefix__Logo1"
      x={0}
      y={0}
      viewBox="0 0 567.37 217.54"
      {...restProps}
    >
       <a href={href}>
        <text opacity="0">{text}</text>
      </a>
      <defs>
        <style>
          {
            ".prefix__cls-1{fill:#00b0cc}.prefix__cls-2,.prefix__cls-3{fill:#001e57}.prefix__cls-3{fill-rule:evenodd}"
          }
        </style>
      </defs>
      <path
        className="prefix__cls-1"
        d="M584.73 28.21a10.06 10.06 0 11-14.23 0 10.06 10.06 0 0114.23 0zM544.61 68.15a10.07 10.07 0 11-14.23 0 10.06 10.06 0 0114.23 0z"
        transform="translate(-20.31 -25.09)"
      />
      <path
        className="prefix__cls-2"
        d="M421.94 0H289.06v30.56h51.41v105.61h30.07V30.56h51.4V0z"
      />
      <path
        className="prefix__cls-3"
        d="M244.88 132.87a39.51 39.51 0 1124.67-70.3l20.33-20.32a68.12 68.12 0 10-45 119.32 67.7 67.7 0 0044.78-16.9l-20.34-20.34a39.2 39.2 0 01-24.44 8.54zM88.91 77.49a16 16 0 1016 16 16 16 0 00-16-16zm0 28.27a12.25 12.25 0 1112.19-12.25 12.22 12.22 0 01-12.18 12.25z"
        transform="translate(-20.31 -25.09)"
      />
      <path
        className="prefix__cls-3"
        d="M127.81 93.36a39.43 39.43 0 11-39.43-39.51 39.51 39.51 0 0139.43 39.51zM88.38 25.15a68.21 68.21 0 1068.08 68.21 68.22 68.22 0 00-68.08-68.21z"
        transform="translate(-20.31 -25.09)"
      />
      <path
        className="prefix__cls-2"
        d="M89 85.6a7.91 7.91 0 11-7.9 7.91A7.91 7.91 0 0189 85.6z"
        transform="translate(-20.31 -25.09)"
      />
      <path
        d="M519.57 25.15a68.21 68.21 0 1068.08 68.21 68.22 68.22 0 00-68.08-68.21zm0 107.72A39.51 39.51 0 11559 93.36a39.52 39.52 0 01-39.43 39.51z"
        transform="translate(-20.31 -25.09)"
        fill="#0e2356"
        fillRule="evenodd"
      />
      <path
        className="prefix__cls-2"
        d="M519.57 25.15a68.21 68.21 0 1068.08 68.21 68.22 68.22 0 00-68.08-68.21zm0 107.72A39.51 39.51 0 11559 93.36a39.52 39.52 0 01-39.43 39.51zM30.24 203.75h-9.69v-6.62h26.88v6.62h-9.7v27.36h-7.49zM101.67 227.08a11.58 11.58 0 01-4.37 3.41 13.1 13.1 0 01-5.47 1.2 14.64 14.64 0 01-5.07-.87 12.19 12.19 0 01-4.13-2.47 11.84 11.84 0 01-2.76-3.86 13.2 13.2 0 010-10.08 11.88 11.88 0 012.76-3.87 12.35 12.35 0 014.13-2.47 14.87 14.87 0 015.07-.86 11.61 11.61 0 014.53.86 9.58 9.58 0 013.46 2.47 11.33 11.33 0 012.18 3.87 15.59 15.59 0 01.77 5v2.25h-16.7a5.63 5.63 0 001.87 3.34 5.26 5.26 0 003.55 1.22 5.41 5.41 0 003-.79 7.81 7.81 0 002.14-2zm-6.1-10.27a4.17 4.17 0 00-1.2-3.12 4.24 4.24 0 00-3.22-1.3 5.33 5.33 0 00-2.11.39 5.12 5.12 0 00-1.56 1 4.32 4.32 0 00-1 1.39 4.54 4.54 0 00-.4 1.66zM157.54 215.32a4.06 4.06 0 00-1.49-1.27 4.33 4.33 0 00-2.06-.51 5.5 5.5 0 00-4.25 1.64 6.79 6.79 0 000 8.54 5.49 5.49 0 004.25 1.63 3.81 3.81 0 002.06-.53 6.69 6.69 0 001.49-1.24l4.75 5a9.15 9.15 0 01-4 2.42 14.53 14.53 0 01-9.41-.17 12.19 12.19 0 01-4.13-2.47 11.69 11.69 0 01-2.76-3.86 13.2 13.2 0 010-10.08 11.73 11.73 0 012.76-3.87 12.35 12.35 0 014.13-2.47 14.71 14.71 0 019.41-.17 9.27 9.27 0 014 2.43zM206.69 194.82V211h.1a4.36 4.36 0 01.81-1.34 6.5 6.5 0 011.39-1.2 8.09 8.09 0 011.92-.87 8.39 8.39 0 012.4-.33 9.92 9.92 0 014.42.84 6.38 6.38 0 012.62 2.33 9.58 9.58 0 011.27 3.5 27.06 27.06 0 01.33 4.37v12.86h-7.2v-11.47c0-.67 0-1.37-.07-2.09a6.65 6.65 0 00-.43-2 3.1 3.1 0 00-3.24-2.07 4.42 4.42 0 00-2.26.51 3.47 3.47 0 00-1.32 1.34 5.65 5.65 0 00-.6 1.9 17.35 17.35 0 00-.14 2.21v11.61h-7.2v-36.28zM261.65 207.78h6.91V211h.1a5.59 5.59 0 011-1.34 6.81 6.81 0 011.48-1.2 9.1 9.1 0 012-.87 8.39 8.39 0 012.4-.33 9.92 9.92 0 014.42.84 6.29 6.29 0 012.61 2.33 9.42 9.42 0 011.28 3.5 27.06 27.06 0 01.33 4.37v12.86h-7.2v-11.47c0-.67 0-1.37-.07-2.09a6.65 6.65 0 00-.43-2 3.12 3.12 0 00-3.24-2.07 4.42 4.42 0 00-2.26.51 3.47 3.47 0 00-1.32 1.34 5.65 5.65 0 00-.6 1.9 17.35 17.35 0 00-.14 2.21v11.61h-7.2zM322.94 219.45a12.23 12.23 0 011-5 11.59 11.59 0 012.76-3.87 12.35 12.35 0 014.13-2.47 15.35 15.35 0 0110.13 0 12.35 12.35 0 014.13 2.47 11.88 11.88 0 012.76 3.87 13.2 13.2 0 010 10.08 11.84 11.84 0 01-2.76 3.86 12.19 12.19 0 01-4.13 2.47 15.18 15.18 0 01-10.13 0 12.19 12.19 0 01-4.13-2.47 11.55 11.55 0 01-2.76-3.86 12.29 12.29 0 01-1-5.08zm7.2 0a6 6 0 001.52 4.27 6.34 6.34 0 008.49 0 6.79 6.79 0 000-8.54 6.31 6.31 0 00-8.49 0 6 6 0 00-1.52 4.27zM387.79 194.82H395v36.29h-7.2zM433.92 219.45a12.23 12.23 0 011-5 11.59 11.59 0 012.76-3.87 12.25 12.25 0 014.13-2.47 15.32 15.32 0 0110.12 0 12.25 12.25 0 014.13 2.47 11.59 11.59 0 012.76 3.87 13.08 13.08 0 010 10.08 11.55 11.55 0 01-2.76 3.86 12.09 12.09 0 01-4.13 2.47 15.15 15.15 0 01-10.12 0 12.09 12.09 0 01-4.13-2.47 11.55 11.55 0 01-2.76-3.86 12.29 12.29 0 01-1-5.08zm7.2 0a6 6 0 001.51 4.27 6.36 6.36 0 008.5 0 6.79 6.79 0 000-8.54 6.33 6.33 0 00-8.5 0 6 6 0 00-1.51 4.27zM523.15 229.14q0 6.63-3.34 10.06t-10.15 3.43a27.52 27.52 0 01-6.14-.69 13.93 13.93 0 01-5.57-2.72l4-5.95a15.26 15.26 0 003.53 2.21 10 10 0 004.06.81q3.32 0 4.87-1.6a5.65 5.65 0 001.56-4.11v-2.25h-.1a6.73 6.73 0 01-3.09 2.37 9.76 9.76 0 01-3.48.7 12 12 0 01-4.7-.89A10.5 10.5 0 01501 228a11.31 11.31 0 01-2.33-3.82 14.52 14.52 0 01-.07-9.36 12.48 12.48 0 012.11-3.89 10.75 10.75 0 013.34-2.71 9.43 9.43 0 014.46-1 10.67 10.67 0 015.09 1.2 8.44 8.44 0 011.73 1.17 7.71 7.71 0 011.15 1.28h.1v-3.08h6.62zM505 219.3a5.61 5.61 0 001.65 4 6.32 6.32 0 001.83 1.27 5.29 5.29 0 002.28.48 5.35 5.35 0 002.25-.48 6.15 6.15 0 001.85-1.27 5.45 5.45 0 001.22-1.82 5.65 5.65 0 000-4.37 5.49 5.49 0 00-1.22-1.83A6.34 6.34 0 00513 214a5.35 5.35 0 00-2.25-.48 5.29 5.29 0 00-2.28.48 6.52 6.52 0 00-1.83 1.27 5.64 5.64 0 00-1.22 1.83 5.58 5.58 0 00-.42 2.2zM577 234.9c-.48 1.25-1 2.35-1.39 3.31a7.92 7.92 0 01-1.71 2.43 6.8 6.8 0 01-2.61 1.49 14.4 14.4 0 01-4.18.5 17.07 17.07 0 01-5.38-.86l1-5.91a8.26 8.26 0 003.36.72 6.06 6.06 0 002-.26 3.23 3.23 0 001.27-.77 4.13 4.13 0 00.84-1.22q.35-.72.72-1.68l.53-1.35-10.22-23.52H569l6 15.41h.1l5.14-15.41h7.39z"
        transform="translate(-20.31 -25.09)"
      />
    </svg>
  );
}
