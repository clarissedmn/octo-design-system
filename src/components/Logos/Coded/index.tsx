import * as React from "react";

const imgRatio = 2.5;
const defaultSize = {
  width: "200px",
  height: `${200 / imgRatio}px`,
};

interface Props {
  /** The width of the `svg` element */
  width?: number;
  /** The height of the `svg` element */
  height?: number;
  /** The information that describe the `svg` element  */
  text: string;
  /** Define the color used to paint the `svg` element	 */
  white?: string;
}

export default function CodedLogo({
  width,
  height,
  text,
  white,
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

  return white ? (
    <svg
      role="link"
      preserveAspectRatio="xMidYMid meet"
      width={svgWidth}
      height={svgHeight}
      id="prefix__Logo2_white"
      x={0}
      y={0}
      viewBox="0 0 608.031 249.314"
      {...restProps}
    >
      <path
        d="M244.628 126.974c-11.43-6.793-19.111-19.261-19.111-33.495 0-14.235 7.681-26.704 19.111-33.498V24.695c-29.859 8.625-51.765 36.185-51.765 68.784 0 32.598 21.907 60.157 51.765 68.779v-35.284z"
        fill="#fff"
      />
      <g fill="#fff">
        <path d="M519.67 1.435c5.558-.007 10.071 4.494 10.076 10.052.007 5.556-4.494 10.068-10.051 10.076-5.557.007-10.071-4.495-10.077-10.051-.006-5.558 4.494-10.07 10.052-10.077zM519.612 58.058c5.559-.007 10.071 4.493 10.077 10.051.009 5.559-4.493 10.071-10.053 10.079-5.557.004-10.068-4.495-10.073-10.054-.007-5.557 4.489-10.068 10.049-10.076z" />
      </g>
      <path
        d="M88.945 77.704c-8.812.001-15.952 7.175-15.953 16.024.001 8.851 7.141 16.021 15.956 16.021 8.812 0 15.954-7.175 15.951-16.025 0-8.849-7.146-16.021-15.954-16.02zm.003 28.267c-6.74.006-12.196-5.479-12.197-12.242-.001-6.766 5.454-12.248 12.195-12.248 6.731-.002 12.188 5.479 12.189 12.244 0 6.765-5.456 12.246-12.187 12.246z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      />
      <path
        d="M127.848 93.571c0 21.788-17.689 39.516-39.434 39.516S48.98 115.359 48.98 93.571c0-21.788 17.689-39.516 39.434-39.516s39.434 17.728 39.434 39.516zM88.414 25.352c-37.54 0-68.08 30.603-68.08 68.219 0 37.616 30.541 68.22 68.08 68.22s68.082-30.604 68.082-68.22-30.543-68.219-68.082-68.219z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      />
      <path
        d="M89.052 85.809c4.363 0 7.899 3.543 7.898 7.915.002 4.372-3.537 7.917-7.899 7.915-4.361 0-7.898-3.543-7.897-7.915-.001-4.37 3.536-7.917 7.898-7.915z"
        fill="#fff"
      />
      <path
        d="M519.654 25.351c-37.54 0-68.08 30.604-68.08 68.22s30.541 68.218 68.08 68.218c37.54 0 68.082-30.602 68.082-68.218.001-37.616-30.542-68.22-68.082-68.22zm0 107.737c-21.745 0-39.434-17.729-39.434-39.516 0-21.788 17.69-39.516 39.434-39.516 21.745 0 39.434 17.728 39.434 39.516.001 21.787-17.689 39.516-39.434 39.516z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      />
      <path
        d="M362.128 77.53V24.967H330.02V77.53h-53.045v31.821h53.045v52.56h32.108v-52.56h53.045V77.53h-53.045z"
        fill="#fff"
      />
      <g>
        <g fill="#fff">
          <path d="M30.242 203.752h-9.696v-6.625h26.88v6.625H37.73v27.359h-7.488v-27.359zM157.537 215.319c-.353-.512-.848-.937-1.487-1.272a4.38 4.38 0 00-2.064-.504c-1.824 0-3.24.545-4.248 1.633s-1.512 2.512-1.512 4.271.504 3.185 1.512 4.271c1.008 1.089 2.424 1.633 4.248 1.633.8 0 1.488-.176 2.064-.528a6.333 6.333 0 001.487-1.248l4.752 4.992c-1.12 1.151-2.44 1.96-3.96 2.424s-2.968.696-4.344.696c-1.792 0-3.479-.288-5.063-.864s-2.961-1.399-4.129-2.472-2.088-2.359-2.76-3.864c-.672-1.504-1.008-3.184-1.008-5.04 0-1.855.336-3.535 1.008-5.04a11.612 11.612 0 012.76-3.864c1.168-1.071 2.545-1.896 4.129-2.472s3.271-.864 5.063-.864c1.376 0 2.824.232 4.344.696s2.84 1.272 3.96 2.424l-4.752 4.992zM206.689 194.823v16.128h.096c.16-.447.433-.896.816-1.344a6.411 6.411 0 011.392-1.2 7.58 7.58 0 011.92-.864 8.242 8.242 0 012.4-.336c1.824 0 3.296.281 4.416.84 1.12.561 1.992 1.337 2.616 2.328.624.992 1.048 2.16 1.271 3.504s.336 2.801.336 4.369v12.863h-7.199v-11.424c0-.672-.024-1.368-.072-2.088a6.58 6.58 0 00-.432-1.992 3.444 3.444 0 00-1.104-1.488c-.496-.384-1.208-.576-2.136-.576-.929 0-1.681.168-2.256.504a3.435 3.435 0 00-1.32 1.344 5.486 5.486 0 00-.6 1.896c-.097.705-.145 1.44-.145 2.208v11.616h-7.2v-36.288h7.201zM261.648 207.783h6.912v3.168h.096c.224-.447.544-.896.961-1.344a6.981 6.981 0 011.487-1.2 8.489 8.489 0 011.968-.864 8.242 8.242 0 012.4-.336c1.824 0 3.296.281 4.416.84 1.12.561 1.992 1.337 2.616 2.328.624.992 1.048 2.16 1.271 3.504s.336 2.801.336 4.369v12.863h-7.199v-11.424c0-.672-.024-1.368-.072-2.088a6.58 6.58 0 00-.432-1.992 3.444 3.444 0 00-1.104-1.488c-.496-.384-1.208-.576-2.136-.576-.929 0-1.681.168-2.256.504a3.435 3.435 0 00-1.32 1.344 5.486 5.486 0 00-.6 1.896c-.097.705-.145 1.44-.145 2.208v11.616h-7.2v-23.328zM322.944 219.447c0-1.855.336-3.535 1.008-5.04a11.6 11.6 0 012.761-3.864c1.167-1.071 2.544-1.896 4.128-2.472s3.271-.864 5.063-.864 3.48.288 5.064.864 2.959 1.4 4.128 2.472a11.626 11.626 0 012.76 3.864c.672 1.505 1.008 3.185 1.008 5.04 0 1.856-.336 3.536-1.008 5.04a11.606 11.606 0 01-2.76 3.864c-1.169 1.072-2.544 1.896-4.128 2.472s-3.272.864-5.064.864-3.479-.288-5.063-.864-2.961-1.399-4.128-2.472a11.58 11.58 0 01-2.761-3.864c-.672-1.504-1.008-3.183-1.008-5.04zm7.201 0c0 1.76.504 3.185 1.512 4.271 1.008 1.089 2.424 1.633 4.248 1.633s3.24-.544 4.248-1.633c1.008-1.087 1.512-2.512 1.512-4.271s-.504-3.184-1.512-4.271-2.424-1.633-4.248-1.633-3.24.545-4.248 1.633-1.512 2.512-1.512 4.271zM387.792 194.823h7.199v36.288h-7.199v-36.288zM433.92 219.447c0-1.855.336-3.535 1.008-5.04a11.598 11.598 0 012.76-3.864c1.168-1.071 2.544-1.896 4.128-2.472s3.271-.864 5.064-.864c1.791 0 3.479.288 5.063.864s2.96 1.4 4.128 2.472a11.612 11.612 0 012.76 3.864c.673 1.505 1.009 3.185 1.009 5.04 0 1.856-.336 3.536-1.009 5.04-.672 1.505-1.592 2.792-2.76 3.864s-2.544 1.896-4.128 2.472-3.272.864-5.063.864c-1.793 0-3.48-.288-5.064-.864s-2.96-1.399-4.128-2.472a11.577 11.577 0 01-2.76-3.864c-.672-1.504-1.008-3.183-1.008-5.04zm7.199 0c0 1.76.504 3.185 1.513 4.271 1.008 1.089 2.424 1.633 4.248 1.633 1.823 0 3.239-.544 4.248-1.633 1.008-1.087 1.512-2.512 1.512-4.271s-.504-3.184-1.512-4.271c-1.009-1.088-2.425-1.633-4.248-1.633-1.824 0-3.24.545-4.248 1.633-1.009 1.088-1.513 2.512-1.513 4.271zM576.958 234.903a51.67 51.67 0 01-1.392 3.312c-.448.961-1.017 1.769-1.704 2.425-.688.655-1.56 1.151-2.616 1.487-1.056.336-2.447.504-4.176.504-1.856 0-3.647-.287-5.376-.863l.96-5.904c1.088.48 2.208.72 3.36.72.799 0 1.455-.088 1.968-.264a3.256 3.256 0 001.271-.768c.337-.337.616-.744.841-1.225.223-.479.463-1.04.72-1.68l.528-1.344-10.225-23.521h7.776l6 15.408h.096l5.136-15.408h7.393l-10.56 27.121zM497.807 207.783h6.624v3.072h.096c.288-.416.672-.84 1.152-1.271a8.356 8.356 0 011.728-1.177c.672-.352 1.433-.64 2.28-.864.848-.223 1.784-.336 2.808-.336 1.664 0 3.152.345 4.464 1.032a10.61 10.61 0 013.336 2.712c.912 1.121 1.616 2.416 2.112 3.889a14.04 14.04 0 01.744 4.512c0 1.76-.271 3.377-.816 4.848-.543 1.473-1.319 2.744-2.328 3.816a10.48 10.48 0 01-3.624 2.496c-1.407.592-2.976.888-4.703.888-1.088 0-2.248-.232-3.48-.696-1.231-.463-2.264-1.256-3.096-2.376h-.097v2.256c0 1.664.521 3.032 1.561 4.104 1.04 1.071 2.664 1.607 4.872 1.607 1.472 0 2.824-.271 4.056-.815a15.1 15.1 0 003.528-2.208l3.983 5.952c-1.695 1.344-3.552 2.247-5.567 2.712a27.364 27.364 0 01-6.145.695c-4.543 0-7.927-1.144-10.151-3.432-2.224-2.288-3.336-5.64-3.336-10.056v-21.36zm17.712 9.336a5.617 5.617 0 00-1.225-1.824c-.527-.527-1.135-.951-1.823-1.271s-1.448-.48-2.28-.48c-.8 0-1.552.16-2.256.48s-1.32.744-1.849 1.271a5.657 5.657 0 00-1.224 1.824 5.599 5.599 0 00-.432 2.184 5.63 5.63 0 001.656 4.009c.528.528 1.145.952 1.849 1.272s1.456.479 2.256.479c.832 0 1.592-.159 2.28-.479s1.296-.744 1.823-1.272a5.633 5.633 0 001.657-4.009 5.62 5.62 0 00-.432-2.184zM85.011 223.383a8.04 8.04 0 002.136 2.041c.816.527 1.816.791 3 .791 1.408 0 2.592-.408 3.552-1.224s1.584-1.911 1.872-3.288H78.866v-2.256c0-1.855.257-3.535.769-5.04.512-1.503 1.24-2.792 2.184-3.864a9.465 9.465 0 013.456-2.472c1.36-.576 2.873-.864 4.536-.864 1.792 0 3.479.288 5.063.864s2.961 1.4 4.129 2.472a11.612 11.612 0 012.76 3.864c.672 1.505 1.008 3.185 1.008 5.04 0 1.856-.336 3.536-1.008 5.04-.672 1.505-1.592 2.792-2.76 3.864s-2.545 1.896-4.129 2.472-3.271.864-5.063.864c-1.888 0-3.712-.4-5.472-1.2s-3.217-1.936-4.368-3.408l5.04-3.696zm10.559-6.576a4.562 4.562 0 00-.408-1.655 4.294 4.294 0 00-1.008-1.392 5.26 5.26 0 00-1.56-.984c-.607-.256-1.312-.385-2.112-.385-1.312 0-2.384.433-3.216 1.297-.832.863-1.231 1.904-1.2 3.119h9.504z" />
        </g>
      </g>
    </svg>
  ) : (
    <svg
      role="link"
      preserveAspectRatio="xMidYMid meet"
      width={svgWidth}
      height={svgHeight}
      id="prefix__Logo2_white"
      x={0}
      y={0}
      viewBox="0 0 608.031 249.48"
      {...restProps}
    >
      <path
        d="M244.628 126.974c-11.43-6.793-19.111-19.261-19.111-33.495 0-14.235 7.681-26.704 19.111-33.498V24.695c-29.859 8.625-51.765 36.185-51.765 68.784 0 32.598 21.907 60.157 51.765 68.779v-35.284z"
        fill="#0e2356"
      />
      <g fill="#00afcb">
        <path d="M519.67 1.435c5.558-.007 10.071 4.494 10.076 10.052.007 5.556-4.494 10.068-10.051 10.076-5.557.007-10.071-4.495-10.077-10.051-.006-5.558 4.494-10.07 10.052-10.077zM519.612 58.058c5.559-.007 10.071 4.493 10.077 10.051.009 5.559-4.493 10.071-10.053 10.079-5.557.004-10.068-4.495-10.073-10.054-.007-5.557 4.489-10.068 10.049-10.076z" />
      </g>
      <path
        d="M88.945 77.704c-8.812.001-15.952 7.175-15.953 16.024.001 8.851 7.141 16.021 15.956 16.021 8.812 0 15.954-7.175 15.951-16.025 0-8.849-7.146-16.021-15.954-16.02zm.003 28.267c-6.74.006-12.196-5.479-12.197-12.242-.001-6.766 5.454-12.248 12.195-12.248 6.731-.002 12.188 5.479 12.189 12.244 0 6.765-5.456 12.246-12.187 12.246z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#0e2356"
      />
      <path
        d="M127.848 93.571c0 21.788-17.689 39.516-39.434 39.516S48.98 115.359 48.98 93.571c0-21.788 17.689-39.516 39.434-39.516s39.434 17.728 39.434 39.516zM88.414 25.352c-37.54 0-68.08 30.603-68.08 68.219 0 37.616 30.541 68.22 68.08 68.22s68.082-30.604 68.082-68.22-30.543-68.219-68.082-68.219z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#0e2356"
      />
      <path
        d="M89.052 85.809c4.363 0 7.899 3.543 7.898 7.915.002 4.372-3.537 7.917-7.899 7.915-4.361 0-7.898-3.543-7.897-7.915-.001-4.37 3.536-7.917 7.898-7.915z"
        fill="#0e2356"
      />
      <path
        d="M519.654 25.351c-37.54 0-68.08 30.604-68.08 68.22s30.541 68.218 68.08 68.218c37.54 0 68.082-30.602 68.082-68.218.001-37.616-30.542-68.22-68.082-68.22zm0 107.737c-21.745 0-39.434-17.729-39.434-39.516 0-21.788 17.69-39.516 39.434-39.516 21.745 0 39.434 17.728 39.434 39.516.001 21.787-17.689 39.516-39.434 39.516z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#0e2356"
      />
      <path
        d="M362.128 77.53V24.967H330.02V77.53h-53.045v31.821h53.045v52.56h32.108v-52.56h53.045V77.53h-53.045z"
        fill="#0e2356"
      />
      <g>
        <g fill="#0e2356">
          <path d="M30.242 203.752h-9.696v-6.625h26.88v6.625H37.73v27.359h-7.488v-27.359zM157.537 215.319c-.353-.512-.848-.937-1.487-1.272a4.38 4.38 0 00-2.064-.504c-1.824 0-3.24.545-4.248 1.633s-1.512 2.512-1.512 4.271.504 3.185 1.512 4.271c1.008 1.089 2.424 1.633 4.248 1.633.8 0 1.488-.176 2.064-.528a6.333 6.333 0 001.487-1.248l4.752 4.992c-1.12 1.151-2.44 1.96-3.96 2.424s-2.968.696-4.344.696c-1.792 0-3.479-.288-5.063-.864s-2.961-1.399-4.129-2.472-2.088-2.359-2.76-3.864c-.672-1.504-1.008-3.184-1.008-5.04 0-1.855.336-3.535 1.008-5.04a11.612 11.612 0 012.76-3.864c1.168-1.071 2.545-1.896 4.129-2.472s3.271-.864 5.063-.864c1.376 0 2.824.232 4.344.696s2.84 1.272 3.96 2.424l-4.752 4.992zM206.689 194.823v16.128h.096c.16-.447.433-.896.816-1.344a6.411 6.411 0 011.392-1.2 7.58 7.58 0 011.92-.864 8.242 8.242 0 012.4-.336c1.824 0 3.296.281 4.416.84 1.12.561 1.992 1.337 2.616 2.328.624.992 1.048 2.16 1.271 3.504s.336 2.801.336 4.369v12.863h-7.199v-11.424c0-.672-.024-1.368-.072-2.088a6.58 6.58 0 00-.432-1.992 3.444 3.444 0 00-1.104-1.488c-.496-.384-1.208-.576-2.136-.576-.929 0-1.681.168-2.256.504a3.435 3.435 0 00-1.32 1.344 5.486 5.486 0 00-.6 1.896c-.097.705-.145 1.44-.145 2.208v11.616h-7.2v-36.288h7.201zM261.648 207.783h6.912v3.168h.096c.224-.447.544-.896.961-1.344a6.981 6.981 0 011.487-1.2 8.489 8.489 0 011.968-.864 8.242 8.242 0 012.4-.336c1.824 0 3.296.281 4.416.84 1.12.561 1.992 1.337 2.616 2.328.624.992 1.048 2.16 1.271 3.504s.336 2.801.336 4.369v12.863h-7.199v-11.424c0-.672-.024-1.368-.072-2.088a6.58 6.58 0 00-.432-1.992 3.444 3.444 0 00-1.104-1.488c-.496-.384-1.208-.576-2.136-.576-.929 0-1.681.168-2.256.504a3.435 3.435 0 00-1.32 1.344 5.486 5.486 0 00-.6 1.896c-.097.705-.145 1.44-.145 2.208v11.616h-7.2v-23.328zM322.944 219.447c0-1.855.336-3.535 1.008-5.04a11.6 11.6 0 012.761-3.864c1.167-1.071 2.544-1.896 4.128-2.472s3.271-.864 5.063-.864 3.48.288 5.064.864 2.959 1.4 4.128 2.472a11.626 11.626 0 012.76 3.864c.672 1.505 1.008 3.185 1.008 5.04 0 1.856-.336 3.536-1.008 5.04a11.606 11.606 0 01-2.76 3.864c-1.169 1.072-2.544 1.896-4.128 2.472s-3.272.864-5.064.864-3.479-.288-5.063-.864-2.961-1.399-4.128-2.472a11.58 11.58 0 01-2.761-3.864c-.672-1.504-1.008-3.183-1.008-5.04zm7.201 0c0 1.76.504 3.185 1.512 4.271 1.008 1.089 2.424 1.633 4.248 1.633s3.24-.544 4.248-1.633c1.008-1.087 1.512-2.512 1.512-4.271s-.504-3.184-1.512-4.271-2.424-1.633-4.248-1.633-3.24.545-4.248 1.633-1.512 2.512-1.512 4.271zM387.792 194.823h7.199v36.288h-7.199v-36.288zM433.92 219.447c0-1.855.336-3.535 1.008-5.04a11.598 11.598 0 012.76-3.864c1.168-1.071 2.544-1.896 4.128-2.472s3.271-.864 5.064-.864c1.791 0 3.479.288 5.063.864s2.96 1.4 4.128 2.472a11.612 11.612 0 012.76 3.864c.673 1.505 1.009 3.185 1.009 5.04 0 1.856-.336 3.536-1.009 5.04-.672 1.505-1.592 2.792-2.76 3.864s-2.544 1.896-4.128 2.472-3.272.864-5.063.864c-1.793 0-3.48-.288-5.064-.864s-2.96-1.399-4.128-2.472a11.577 11.577 0 01-2.76-3.864c-.672-1.504-1.008-3.183-1.008-5.04zm7.199 0c0 1.76.504 3.185 1.513 4.271 1.008 1.089 2.424 1.633 4.248 1.633 1.823 0 3.239-.544 4.248-1.633 1.008-1.087 1.512-2.512 1.512-4.271s-.504-3.184-1.512-4.271c-1.009-1.088-2.425-1.633-4.248-1.633-1.824 0-3.24.545-4.248 1.633-1.009 1.088-1.513 2.512-1.513 4.271zM576.958 234.903a51.67 51.67 0 01-1.392 3.312c-.448.961-1.017 1.769-1.704 2.425-.688.655-1.56 1.151-2.616 1.487-1.056.336-2.447.504-4.176.504-1.856 0-3.647-.287-5.376-.863l.96-5.904c1.088.48 2.208.72 3.36.72.799 0 1.455-.088 1.968-.264a3.256 3.256 0 001.271-.768c.337-.337.616-.744.841-1.225.223-.479.463-1.04.72-1.68l.528-1.344-10.225-23.521h7.776l6 15.408h.096l5.136-15.408h7.393l-10.56 27.121zM497.807 207.783h6.624v3.072h.096c.288-.416.672-.84 1.152-1.271a8.356 8.356 0 011.728-1.177c.672-.352 1.433-.64 2.28-.864.848-.223 1.784-.336 2.808-.336 1.664 0 3.152.345 4.464 1.032a10.61 10.61 0 013.336 2.712c.912 1.121 1.616 2.416 2.112 3.889a14.04 14.04 0 01.744 4.512c0 1.76-.271 3.377-.816 4.848-.543 1.473-1.319 2.744-2.328 3.816a10.48 10.48 0 01-3.624 2.496c-1.407.592-2.976.888-4.703.888-1.088 0-2.248-.232-3.48-.696-1.231-.463-2.264-1.256-3.096-2.376h-.097v2.256c0 1.664.521 3.032 1.561 4.104 1.04 1.071 2.664 1.607 4.872 1.607 1.472 0 2.824-.271 4.056-.815a15.1 15.1 0 003.528-2.208l3.983 5.952c-1.695 1.344-3.552 2.247-5.567 2.712a27.364 27.364 0 01-6.145.695c-4.543 0-7.927-1.144-10.151-3.432-2.224-2.288-3.336-5.64-3.336-10.056v-21.36zm17.712 9.336a5.617 5.617 0 00-1.225-1.824c-.527-.527-1.135-.951-1.823-1.271s-1.448-.48-2.28-.48c-.8 0-1.552.16-2.256.48s-1.32.744-1.849 1.271a5.657 5.657 0 00-1.224 1.824 5.599 5.599 0 00-.432 2.184 5.63 5.63 0 001.656 4.009c.528.528 1.145.952 1.849 1.272s1.456.479 2.256.479c.832 0 1.592-.159 2.28-.479s1.296-.744 1.823-1.272a5.633 5.633 0 001.657-4.009 5.62 5.62 0 00-.432-2.184zM85.011 223.383a8.04 8.04 0 002.136 2.041c.816.527 1.816.791 3 .791 1.408 0 2.592-.408 3.552-1.224s1.584-1.911 1.872-3.288H78.866v-2.256c0-1.855.257-3.535.769-5.04.512-1.503 1.24-2.792 2.184-3.864a9.465 9.465 0 013.456-2.472c1.36-.576 2.873-.864 4.536-.864 1.792 0 3.479.288 5.063.864s2.961 1.4 4.129 2.472a11.612 11.612 0 012.76 3.864c.672 1.505 1.008 3.185 1.008 5.04 0 1.856-.336 3.536-1.008 5.04-.672 1.505-1.592 2.792-2.76 3.864s-2.545 1.896-4.129 2.472-3.271.864-5.063.864c-1.888 0-3.712-.4-5.472-1.2s-3.217-1.936-4.368-3.408l5.04-3.696zm10.559-6.576a4.562 4.562 0 00-.408-1.655 4.294 4.294 0 00-1.008-1.392 5.26 5.26 0 00-1.56-.984c-.607-.256-1.312-.385-2.112-.385-1.312 0-2.384.433-3.216 1.297-.832.863-1.231 1.904-1.2 3.119h9.504z" />
        </g>
      </g>
    </svg>
  );
}
