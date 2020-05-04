import React from "react";

const imgRatio = 0.4;
const defaultSize = {
  width: 100,
  height: 100 / imgRatio,
};

interface Props {
  /** Specify the width of the `logo` element */
  width?: number;
  /** Specify the height of the `logo` element */
  height?: number;
  /** The information that describe the `logo` element  */
  text?: string;
  /** Provide the the color used to paint the `logo` element:
   *  "primary" | "white"
   */
  color?: "primary" | "white";
  /** Redirect url of logo */
  href?: string;
  className?: string;
}

export default function CodedLogo({
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

  return color === "white" ? (
    <svg
      role="link"
      preserveAspectRatio="xMidYMid meet"
      width={`${svgHeight}px`}
      height={`${svgWidth}px`}
      x={0}
      y={0}
      viewBox="0 0 595.276 235.506"
      className={className}
      {...restProps}
    >
      <a href={href}>
        <text opacity="0">{text}</text>
      </a>
      <g fill="#FFFFFF">
        <path d="M270.694 112.642h-7.499v-3.1c-3.103 2.305-6.561 3.458-10.375 3.458-4.934 0-9.146-1.794-12.637-5.383-3.491-3.566-5.236-7.884-5.236-12.953 0-5.067 1.745-9.385 5.236-12.951 3.491-3.588 7.703-5.384 12.637-5.384 3.814 0 7.272 1.142 10.375 3.426V76.69h7.499v35.952zm-17.873-7.209c2.845 0 5.29-1.045 7.337-3.132 2.025-2.11 3.038-4.654 3.038-7.635 0-2.98-1.013-5.523-3.038-7.633-2.047-2.088-4.492-3.132-7.337-3.132-2.865 0-5.322 1.045-7.369 3.132-2.004 2.11-3.005 4.654-3.005 7.633 0 2.981 1.002 5.525 3.005 7.635 2.047 2.087 4.503 3.132 7.369 3.132zM295.217 83.9c-2.866 0-5.312 1.045-7.337 3.132-2.025 2.11-3.038 4.654-3.038 7.633 0 2.981 1.013 5.525 3.038 7.635 2.026 2.088 4.471 3.132 7.337 3.132 3.511 0 6.313-1.468 8.403-4.405l6.108 4.372c-3.599 5.067-8.436 7.601-14.511 7.601-4.935 0-9.147-1.794-12.638-5.383-3.491-3.566-5.236-7.884-5.236-12.953 0-5.067 1.745-9.385 5.236-12.951 3.491-3.588 7.703-5.384 12.638-5.384 6.075 0 10.912 2.535 14.511 7.602l-6.108 4.372c-2.09-2.935-4.892-4.403-8.403-4.403zM350.153 112.642h-7.499v-3.1c-3.101 2.305-6.559 3.458-10.374 3.458-4.933 0-9.146-1.794-12.639-5.383-3.489-3.566-5.235-7.884-5.235-12.953 0-5.067 1.746-9.385 5.235-12.951 3.492-3.588 7.705-5.384 12.639-5.384 3.815 0 7.273 1.142 10.374 3.426V76.69h7.499v35.952zm-17.874-7.209c2.844 0 5.29-1.045 7.338-3.132 2.024-2.11 3.036-4.654 3.036-7.635 0-2.98-1.012-5.523-3.036-7.633-2.048-2.088-4.494-3.132-7.338-3.132-2.865 0-5.321 1.045-7.369 3.132-2.004 2.11-3.005 4.654-3.005 7.633 0 2.981 1.002 5.525 3.005 7.635 2.048 2.087 4.505 3.132 7.369 3.132zM392.517 112.675h-7.499v-3.034c-3.101 2.328-6.561 3.491-10.374 3.491-4.935 0-9.146-1.805-12.637-5.415-3.491-3.566-5.237-7.873-5.237-12.92 0-5.067 1.746-9.385 5.237-12.951 3.491-3.588 7.702-5.383 12.637-5.383 3.813 0 7.273 1.141 10.374 3.426V65.011h7.499v47.664zm-17.874-7.112c2.844 0 5.29-1.055 7.337-3.165 2.026-2.11 3.038-4.643 3.038-7.602 0-2.98-1.012-5.523-3.038-7.633-2.046-2.11-4.492-3.165-7.337-3.165-2.866 0-5.323 1.055-7.369 3.165-2.004 2.11-3.005 4.654-3.005 7.633 0 2.959 1.002 5.493 3.005 7.602 2.047 2.11 4.503 3.165 7.369 3.165zM431.874 104.877c-1.485 2.307-3.426 4.167-5.817 5.58-2.781 1.696-5.786 2.544-9.018 2.544-4.935 0-9.146-1.794-12.637-5.383-3.491-3.566-5.237-7.884-5.237-12.953 0-5.067 1.746-9.385 5.237-12.951 3.491-3.588 7.702-5.384 12.637-5.384 4.913 0 9.126 1.796 12.637 5.384 3.491 3.566 5.237 7.884 5.237 12.951v3.1H407.31c.604 2.371 1.854 4.275 3.75 5.71 1.789 1.304 3.782 1.957 5.98 1.957 3.599 0 6.378-1.446 8.338-4.34l6.496 3.785zm-5.107-13.996c-.753-2.065-2.004-3.741-3.748-5.024-1.789-1.305-3.782-1.957-5.98-1.957-2.197 0-4.191.652-5.98 1.957-1.745 1.283-2.995 2.959-3.75 5.024h19.458zM481.735 75.972c4.331 0 8.036 1.762 11.119 5.285 3.058 3.503 4.589 7.733 4.589 12.692v18.694h-7.337V93.948c0-2.914-.818-5.405-2.456-7.472-1.638-2.065-3.609-3.098-5.914-3.098-2.328 0-4.309 1.033-5.947 3.098-1.638 2.067-2.456 4.558-2.456 7.472v18.694h-7.336V93.948c0-2.914-.82-5.405-2.456-7.472-1.638-2.065-3.619-3.098-5.947-3.098-2.305 0-4.278 1.033-5.914 3.098-1.638 2.067-2.456 4.558-2.456 7.472v18.694h-7.337V76.69h7.337v2.055c2.542-1.849 5.333-2.774 8.371-2.774 4.89 0 8.909 2.154 12.055 6.46 3.166-4.305 7.193-6.459 12.085-6.459zM501.558 77.147h9.016l9.134 22.272 10.079-22.272h9.043l-22.023 48.481h-9.114l7.23-15.634-13.365-32.847z" />
      </g>
      <g fill="#FFFFFF">
        <path d="M216.888 76.877a2.752 2.752 0 010 3.864 2.684 2.684 0 01-3.824 0 2.752 2.752 0 010-3.864 2.686 2.686 0 013.824 0zM206.105 87.722a2.752 2.752 0 010 3.864 2.685 2.685 0 01-3.825 0 2.752 2.752 0 01.001-3.863 2.683 2.683 0 013.824-.001z" />
      </g>
      <path
        fill="#FFFFFF"
        d="M178.599 76.031h-35.704v8.297h13.812V113h8.081V84.328h13.811z"
      />
      <path
        d="M125.562 105.293c-5.843 0-10.596-4.812-10.596-10.727s4.753-10.727 10.596-10.727c2.508 0 4.814.889 6.63 2.369l5.462-5.519c-3.225-2.886-7.459-4.642-12.092-4.642-10.086 0-18.292 8.308-18.292 18.519 0 10.212 8.206 18.52 18.292 18.52 4.605 0 8.814-1.736 12.034-4.589l-5.465-5.522a10.468 10.468 0 01-6.569 2.318zM83.652 90.258c-2.368 0-4.286 1.948-4.287 4.35 0 2.402 1.919 4.349 4.287 4.349s4.287-1.948 4.286-4.35c.001-2.402-1.919-4.349-4.286-4.349zm.001 7.674c-1.811.001-3.277-1.488-3.277-3.323 0-1.837 1.465-3.325 3.277-3.325 1.809-.001 3.275 1.487 3.275 3.323-.001 1.837-1.467 3.325-3.275 3.325z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FFFFFF"
      />
      <path
        d="M94.105 94.565c0 5.915-4.753 10.727-10.596 10.727s-10.596-4.812-10.596-10.727 4.753-10.727 10.596-10.727 10.596 4.813 10.596 10.727zM83.509 76.046c-10.086 0-18.292 8.308-18.292 18.519 0 10.212 8.206 18.52 18.292 18.52 10.086 0 18.293-8.308 18.293-18.52 0-10.211-8.206-18.519-18.293-18.519z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FFFFFF"
      />
      <path
        d="M83.681 92.458c1.172 0 2.122.962 2.122 2.149.001 1.186-.95 2.149-2.122 2.149s-2.122-.962-2.122-2.149c-.001-1.186.95-2.149 2.122-2.149z"
        fill="#FFFFFF"
      />
      <g>
        <path
          d="M199.379 76.046c-10.086 0-18.292 8.308-18.292 18.519 0 10.211 8.206 18.519 18.292 18.519 10.086 0 18.293-8.308 18.293-18.519 0-10.211-8.207-18.519-18.293-18.519zm0 29.247c-5.843 0-10.596-4.813-10.596-10.727 0-5.915 4.753-10.727 10.596-10.727s10.596 4.813 10.596 10.727c-.001 5.914-4.754 10.727-10.596 10.727z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFFFFF"
        />
      </g>
      <g fill="#FFFFFF">
        <path d="M142.82 140.371h4.725v17.256h8.752v4.407H142.82v-21.663zM178.313 159.464a7.26 7.26 0 01-2.756 2.172 8.203 8.203 0 01-3.452.765 9.202 9.202 0 01-3.196-.551 7.665 7.665 0 01-2.604-1.576 7.388 7.388 0 01-1.742-2.463c-.424-.957-.636-2.029-.636-3.213 0-1.182.212-2.252.636-3.213a7.405 7.405 0 011.742-2.462 7.665 7.665 0 012.604-1.576c1-.367 2.064-.551 3.196-.551 1.049 0 2.004.184 2.861.551a5.95 5.95 0 012.181 1.576c.595.683 1.055 1.504 1.377 2.462.323.961.485 2.031.485 3.213v1.439H168.47c.182.877.576 1.575 1.181 2.096.606.52 1.353.78 2.241.78.747 0 1.378-.17 1.893-.506a5.08 5.08 0 001.348-1.3l3.18 2.357zm-3.846-6.549c.02-.774-.232-1.437-.757-1.988-.525-.551-1.202-.827-2.029-.827-.504 0-.949.082-1.332.245a3.317 3.317 0 00-.985.628 2.73 2.73 0 00-.636.887 2.945 2.945 0 00-.257 1.055h5.996zM197.059 160.167h-.061a4.28 4.28 0 01-2.014 1.714 6.874 6.874 0 01-2.649.52 6.827 6.827 0 01-1.984-.29 4.99 4.99 0 01-1.681-.873 4.204 4.204 0 01-1.151-1.437c-.283-.571-.424-1.235-.424-1.99 0-.856.156-1.58.469-2.172s.737-1.081 1.272-1.468 1.146-.69 1.833-.904a13.347 13.347 0 012.135-.473 20.574 20.574 0 012.211-.184 72.004 72.004 0 012.044-.031c0-.815-.287-1.463-.863-1.943-.576-.479-1.257-.719-2.045-.719-.747 0-1.428.16-2.044.475a5.605 5.605 0 00-1.651 1.3l-2.422-2.51a8.294 8.294 0 012.968-1.789 10.502 10.502 0 013.513-.597c1.333 0 2.427.168 3.286.504.858.336 1.545.832 2.059 1.484.515.654.873 1.455 1.076 2.403.202.947.303 2.045.303 3.288v7.558h-4.179v-1.866zm-1.12-4.65c-.344 0-.773.014-1.287.045a6.477 6.477 0 00-1.484.261 3.28 3.28 0 00-1.212.643c-.333.285-.499.683-.499 1.192 0 .551.232.959.696 1.225.464.264.949.398 1.454.398.443 0 .873-.062 1.286-.184a3.89 3.89 0 001.106-.521c.322-.223.581-.509.773-.856.191-.346.287-.755.287-1.225v-.978h-1.12zM210.141 147.163h4.543v2.386h.061c.485-.918 1.059-1.606 1.726-2.065.666-.458 1.504-.688 2.514-.688.262 0 .525.01.787.031.262.021.504.06.727.122v4.192a6.816 6.816 0 00-.955-.23 6.113 6.113 0 00-.984-.077c-.869 0-1.555.124-2.059.367a2.739 2.739 0 00-1.166 1.026c-.273.439-.449.964-.53 1.576a15.446 15.446 0 00-.121 2.019v6.211h-4.543v-14.87zM229.069 147.163h4.361v2.019h.061c.141-.285.343-.571.606-.856.262-.286.575-.54.939-.765a5.299 5.299 0 011.241-.551 5.16 5.16 0 011.515-.214c1.151 0 2.079.178 2.786.535a4.054 4.054 0 011.651 1.484c.394.633.661 1.377.802 2.233.142.858.213 1.786.213 2.784v8.201H238.7v-7.282c0-.429-.015-.873-.045-1.331a4.214 4.214 0 00-.273-1.271 2.203 2.203 0 00-.696-.949c-.313-.244-.762-.367-1.347-.367-.586 0-1.06.108-1.424.322a2.18 2.18 0 00-.833.856c-.192.357-.317.76-.378 1.209a10.44 10.44 0 00-.091 1.407v7.405h-4.543v-14.869zM277.554 150.834h-3.998v4.957c0 .408.02.78.061 1.117.04.336.131.628.273.873.141.244.358.432.651.566.292.132.681.199 1.166.199.243 0 .56-.026.954-.077.395-.051.692-.168.894-.352v3.823a6.78 6.78 0 01-1.575.369 14.68 14.68 0 01-1.605.091 8.651 8.651 0 01-2.12-.245 4.779 4.779 0 01-1.696-.78 3.639 3.639 0 01-1.136-1.391c-.272-.571-.408-1.264-.408-2.081v-7.069h-2.908v-3.671h2.908v-4.407h4.542v4.407h3.998v3.671zM285.367 154.598c0-1.182.212-2.252.636-3.213a7.405 7.405 0 011.742-2.462 7.665 7.665 0 012.604-1.576c1-.367 2.064-.551 3.196-.551 1.13 0 2.196.184 3.195.551a7.68 7.68 0 012.605 1.576 7.392 7.392 0 011.741 2.462c.424.961.636 2.031.636 3.213 0 1.184-.212 2.256-.636 3.213a7.376 7.376 0 01-1.741 2.463 7.68 7.68 0 01-2.605 1.576 9.192 9.192 0 01-3.195.551 9.202 9.202 0 01-3.196-.551 7.665 7.665 0 01-2.604-1.576 7.388 7.388 0 01-1.742-2.463c-.424-.958-.636-2.03-.636-3.213zm4.543 0c0 1.124.318 2.031.955 2.724.636.693 1.529 1.04 2.68 1.04 1.15 0 2.044-.346 2.68-1.04.636-.693.954-1.6.954-2.724 0-1.12-.318-2.029-.954-2.722-.636-.693-1.53-1.041-2.68-1.041-1.151 0-2.045.348-2.68 1.041-.637.692-.955 1.602-.955 2.722zM340.059 146a4.63 4.63 0 00-1.71-1.316c-.678-.305-1.458-.46-2.347-.46a5.861 5.861 0 00-4.437 1.974 6.773 6.773 0 00-1.302 2.218 8.04 8.04 0 00-.47 2.784c0 1.021.156 1.954.47 2.801.312.846.743 1.58 1.286 2.202a5.834 5.834 0 001.925 1.453c.736.348 1.528.52 2.376.52.969 0 1.829-.202 2.575-.611a5.134 5.134 0 001.847-1.714l3.937 2.968c-.907 1.285-2.058 2.233-3.451 2.846a10.596 10.596 0 01-4.3.918c-1.678 0-3.221-.266-4.635-.796-1.413-.53-2.635-1.29-3.664-2.28-1.029-.988-1.832-2.187-2.408-3.595-.575-1.407-.863-2.978-.863-4.712 0-1.732.288-3.304.863-4.712.576-1.407 1.379-2.606 2.408-3.594 1.029-.99 2.251-1.75 3.664-2.28 1.413-.53 2.957-.796 4.635-.796.606 0 1.235.057 1.892.168.655.111 1.302.29 1.938.535a8.602 8.602 0 011.832.979c.585.408 1.11.907 1.575 1.499L340.059 146zM356.808 138.902v10.28h.06c.101-.285.273-.571.515-.856.244-.286.535-.54.878-.765s.748-.408 1.213-.551a5.146 5.146 0 011.513-.214c1.151 0 2.081.178 2.787.535a4.05 4.05 0 011.65 1.484c.393.633.66 1.377.803 2.233.141.858.211 1.786.211 2.784v8.201h-4.542v-7.282c0-.429-.015-.873-.045-1.331a4.275 4.275 0 00-.273-1.271 2.227 2.227 0 00-.696-.949c-.314-.244-.763-.367-1.348-.367-.587 0-1.06.108-1.424.322a2.158 2.158 0 00-.832.856c-.192.357-.319.76-.379 1.209-.06.448-.091.918-.091 1.407v7.405h-4.542v-23.131h4.542zM384.943 160.167h-.062c-.504.796-1.177 1.367-2.014 1.714s-1.72.52-2.65.52a6.825 6.825 0 01-1.983-.29 4.99 4.99 0 01-1.681-.873 4.216 4.216 0 01-1.151-1.437c-.283-.571-.424-1.235-.424-1.99 0-.856.156-1.58.47-2.172.312-.592.736-1.081 1.271-1.468s1.146-.69 1.832-.904a13.359 13.359 0 012.136-.473 20.596 20.596 0 012.211-.184 72.017 72.017 0 012.045-.031c0-.815-.288-1.463-.865-1.943-.575-.479-1.256-.719-2.043-.719-.748 0-1.429.16-2.045.475a5.589 5.589 0 00-1.65 1.3l-2.424-2.51a8.316 8.316 0 012.969-1.789c1.13-.398 2.3-.597 3.513-.597 1.331 0 2.427.168 3.285.504.858.336 1.546.832 2.06 1.484.515.654.873 1.455 1.074 2.403.202.947.304 2.045.304 3.288v7.558h-4.179v-1.866zm-1.122-4.65c-.343 0-.772.014-1.286.045a6.467 6.467 0 00-1.484.261 3.267 3.267 0 00-1.211.643c-.334.285-.501.683-.501 1.192 0 .551.233.959.696 1.225.465.264.95.398 1.455.398.444 0 .873-.062 1.286-.184a3.902 3.902 0 001.106-.521c.322-.223.58-.509.772-.856s.288-.755.288-1.225v-.978h-1.121zM398.024 147.163h4.36v2.019h.06c.142-.285.343-.571.606-.856.262-.286.576-.54.94-.765s.777-.408 1.242-.551a5.146 5.146 0 011.513-.214c1.151 0 2.081.178 2.787.535a4.05 4.05 0 011.65 1.484c.393.633.66 1.377.803 2.233.141.858.211 1.786.211 2.784v8.201h-4.542v-7.282c0-.429-.015-.873-.045-1.331a4.275 4.275 0 00-.273-1.271 2.227 2.227 0 00-.696-.949c-.314-.244-.763-.367-1.348-.367-.587 0-1.06.108-1.424.322s-.642.499-.832.856c-.192.357-.319.76-.379 1.209-.06.448-.091.918-.091 1.407v7.405h-4.542v-14.869zM436.909 160.78c0 2.815-.702 4.95-2.105 6.41-1.403 1.458-3.539 2.187-6.405 2.187-1.312 0-2.606-.148-3.877-.444-1.273-.295-2.443-.871-3.513-1.727l2.513-3.794a9.547 9.547 0 002.227 1.407c.777.346 1.63.52 2.559.52 1.393 0 2.417-.341 3.074-1.024.655-.684.985-1.556.985-2.616v-1.439h-.062c-.525.715-1.177 1.22-1.952 1.515-.779.297-1.509.444-2.196.444-1.091 0-2.081-.189-2.969-.566s-1.65-.907-2.287-1.592a7.115 7.115 0 01-1.468-2.432c-.343-.937-.515-1.967-.515-3.089 0-.979.156-1.938.47-2.877a7.898 7.898 0 011.331-2.479 6.722 6.722 0 012.105-1.729c.829-.437 1.767-.657 2.817-.657.647 0 1.237.072 1.772.214.535.142 1.016.326 1.439.551s.787.473 1.089.75c.304.274.545.545.727.81h.06v-1.957h4.18v13.614zm-11.448-6.273a3.604 3.604 0 001.045 2.554c.335.338.717.607 1.151.811.434.204.914.305 1.439.305.504 0 .979-.101 1.424-.305a3.919 3.919 0 001.165-.811 3.574 3.574 0 001.045-2.554 3.64 3.64 0 00-.271-1.393 3.604 3.604 0 00-.774-1.163 3.953 3.953 0 00-1.165-.81 3.372 3.372 0 00-1.424-.307c-.525 0-1.005.103-1.439.307a4.015 4.015 0 00-1.151.81 3.604 3.604 0 00-1.045 2.556zM460.531 159.464a7.255 7.255 0 01-2.757 2.172 8.195 8.195 0 01-3.451.765 9.198 9.198 0 01-3.196-.551 7.665 7.665 0 01-2.604-1.576 7.372 7.372 0 01-1.741-2.463c-.425-.957-.636-2.029-.636-3.213 0-1.182.211-2.252.636-3.213a7.388 7.388 0 011.741-2.462 7.665 7.665 0 012.604-1.576c1-.367 2.064-.551 3.196-.551 1.05 0 2.004.184 2.861.551a5.946 5.946 0 012.18 1.576c.595.683 1.055 1.504 1.379 2.462.322.961.484 2.031.484 3.213v1.439h-10.539c.182.877.576 1.575 1.182 2.096.606.52 1.352.78 2.24.78.748 0 1.379-.17 1.894-.506a5.062 5.062 0 001.347-1.3l3.18 2.357zm-3.846-6.549c.019-.774-.233-1.437-.756-1.988-.527-.551-1.202-.827-2.029-.827-.506 0-.95.082-1.333.245a3.317 3.317 0 00-.985.628 2.745 2.745 0 00-.636.887 2.945 2.945 0 00-.257 1.055h5.996z" />
      </g>
    </svg>
  ) : (
    <svg
      role="link"
      preserveAspectRatio="xMidYMid meet"
      width={`${svgHeight}px`}
      height={`${svgWidth}px`}
      x={0}
      y={0}
      viewBox="0 0 595.276 235.506"
      {...restProps}
    >
      <a href={href}>
        <text opacity="0">{text}</text>
      </a>
      <g fill="#00b0cc">
        <path d="M270.694 112.642h-7.499v-3.1c-3.103 2.305-6.561 3.458-10.375 3.458-4.934 0-9.146-1.794-12.637-5.383-3.491-3.566-5.236-7.884-5.236-12.953 0-5.067 1.745-9.385 5.236-12.951 3.491-3.588 7.703-5.384 12.637-5.384 3.814 0 7.272 1.142 10.375 3.426V76.69h7.499v35.952zm-17.873-7.209c2.845 0 5.29-1.045 7.337-3.132 2.025-2.11 3.038-4.654 3.038-7.635 0-2.98-1.013-5.523-3.038-7.633-2.047-2.088-4.492-3.132-7.337-3.132-2.865 0-5.322 1.045-7.369 3.132-2.004 2.11-3.005 4.654-3.005 7.633 0 2.981 1.002 5.525 3.005 7.635 2.047 2.087 4.503 3.132 7.369 3.132zM295.217 83.9c-2.866 0-5.312 1.045-7.337 3.132-2.025 2.11-3.038 4.654-3.038 7.633 0 2.981 1.013 5.525 3.038 7.635 2.026 2.088 4.471 3.132 7.337 3.132 3.511 0 6.313-1.468 8.403-4.405l6.108 4.372c-3.599 5.067-8.436 7.601-14.511 7.601-4.935 0-9.147-1.794-12.638-5.383-3.491-3.566-5.236-7.884-5.236-12.953 0-5.067 1.745-9.385 5.236-12.951 3.491-3.588 7.703-5.384 12.638-5.384 6.075 0 10.912 2.535 14.511 7.602l-6.108 4.372c-2.09-2.935-4.892-4.403-8.403-4.403zM350.153 112.642h-7.499v-3.1c-3.101 2.305-6.559 3.458-10.374 3.458-4.933 0-9.146-1.794-12.639-5.383-3.489-3.566-5.235-7.884-5.235-12.953 0-5.067 1.746-9.385 5.235-12.951 3.492-3.588 7.705-5.384 12.639-5.384 3.815 0 7.273 1.142 10.374 3.426V76.69h7.499v35.952zm-17.874-7.209c2.844 0 5.29-1.045 7.338-3.132 2.024-2.11 3.036-4.654 3.036-7.635 0-2.98-1.012-5.523-3.036-7.633-2.048-2.088-4.494-3.132-7.338-3.132-2.865 0-5.321 1.045-7.369 3.132-2.004 2.11-3.005 4.654-3.005 7.633 0 2.981 1.002 5.525 3.005 7.635 2.048 2.087 4.505 3.132 7.369 3.132zM392.517 112.675h-7.499v-3.034c-3.101 2.328-6.561 3.491-10.374 3.491-4.935 0-9.146-1.805-12.637-5.415-3.491-3.566-5.237-7.873-5.237-12.92 0-5.067 1.746-9.385 5.237-12.951 3.491-3.588 7.702-5.383 12.637-5.383 3.813 0 7.273 1.141 10.374 3.426V65.011h7.499v47.664zm-17.874-7.112c2.844 0 5.29-1.055 7.337-3.165 2.026-2.11 3.038-4.643 3.038-7.602 0-2.98-1.012-5.523-3.038-7.633-2.046-2.11-4.492-3.165-7.337-3.165-2.866 0-5.323 1.055-7.369 3.165-2.004 2.11-3.005 4.654-3.005 7.633 0 2.959 1.002 5.493 3.005 7.602 2.047 2.11 4.503 3.165 7.369 3.165zM431.874 104.877c-1.485 2.307-3.426 4.167-5.817 5.58-2.781 1.696-5.786 2.544-9.018 2.544-4.935 0-9.146-1.794-12.637-5.383-3.491-3.566-5.237-7.884-5.237-12.953 0-5.067 1.746-9.385 5.237-12.951 3.491-3.588 7.702-5.384 12.637-5.384 4.913 0 9.126 1.796 12.637 5.384 3.491 3.566 5.237 7.884 5.237 12.951v3.1H407.31c.604 2.371 1.854 4.275 3.75 5.71 1.789 1.304 3.782 1.957 5.98 1.957 3.599 0 6.378-1.446 8.338-4.34l6.496 3.785zm-5.107-13.996c-.753-2.065-2.004-3.741-3.748-5.024-1.789-1.305-3.782-1.957-5.98-1.957-2.197 0-4.191.652-5.98 1.957-1.745 1.283-2.995 2.959-3.75 5.024h19.458zM481.735 75.972c4.331 0 8.036 1.762 11.119 5.285 3.058 3.503 4.589 7.733 4.589 12.692v18.694h-7.337V93.948c0-2.914-.818-5.405-2.456-7.472-1.638-2.065-3.609-3.098-5.914-3.098-2.328 0-4.309 1.033-5.947 3.098-1.638 2.067-2.456 4.558-2.456 7.472v18.694h-7.336V93.948c0-2.914-.82-5.405-2.456-7.472-1.638-2.065-3.619-3.098-5.947-3.098-2.305 0-4.278 1.033-5.914 3.098-1.638 2.067-2.456 4.558-2.456 7.472v18.694h-7.337V76.69h7.337v2.055c2.542-1.849 5.333-2.774 8.371-2.774 4.89 0 8.909 2.154 12.055 6.46 3.166-4.305 7.193-6.459 12.085-6.459zM501.558 77.147h9.016l9.134 22.272 10.079-22.272h9.043l-22.023 48.481h-9.114l7.23-15.634-13.365-32.847z" />
      </g>
      <g fill="#00b0cc">
        <path d="M216.888 76.877a2.752 2.752 0 010 3.864 2.684 2.684 0 01-3.824 0 2.752 2.752 0 010-3.864 2.686 2.686 0 013.824 0zM206.105 87.722a2.752 2.752 0 010 3.864 2.685 2.685 0 01-3.825 0 2.752 2.752 0 01.001-3.863 2.683 2.683 0 013.824-.001z" />
      </g>
      <path
        fill="#001e57"
        d="M178.599 76.031h-35.704v8.297h13.812V113h8.081V84.328h13.811z"
      />
      <path
        d="M125.562 105.293c-5.843 0-10.596-4.812-10.596-10.727s4.753-10.727 10.596-10.727c2.508 0 4.814.889 6.63 2.369l5.462-5.519c-3.225-2.886-7.459-4.642-12.092-4.642-10.086 0-18.292 8.308-18.292 18.519 0 10.212 8.206 18.52 18.292 18.52 4.605 0 8.814-1.736 12.034-4.589l-5.465-5.522a10.468 10.468 0 01-6.569 2.318zM83.652 90.258c-2.368 0-4.286 1.948-4.287 4.35 0 2.402 1.919 4.349 4.287 4.349s4.287-1.948 4.286-4.35c.001-2.402-1.919-4.349-4.286-4.349zm.001 7.674c-1.811.001-3.277-1.488-3.277-3.323 0-1.837 1.465-3.325 3.277-3.325 1.809-.001 3.275 1.487 3.275 3.323-.001 1.837-1.467 3.325-3.275 3.325z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#001e57"
      />
      <path
        d="M94.105 94.565c0 5.915-4.753 10.727-10.596 10.727s-10.596-4.812-10.596-10.727 4.753-10.727 10.596-10.727 10.596 4.813 10.596 10.727zM83.509 76.046c-10.086 0-18.292 8.308-18.292 18.519 0 10.212 8.206 18.52 18.292 18.52 10.086 0 18.293-8.308 18.293-18.52 0-10.211-8.206-18.519-18.293-18.519z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#001e57"
      />
      <path
        d="M83.681 92.458c1.172 0 2.122.962 2.122 2.149.001 1.186-.95 2.149-2.122 2.149s-2.122-.962-2.122-2.149c-.001-1.186.95-2.149 2.122-2.149z"
        fill="#001e57"
      />
      <g>
        <path
          d="M199.379 76.046c-10.086 0-18.292 8.308-18.292 18.519 0 10.211 8.206 18.519 18.292 18.519 10.086 0 18.293-8.308 18.293-18.519 0-10.211-8.207-18.519-18.293-18.519zm0 29.247c-5.843 0-10.596-4.813-10.596-10.727 0-5.915 4.753-10.727 10.596-10.727s10.596 4.813 10.596 10.727c-.001 5.914-4.754 10.727-10.596 10.727z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#0e2356"
        />
        <path
          d="M199.379 76.046c-10.086 0-18.292 8.308-18.292 18.519 0 10.211 8.206 18.519 18.292 18.519 10.086 0 18.293-8.308 18.293-18.519 0-10.211-8.207-18.519-18.293-18.519zm0 29.247c-5.843 0-10.596-4.813-10.596-10.727 0-5.915 4.753-10.727 10.596-10.727s10.596 4.813 10.596 10.727c-.001 5.914-4.754 10.727-10.596 10.727z"
          fill="#001e57"
        />
      </g>
      <g fill="#001e57">
        <path d="M142.82 140.371h4.725v17.256h8.752v4.407H142.82v-21.663zM178.313 159.464a7.26 7.26 0 01-2.756 2.172 8.203 8.203 0 01-3.452.765 9.202 9.202 0 01-3.196-.551 7.665 7.665 0 01-2.604-1.576 7.388 7.388 0 01-1.742-2.463c-.424-.957-.636-2.029-.636-3.213 0-1.182.212-2.252.636-3.213a7.405 7.405 0 011.742-2.462 7.665 7.665 0 012.604-1.576c1-.367 2.064-.551 3.196-.551 1.049 0 2.004.184 2.861.551a5.95 5.95 0 012.181 1.576c.595.683 1.055 1.504 1.377 2.462.323.961.485 2.031.485 3.213v1.439H168.47c.182.877.576 1.575 1.181 2.096.606.52 1.353.78 2.241.78.747 0 1.378-.17 1.893-.506a5.08 5.08 0 001.348-1.3l3.18 2.357zm-3.846-6.549c.02-.774-.232-1.437-.757-1.988-.525-.551-1.202-.827-2.029-.827-.504 0-.949.082-1.332.245a3.317 3.317 0 00-.985.628 2.73 2.73 0 00-.636.887 2.945 2.945 0 00-.257 1.055h5.996zM197.059 160.167h-.061a4.28 4.28 0 01-2.014 1.714 6.874 6.874 0 01-2.649.52 6.827 6.827 0 01-1.984-.29 4.99 4.99 0 01-1.681-.873 4.204 4.204 0 01-1.151-1.437c-.283-.571-.424-1.235-.424-1.99 0-.856.156-1.58.469-2.172s.737-1.081 1.272-1.468 1.146-.69 1.833-.904a13.347 13.347 0 012.135-.473 20.574 20.574 0 012.211-.184 72.004 72.004 0 012.044-.031c0-.815-.287-1.463-.863-1.943-.576-.479-1.257-.719-2.045-.719-.747 0-1.428.16-2.044.475a5.605 5.605 0 00-1.651 1.3l-2.422-2.51a8.294 8.294 0 012.968-1.789 10.502 10.502 0 013.513-.597c1.333 0 2.427.168 3.286.504.858.336 1.545.832 2.059 1.484.515.654.873 1.455 1.076 2.403.202.947.303 2.045.303 3.288v7.558h-4.179v-1.866zm-1.12-4.65c-.344 0-.773.014-1.287.045a6.477 6.477 0 00-1.484.261 3.28 3.28 0 00-1.212.643c-.333.285-.499.683-.499 1.192 0 .551.232.959.696 1.225.464.264.949.398 1.454.398.443 0 .873-.062 1.286-.184a3.89 3.89 0 001.106-.521c.322-.223.581-.509.773-.856.191-.346.287-.755.287-1.225v-.978h-1.12zM210.141 147.163h4.543v2.386h.061c.485-.918 1.059-1.606 1.726-2.065.666-.458 1.504-.688 2.514-.688.262 0 .525.01.787.031.262.021.504.06.727.122v4.192a6.816 6.816 0 00-.955-.23 6.113 6.113 0 00-.984-.077c-.869 0-1.555.124-2.059.367a2.739 2.739 0 00-1.166 1.026c-.273.439-.449.964-.53 1.576a15.446 15.446 0 00-.121 2.019v6.211h-4.543v-14.87zM229.069 147.163h4.361v2.019h.061c.141-.285.343-.571.606-.856.262-.286.575-.54.939-.765a5.299 5.299 0 011.241-.551 5.16 5.16 0 011.515-.214c1.151 0 2.079.178 2.786.535a4.054 4.054 0 011.651 1.484c.394.633.661 1.377.802 2.233.142.858.213 1.786.213 2.784v8.201H238.7v-7.282c0-.429-.015-.873-.045-1.331a4.214 4.214 0 00-.273-1.271 2.203 2.203 0 00-.696-.949c-.313-.244-.762-.367-1.347-.367-.586 0-1.06.108-1.424.322a2.18 2.18 0 00-.833.856c-.192.357-.317.76-.378 1.209a10.44 10.44 0 00-.091 1.407v7.405h-4.543v-14.869zM277.554 150.834h-3.998v4.957c0 .408.02.78.061 1.117.04.336.131.628.273.873.141.244.358.432.651.566.292.132.681.199 1.166.199.243 0 .56-.026.954-.077.395-.051.692-.168.894-.352v3.823a6.78 6.78 0 01-1.575.369 14.68 14.68 0 01-1.605.091 8.651 8.651 0 01-2.12-.245 4.779 4.779 0 01-1.696-.78 3.639 3.639 0 01-1.136-1.391c-.272-.571-.408-1.264-.408-2.081v-7.069h-2.908v-3.671h2.908v-4.407h4.542v4.407h3.998v3.671zM285.367 154.598c0-1.182.212-2.252.636-3.213a7.405 7.405 0 011.742-2.462 7.665 7.665 0 012.604-1.576c1-.367 2.064-.551 3.196-.551 1.13 0 2.196.184 3.195.551a7.68 7.68 0 012.605 1.576 7.392 7.392 0 011.741 2.462c.424.961.636 2.031.636 3.213 0 1.184-.212 2.256-.636 3.213a7.376 7.376 0 01-1.741 2.463 7.68 7.68 0 01-2.605 1.576 9.192 9.192 0 01-3.195.551 9.202 9.202 0 01-3.196-.551 7.665 7.665 0 01-2.604-1.576 7.388 7.388 0 01-1.742-2.463c-.424-.958-.636-2.03-.636-3.213zm4.543 0c0 1.124.318 2.031.955 2.724.636.693 1.529 1.04 2.68 1.04 1.15 0 2.044-.346 2.68-1.04.636-.693.954-1.6.954-2.724 0-1.12-.318-2.029-.954-2.722-.636-.693-1.53-1.041-2.68-1.041-1.151 0-2.045.348-2.68 1.041-.637.692-.955 1.602-.955 2.722zM340.059 146a4.63 4.63 0 00-1.71-1.316c-.678-.305-1.458-.46-2.347-.46a5.861 5.861 0 00-4.437 1.974 6.773 6.773 0 00-1.302 2.218 8.04 8.04 0 00-.47 2.784c0 1.021.156 1.954.47 2.801.312.846.743 1.58 1.286 2.202a5.834 5.834 0 001.925 1.453c.736.348 1.528.52 2.376.52.969 0 1.829-.202 2.575-.611a5.134 5.134 0 001.847-1.714l3.937 2.968c-.907 1.285-2.058 2.233-3.451 2.846a10.596 10.596 0 01-4.3.918c-1.678 0-3.221-.266-4.635-.796-1.413-.53-2.635-1.29-3.664-2.28-1.029-.988-1.832-2.187-2.408-3.595-.575-1.407-.863-2.978-.863-4.712 0-1.732.288-3.304.863-4.712.576-1.407 1.379-2.606 2.408-3.594 1.029-.99 2.251-1.75 3.664-2.28 1.413-.53 2.957-.796 4.635-.796.606 0 1.235.057 1.892.168.655.111 1.302.29 1.938.535a8.602 8.602 0 011.832.979c.585.408 1.11.907 1.575 1.499L340.059 146zM356.808 138.902v10.28h.06c.101-.285.273-.571.515-.856.244-.286.535-.54.878-.765s.748-.408 1.213-.551a5.146 5.146 0 011.513-.214c1.151 0 2.081.178 2.787.535a4.05 4.05 0 011.65 1.484c.393.633.66 1.377.803 2.233.141.858.211 1.786.211 2.784v8.201h-4.542v-7.282c0-.429-.015-.873-.045-1.331a4.275 4.275 0 00-.273-1.271 2.227 2.227 0 00-.696-.949c-.314-.244-.763-.367-1.348-.367-.587 0-1.06.108-1.424.322a2.158 2.158 0 00-.832.856c-.192.357-.319.76-.379 1.209-.06.448-.091.918-.091 1.407v7.405h-4.542v-23.131h4.542zM384.943 160.167h-.062c-.504.796-1.177 1.367-2.014 1.714s-1.72.52-2.65.52a6.825 6.825 0 01-1.983-.29 4.99 4.99 0 01-1.681-.873 4.216 4.216 0 01-1.151-1.437c-.283-.571-.424-1.235-.424-1.99 0-.856.156-1.58.47-2.172.312-.592.736-1.081 1.271-1.468s1.146-.69 1.832-.904a13.359 13.359 0 012.136-.473 20.596 20.596 0 012.211-.184 72.017 72.017 0 012.045-.031c0-.815-.288-1.463-.865-1.943-.575-.479-1.256-.719-2.043-.719-.748 0-1.429.16-2.045.475a5.589 5.589 0 00-1.65 1.3l-2.424-2.51a8.316 8.316 0 012.969-1.789c1.13-.398 2.3-.597 3.513-.597 1.331 0 2.427.168 3.285.504.858.336 1.546.832 2.06 1.484.515.654.873 1.455 1.074 2.403.202.947.304 2.045.304 3.288v7.558h-4.179v-1.866zm-1.122-4.65c-.343 0-.772.014-1.286.045a6.467 6.467 0 00-1.484.261 3.267 3.267 0 00-1.211.643c-.334.285-.501.683-.501 1.192 0 .551.233.959.696 1.225.465.264.95.398 1.455.398.444 0 .873-.062 1.286-.184a3.902 3.902 0 001.106-.521c.322-.223.58-.509.772-.856s.288-.755.288-1.225v-.978h-1.121zM398.024 147.163h4.36v2.019h.06c.142-.285.343-.571.606-.856.262-.286.576-.54.94-.765s.777-.408 1.242-.551a5.146 5.146 0 011.513-.214c1.151 0 2.081.178 2.787.535a4.05 4.05 0 011.65 1.484c.393.633.66 1.377.803 2.233.141.858.211 1.786.211 2.784v8.201h-4.542v-7.282c0-.429-.015-.873-.045-1.331a4.275 4.275 0 00-.273-1.271 2.227 2.227 0 00-.696-.949c-.314-.244-.763-.367-1.348-.367-.587 0-1.06.108-1.424.322s-.642.499-.832.856c-.192.357-.319.76-.379 1.209-.06.448-.091.918-.091 1.407v7.405h-4.542v-14.869zM436.909 160.78c0 2.815-.702 4.95-2.105 6.41-1.403 1.458-3.539 2.187-6.405 2.187-1.312 0-2.606-.148-3.877-.444-1.273-.295-2.443-.871-3.513-1.727l2.513-3.794a9.547 9.547 0 002.227 1.407c.777.346 1.63.52 2.559.52 1.393 0 2.417-.341 3.074-1.024.655-.684.985-1.556.985-2.616v-1.439h-.062c-.525.715-1.177 1.22-1.952 1.515-.779.297-1.509.444-2.196.444-1.091 0-2.081-.189-2.969-.566s-1.65-.907-2.287-1.592a7.115 7.115 0 01-1.468-2.432c-.343-.937-.515-1.967-.515-3.089 0-.979.156-1.938.47-2.877a7.898 7.898 0 011.331-2.479 6.722 6.722 0 012.105-1.729c.829-.437 1.767-.657 2.817-.657.647 0 1.237.072 1.772.214.535.142 1.016.326 1.439.551s.787.473 1.089.75c.304.274.545.545.727.81h.06v-1.957h4.18v13.614zm-11.448-6.273a3.604 3.604 0 001.045 2.554c.335.338.717.607 1.151.811.434.204.914.305 1.439.305.504 0 .979-.101 1.424-.305a3.919 3.919 0 001.165-.811 3.574 3.574 0 001.045-2.554 3.64 3.64 0 00-.271-1.393 3.604 3.604 0 00-.774-1.163 3.953 3.953 0 00-1.165-.81 3.372 3.372 0 00-1.424-.307c-.525 0-1.005.103-1.439.307a4.015 4.015 0 00-1.151.81 3.604 3.604 0 00-1.045 2.556zM460.531 159.464a7.255 7.255 0 01-2.757 2.172 8.195 8.195 0 01-3.451.765 9.198 9.198 0 01-3.196-.551 7.665 7.665 0 01-2.604-1.576 7.372 7.372 0 01-1.741-2.463c-.425-.957-.636-2.029-.636-3.213 0-1.182.211-2.252.636-3.213a7.388 7.388 0 011.741-2.462 7.665 7.665 0 012.604-1.576c1-.367 2.064-.551 3.196-.551 1.05 0 2.004.184 2.861.551a5.946 5.946 0 012.18 1.576c.595.683 1.055 1.504 1.379 2.462.322.961.484 2.031.484 3.213v1.439h-10.539c.182.877.576 1.575 1.182 2.096.606.52 1.352.78 2.24.78.748 0 1.379-.17 1.894-.506a5.062 5.062 0 001.347-1.3l3.18 2.357zm-3.846-6.549c.019-.774-.233-1.437-.756-1.988-.527-.551-1.202-.827-2.029-.827-.506 0-.95.082-1.333.245a3.317 3.317 0 00-.985.628 2.745 2.745 0 00-.636.887 2.945 2.945 0 00-.257 1.055h5.996z" />
      </g>
    </svg>
  );
}