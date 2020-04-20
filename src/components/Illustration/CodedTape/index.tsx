import * as React from "react";

import "../../index.scss";

const imgRatio = 1;
const defaultSize = {
  width: "500px",
  height: "500px",
};

interface IllustrationProps {
  /** The width of the `svg` element */
  width?: number;
  /** The height of the `svg` element */
  height?: number;
  /** The information that describe the `svg` element  */
  text?: string;
  /** Define the color used to paint the `svg` element	 */
  color?: "primary" | "secondary" | "white";
}

export default function CodedTape({
  width,
  height,
  text,

  color = "primary",
  ...restProps
}: IllustrationProps) {
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

  return text ? (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={svgWidth}
      height={svgHeight}
      id="prefix__Calque_2"
      x={0}
      y={0}
      viewBox="0 0 654.67 20"
      xmlSpace="preserve"
      {...restProps}
    >
      <text opacity="0">`${text}`</text>
      <style>
        {
          ".prefix__st0{fill-rule:evenodd;clip-rule:evenodd}.prefix__st0,.prefix__st1{fill:#0e2356}"
        }
      </style>
      <path
        className={color}
        d="M17.73 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
      />
      <path
        className={color}
        d="M19.47 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.76-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.37-3.05-3.04-3.05z"
      />
      <path
        className={color}
        d="M17.73 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM54.24 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM54.23 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45z"
      />
      <path
        className={color}
        d="M54.24 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05c0-1.68-1.36-3.05-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54 1.771 1.771 0 010 3.54z"
      />
      <path
        className={color}
        d="M42.81 10.28V7.93h-1.44v2.35H39v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM8.59 11.01L2.5 7.89v6.09z"
      />
      <path
        className={color}
        d="M90.98 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
      />
      <path
        className={color}
        d="M92.72 11c0 .97-.79 1.77-1.76 1.77S89.2 11.98 89.2 11c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.76-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.37-3.05-3.04-3.05z"
      />
      <path
        className={color}
        d="M90.98 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM127.49 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM127.48 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45z"
      />
      <path
        className={color}
        d="M127.49 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.36-3.05-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54 1.771 1.771 0 010 3.54z"
      />
      <path
        className={color}
        d="M116.06 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM81.84 11.01l-6.09-3.12v6.09z"
      />
      <g>
        <path
          className={color}
          d="M164.23 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M165.97 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.76-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.37-3.05-3.04-3.05z"
        />
        <path
          className={color}
          d="M164.23 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM200.74 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM200.73 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45z"
        />
        <path
          className={color}
          d="M200.74 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.36-3.05-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54 1.771 1.771 0 010 3.54z"
        />
        <path
          className={color}
          d="M189.31 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM155.09 11.01L149 7.89v6.09z"
        />
        <g>
          <path
            className={color}
            d="M237.48 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
          />
          <path
            className={color}
            d="M239.22 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.76-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.37-3.05-3.04-3.05z"
          />
          <path
            className={color}
            d="M237.48 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35z"
          />
        </g>
        <g>
          <path
            className={color}
            d="M273.99 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM273.98 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45z"
          />
          <g>
            <path
              className={color}
              d="M273.99 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.36-3.05-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54 1.771 1.771 0 010 3.54z"
            />
          </g>
        </g>
        <path
          className={color}
          d="M262.56 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM228.34 11.01l-6.09-3.12v6.09z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M310.79 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M312.53 11c0 .97-.79 1.77-1.76 1.77S309 11.97 309 11s.79-1.77 1.76-1.77 1.77.8 1.77 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
        />
        <path
          className={color}
          d="M310.79 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM347.3 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM347.29 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
        />
        <path
          className={color}
          d="M347.29 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
        />
        <path
          className={color}
          d="M335.86 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM301.64 11.01l-6.08-3.12v6.09z"
        />
        <g>
          <path
            className={color}
            d="M384.04 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
          />
          <path
            className={color}
            d="M385.78 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
          />
          <path
            className={color}
            d="M384.04 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35z"
          />
        </g>
        <g>
          <path
            className={color}
            d="M420.55 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM420.54 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
          />
          <g>
            <path
              className={color}
              d="M420.54 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
            />
          </g>
        </g>
        <path
          className={color}
          d="M409.11 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM374.89 11.01l-6.08-3.12v6.09z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M457.29 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M459.03 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
        />
        <path
          className={color}
          d="M457.29 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM493.8 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM493.79 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
        />
        <path
          className={color}
          d="M493.79 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
        />
        <path
          className={color}
          d="M482.36 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM448.14 11.01l-6.08-3.12v6.09z"
        />
        <g>
          <path
            className={color}
            d="M530.54 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
          />
          <path
            className={color}
            d="M532.28 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
          />
          <path
            className={color}
            d="M530.54 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35z"
          />
        </g>
        <g>
          <path
            className={color}
            d="M567.05 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM567.04 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
          />
          <g>
            <path
              className={color}
              d="M567.04 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
            />
          </g>
        </g>
        <path
          className={color}
          d="M555.61 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM521.39 11.01l-6.08-3.12v6.09z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M603.75 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M605.49 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77.96 0 1.76.8 1.76 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
        />
        <path
          className={color}
          d="M603.75 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM628.82 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM594.6 11.01l-6.08-3.12v6.09z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M30.17 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM64.61 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M103.67 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM138.11 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M176.92 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM211.36 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M250.09 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM284.53 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M323.42 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM357.86 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M396.75 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM431.2 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M470 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM504.45 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M543.17 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM577.61 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M616.42 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M603.77 11.55c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M640.27 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45zM640.27 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
        />
        <g>
          <path
            className={color}
            d="M640.27 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
          />
        </g>
        <g>
          <path
            className={color}
            d="M650.65 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
          />
        </g>
      </g>
    </svg>
  ) : (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={svgWidth}
      height={svgHeight}
      id="prefix__Calque_2"
      x={0}
      y={0}
      viewBox="0 0 654.67 20"
      xmlSpace="preserve"
      {...restProps}
    >
      <style>
        {
          ".prefix__st0{fill-rule:evenodd;clip-rule:evenodd}.prefix__st0,.prefix__st1{fill:#0e2356}"
        }
      </style>
      <path
        className={color}
        d="M17.73 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
      />
      <path
        className={color}
        d="M19.47 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.76-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.37-3.05-3.04-3.05z"
      />
      <path
        className={color}
        d="M17.73 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM54.24 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM54.23 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45z"
      />
      <path
        className={color}
        d="M54.24 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05c0-1.68-1.36-3.05-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54 1.771 1.771 0 010 3.54z"
      />
      <path
        className={color}
        d="M42.81 10.28V7.93h-1.44v2.35H39v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM8.59 11.01L2.5 7.89v6.09z"
      />
      <path
        className={color}
        d="M90.98 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
      />
      <path
        className={color}
        d="M92.72 11c0 .97-.79 1.77-1.76 1.77S89.2 11.98 89.2 11c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.76-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.37-3.05-3.04-3.05z"
      />
      <path
        className={color}
        d="M90.98 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM127.49 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM127.48 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45z"
      />
      <path
        className={color}
        d="M127.49 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.36-3.05-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54 1.771 1.771 0 010 3.54z"
      />
      <path
        className={color}
        d="M116.06 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM81.84 11.01l-6.09-3.12v6.09z"
      />
      <g>
        <path
          className={color}
          d="M164.23 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M165.97 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.76-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.37-3.05-3.04-3.05z"
        />
        <path
          className={color}
          d="M164.23 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM200.74 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM200.73 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45z"
        />
        <path
          className={color}
          d="M200.74 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.36-3.05-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54 1.771 1.771 0 010 3.54z"
        />
        <path
          className={color}
          d="M189.31 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM155.09 11.01L149 7.89v6.09z"
        />
        <g>
          <path
            className={color}
            d="M237.48 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
          />
          <path
            className={color}
            d="M239.22 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.76-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.37-3.05-3.04-3.05z"
          />
          <path
            className={color}
            d="M237.48 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35z"
          />
        </g>
        <g>
          <path
            className={color}
            d="M273.99 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM273.98 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45z"
          />
          <g>
            <path
              className={color}
              d="M273.99 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05 0-1.68-1.36-3.05-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54 1.771 1.771 0 010 3.54z"
            />
          </g>
        </g>
        <path
          className={color}
          d="M262.56 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM228.34 11.01l-6.09-3.12v6.09z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M310.79 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M312.53 11c0 .97-.79 1.77-1.76 1.77S309 11.97 309 11s.79-1.77 1.76-1.77 1.77.8 1.77 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
        />
        <path
          className={color}
          d="M310.79 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM347.3 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM347.29 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
        />
        <path
          className={color}
          d="M347.29 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
        />
        <path
          className={color}
          d="M335.86 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM301.64 11.01l-6.08-3.12v6.09z"
        />
        <g>
          <path
            className={color}
            d="M384.04 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
          />
          <path
            className={color}
            d="M385.78 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
          />
          <path
            className={color}
            d="M384.04 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35z"
          />
        </g>
        <g>
          <path
            className={color}
            d="M420.55 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM420.54 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
          />
          <g>
            <path
              className={color}
              d="M420.54 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
            />
          </g>
        </g>
        <path
          className={color}
          d="M409.11 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM374.89 11.01l-6.08-3.12v6.09z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M457.29 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M459.03 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
        />
        <path
          className={color}
          d="M457.29 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM493.8 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM493.79 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
        />
        <path
          className={color}
          d="M493.79 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
        />
        <path
          className={color}
          d="M482.36 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM448.14 11.01l-6.08-3.12v6.09z"
        />
        <g>
          <path
            className={color}
            d="M530.54 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
          />
          <path
            className={color}
            d="M532.28 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77s1.76.8 1.76 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
          />
          <path
            className={color}
            d="M530.54 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35z"
          />
        </g>
        <g>
          <path
            className={color}
            d="M567.05 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45zM567.04 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
          />
          <g>
            <path
              className={color}
              d="M567.04 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05 1.68 0 3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
            />
          </g>
        </g>
        <path
          className={color}
          d="M555.61 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM521.39 11.01l-6.08-3.12v6.09z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M603.75 10.29c-.39 0-.71.32-.71.72 0 .4.32.72.71.72.39 0 .71-.32.71-.72 0-.4-.32-.72-.71-.72zm0 1.26c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M605.49 11c0 .97-.79 1.77-1.76 1.77s-1.76-.79-1.76-1.77c0-.97.79-1.77 1.76-1.77.96 0 1.76.8 1.76 1.77zm-1.77-3.05c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05z"
        />
        <path
          className={color}
          d="M603.75 10.65c.2 0 .35.16.35.35 0 .2-.16.35-.35.35-.2 0-.35-.16-.35-.35 0-.19.16-.35.35-.35zM628.82 10.28V7.93h-1.44v2.35h-2.37v1.42h2.37v2.35h1.44V11.7h2.37v-1.42h-2.37zM594.6 11.01l-6.08-3.12v6.09z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M30.17 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM64.61 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M103.67 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM138.11 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M176.92 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM211.36 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M250.09 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM284.53 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M323.42 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM357.86 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M396.75 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM431.2 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M470 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM504.45 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M543.17 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57zM577.61 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M616.42 12.47a1.73 1.73 0 010-2.98V7.92a3.192 3.192 0 00-2.31 3.06c0 1.45.98 2.68 2.31 3.06v-1.57z"
        />
      </g>
      <g>
        <path
          className={color}
          d="M603.77 11.55c-.3 0-.55-.25-.55-.55 0-.3.24-.55.55-.55.3 0 .55.25.55.55-.01.31-.25.55-.55.55z"
        />
        <path
          className={color}
          d="M640.27 6.88c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.21-.45.45-.45zM640.27 9.41c.25 0 .45.2.45.45s-.2.45-.45.45-.45-.2-.45-.45.2-.45.45-.45z"
        />
        <g>
          <path
            className={color}
            d="M640.27 7.95c-1.68 0-3.04 1.37-3.04 3.05 0 1.68 1.37 3.05 3.04 3.05s3.04-1.37 3.04-3.05a3.04 3.04 0 00-3.04-3.05zm0 4.82a1.771 1.771 0 010-3.54c.97 0 1.76.79 1.76 1.77.01.97-.78 1.77-1.76 1.77z"
          />
        </g>
        <g>
          <path
            className={color}
            d="M650.65 12.47a1.73 1.73 0 000-2.98V7.92c1.33.38 2.31 1.61 2.31 3.06s-.98 2.68-2.31 3.06v-1.57z"
          />
        </g>
      </g>
    </svg>
  );
}
