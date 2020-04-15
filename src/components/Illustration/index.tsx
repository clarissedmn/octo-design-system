import * as React from 'react';
import classNames from "classnames";

import './index.scss';

const imgRatio = 1;
const defaultSize = {
  width: '500px',
  height: '500px',
};

interface IllustrationProps {
  /** The width of the `svg` element */
  width?: number;
  /** The height of the `svg` element */
  height?: number;
  /** The information that describe the `svg` element  */
  text?: string;
  /** Define the color used to paint the `svg` element	 */
  color?: "primaryill" | "secondaryill";
  className?: string;
}

export default function Signature({
  width,
  height,
  text,
  className,
  color = "primaryill",
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
      viewBox="9 -8 117 117"
      xmlSpace="preserve"
      {...restProps}
    >
      <text opacity="0">`${text}`</text>

      <g aria-hidden="true" id="prefix__Symbols">
        <g aria-hidden="true" id="prefix__Footer" transform="translate(-452 -33)">
          <g
            aria-hidden="true"
            transform="translate(452 33)"
            id="prefix__There-is-a-better-way_footer"
          >
            <path
              aria-hidden="true"
              id="prefix__Fill-1"
              className={classNames(className, color)}
              d="M53.2 51.1s9-2.2 10.9-7c1.6-4.2-3.9-7.1-13.3-7.2-25.8-.4-29.6 14.7-18.7 14.9 4 0 6.7-.8 8.6-2.3l-1-1.4c-1.2 1-3.8 1.7-5.2 1.7-6.6-.1 1-10.7 11.5-10.6 2.4 0 1.9 2.9-1.1 6.6-11 14-14.9 19.2-3.6 19.4 6.3.1 15.1-3.5 17.1-8.8 1.9-4.9-4.4-5.3-5.2-5.3m5.2-6.3c-1.2 3.2-6.8 5.6-10.2 5.8l1.2-1.5c2.9-3.7 4.8-8.2 3-10 4.8.1 7.3 2.4 6 5.7M41.8 63.1c-3.7 0-.4-4 5.3-11.2 2.2.2 6.5 1 5.1 4.6-1.3 3.5-7.3 6.7-10.4 6.6"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-3"
              className={classNames(className, color)}
              d="M85.3 39.5s3 1.7 3 2.9S74.7 57 74.7 61.6c4.3-.9 11.7-5.7 11.7-5.7l1.1 1s-8 7.2-12.5 7.2c-2.5 0-4-3.8-4-5.1.1-1.5 13.8-18.5 14.3-19.5"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-5"
              className={classNames(className, color)}
              d="M97.8 39.6s3 1.7 3 2.9-13.6 14.6-13.6 19.2c4.3-.9 11.7-5.8 11.7-5.8l1.1 1s-8 7.2-12.5 7.2c-2.5 0-4-3.8-4-5.1 0-1.3 13.7-18.3 14.3-19.4"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-7"
              className={classNames(className, color)}
              d="M68.7 46.6s2.3 3 4.6 3c1.6 0 11.9-2.5 33.4-3.1-.2-.8-1.5-1.8-3.1-1.8s-16.2-.3-34.9 1.9"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-9"
              className={classNames(className, color)}
              d="M73.7 55.5c-2 4.1-7.7 7.4-11.5 7.4-1 0-1.7-.2-2.1-.6-.4-.4-.3-1 .1-1.8.2-.3.4-.7.6-1 6.1-2 10.7-4.7 10.8-6.3 0-1.1-2-3.4-3.5-3.4-2.3 0-5 1.3-7.4 3.5-1.4 1.3-2.5 2.8-3.2 4.2l-.8 3.2c0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.4 4.9 1.4h.1c8.9.1 13.1-5.3 13.1-6.9-.1-1.3-2.3-2.3-2.3-2.3m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2-2.5 4.6-4.8 6-4.8"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-11"
              className={classNames(className, color)}
              d="M111.3 55.1c-2 4.1-7.7 7.4-11.5 7.4-1 0-1.7-.2-2.1-.6-.4-.4-.3-1 .1-1.8.2-.3.4-.7.6-1 6.1-2 10.7-4.7 10.8-6.3 0-1.1-2-3.4-3.5-3.4-2.3 0-5 1.3-7.4 3.5-1.4 1.3-2.5 2.8-3.2 4.2l-.8 3.1c0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.4 4.9 1.4h.1c8.9.1 13.1-5.3 13.1-6.9 0-1.2-2.3-2.2-2.3-2.2m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2.1-2.5 4.7-4.8 6-4.8"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-13"
              className={classNames(className, color)}
              d="M109.5 13.4c-2 4.1-7.7 7.5-11.5 7.5-1 0-1.7-.2-2.1-.6s-.3-1 .1-1.8c.2-.3.4-.7.6-1 6.1-2.1 10.7-4.8 10.8-6.4 0-1.1-2-3.3-3.5-3.3-2.3 0-5 1.3-7.4 3.6l-.1.1c.3-1.3.1-3-2.1-3-3.2 0-6.7 4.4-10 8.2 1.5-3 4-5.9 4-6.8 0-1.6-2.2-2-3.3-2.3-.2.9-2.6 5-4.6 8.2-2.6 3.2-7.1 5.5-10.2 5.5-1 0-1.7-.2-2.1-.6s-.3-1 .1-1.8c.2-.3.4-.7.6-1 6.1-2.1 10.7-4.8 10.8-6.4 0-1.1-2-3.3-3.5-3.3-2.3 0-5 1.3-7.4 3.6-1.4 1.3-2.5 2.8-3.2 4.2-2.9 2.1-6.1 4.1-7.6 4.1-2.8 0 6-9.1 5.9-9.8s-2.2-1.9-4-2.7c-3.7 2.2-8.6 5-12.5 9 1.8-3.1 12.2-16.1 12.2-19 0-.9-1.1-1.3-2.4-1.9 2.8 0 5.3 0 7.4.1 1 .1.7-.3-.2-1.1C62-7.6 52.6-7.8 49.1-7.8c-10.8-.1-24.8.8-33.2 3.1 2.1 2.6 4.2 4.6 6.5 4C27.1-2 34.3-3 41.7-3.8 36.2.9 26 15.6 26.8 19.7c.4 2.2 3.2 3.5 4.9 4.3 0-4.8 12-23.7 14.6-26.3.4-.4-.2-1.1-1.3-1.8 3.6-.3 7.2-.5 10.5-.6C53-.8 41 19.2 41 19.2c.4 1 2.4 2.7 3.5 2.7 1.3 0 9.2-9.1 12.8-10.5-2.4 3.1-4.8 6-4.5 7.7s3.2 3.3 4.9 3.3c1.5 0 4.3-1.6 7-3.5 0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.3 4.9 1.3h.1c3.4 0 6.2-.8 8.2-1.9.9.6 1.9.9 2.5.9 1.1 0 6.3-7.8 9.8-9.7l4 .4c-.9 1-1.5 2-2 3 0 0-.8 1.5-.8 3.2 0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.3 4.9 1.3h.1c8.9 0 13.1-5.5 13.1-7-.1-1.3-2.4-2.2-2.4-2.2m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2.1-2.4 4.7-4.8 6-4.8m-27.7.3c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2-2.5 4.6-4.8 6-4.8"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-15"
              className={classNames(className, color)}
              d="M107.2 61.5c.9 1.2 2.8 2 3.7 2 1.1 0 6.3-7.7 9.8-9.6l4.5.5c.8-.8 1.6-4.1-1.5-4.2-3.2 0-6.7 4.4-10 8.1 1.5-2.9 4-5.9 4-6.8 0-1.6-2.2-2-3.3-2.3-.5 1.6-7.2 12.3-7.2 12.3"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-17"
              className={classNames(className, color)}
              d="M79.9 37.4c3.3-1.2 2-5.9.4-8.3-.9-1.3-3.6-1.7-3.6-1.7-.8 2.7-8.6 11.2-11 11.2s3.6-5.6 3.2-7.9c-.1-.8-1.4-1.6-2.5-2.1 1.9-.6 4.9-1.8 5-3.4.4-3.4-5.1-2.9-5.1-2.9s.5 2.9-.9 5.9c-.2-.1-.6-.2-.6-.2 0 2.2-4.4 7.6-3.9 10.4.2 1.3 3 2.8 4.6 2.8.9 0 2.1-.6 3.5-1.5.7.7 2.5 2.1 5.8 2.1 3.9 0 11.8-4.6 14.6-2l.2-.5c-.6-2.5-3.4-3.9-9.7-1.9m-10.4 1.8c3.4-2.3 7.4-6.2 8.2-7.7 1.1 2.5 2.2 8.4-8.2 7.7"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-19"
              className={classNames(className, color)}
              d="M26.7 82.6c-9.9-3-1.5-16.4 9.7-16.4 9.3 0-4.4 17.6-4.4 23.2 0 .7 2.9 2.7 4.7 2.7 5.4 0 23.8-15.7 23.8-19.1 0-2-3.7-2.4-3.7-2.4-.3 2.4-10.2 15-20.8 19.3 1.7-4.1 9-16.5 9-20.5 0-2.3-1.8-5.2-8.2-5.2-15.2 0-20.1 8.7-20.1 13.3.1 7.6 10 5.1 10 5.1"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-21"
              className={classNames(className, color)}
              d="M55.7 68c0 10.4-8.1 15.3-8.1 20.9 0 .7 2.3 2.8 4.1 2.8 7.6 0 28.2-18.2 28.2-22.3 0-2-5.7-3.6-5.7-3.6 0 7.4-12.4 20.3-22.3 23.4 1.7-4.1 9.7-15 9.7-19 .1-1.9-4-2.2-5.9-2.2"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-23"
              className={classNames(className, color)}
              d="M27.7 53.4c2 3.3-2.9 8.5-6.3 8.1-2.1-.2 3.8-10.1 6.2-12.2 0 0-.9-1.1-2.3-1.2-.8-.1-1.6.3-2.4 1-.6-.3-1.5-.7-2.8-.8-8.9-1-15 14.2-8 14.9 2.4.3 4.3-1.1 5.6-2.5 0 1.6.8 2.4 2.2 2.5 5.8.6 10.1-4.2 10.5-6.5.4-3.1-2.7-3.3-2.7-3.3m-8.4 1.3s-.1 0 0 0c-1.5 3-3.7 6.6-5.5 6.4-2.5-.3 2.4-12.5 7.8-11 .1 0 .1 0 .2.1-1 1.3-1.8 2.9-2.5 4.5"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-25"
              className={classNames(className, color)}
              d="M86 85.7c-1.3 2.6-4.9 5-8.4 4.6-2.1-.2 4.9-9.7 7.6-11.7 0 0-.8-1-2.1-1.2-.8-.1-1.7.3-2.5 1-.6-.3-1.4-.7-2.7-.8-8.9-.9-16.7 13.6-9.7 14.4 2.4.2 4.4-1 5.9-2.4-.1 1.6.6 2.3 1.9 2.4 5.7.6 12.8-4 13.4-6.3.8-3-3.4 0-3.4 0m-9.7-1.9c-1.8 2.9-4.5 6.3-6.2 6.2-2.5-.3 3.8-12 9-10.5.1 0 .1 0 .2.1-1.1 1.1-2.1 2.7-3 4.2"
            />
            <g aria-hidden="true" id="prefix__Group-29" transform="translate(30 82.888)">
              <path
                aria-hidden="true"
                id="prefix__Fill-27"
                className={classNames(className, color)}
                d="M79.3-6.6l-.1-.2c-1.3-.7-2.6-1-3.2-1-.4 0-.8.1-1.1.4-.3.3-6.7 6.8-10 9.6-3.8 3.2-7 4.4-8.8 4.4 0-.1 8.3-7.5 8.1-10.6-.4-3.3-4.7-2.7-4.7-2.7 2.3 4-6.7 10.3-6.5 12.8.2.7 2.6 2.6 3.8 2.6 1.9 0 4.9-1.7 8.9-5.1 1.8-1.5 3.7-3.2 5.6-5.1-2 3.3-9.1 12.5-9.1 12.5 0 .1-.1.1-.1.2-.6 1.1-.4 1.9.1 2.4-11.6 3.6-29.8 8.6-42 7.2-6.8-.7-8.1-6.4-8.1-6.4-2.3 2.7-6.9 10.4 2.7 11.4 18.2 1.8 41.9-8.5 53-11.7.6 1.2 1.7 2.1 3.7 2.2 4.5.4 7.9-4.8 3.1-5.2-2-.2-6 1.1-7.4.9-2.1 0 11.4-17.8 12.1-18.6M73.4 13c1.6.1.4 1.8-.9 1.7-.9-.1-1.4-.4-2-1.1.8-.4 2-.7 2.9-.6"
              />
            </g>
            <path
              aria-hidden="true"
              id="prefix__Fill-30"
              className={classNames(className, color)}
              d="M53.8 32.4c5.3.6 10.3.9 11.5-2.1-4.9 1.5-17.6-2.9-23.1-2.9s-6.3 3.8-3.9 6.2c1.3-3.1 7.2-2.3 13.2-1.5l2.3.3z"
            />
            <path
              aria-hidden="true"
              id="prefix__Fill-32"
              className={classNames(className, color)}
              d="M91.5 32.4c-5.3.6-10.3.9-11.5-2.1 4.9 1.5 17.6-2.9 23.1-2.9s6.3 3.8 3.9 6.2c-1.3-3.1-7.2-2.3-13.2-1.5l-2.3.3z"
            />
          </g>
        </g>
      </g>
    </svg>
  ) : (
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={svgWidth}
      height={svgHeight}
      aria-hidden="true"
      id="prefix__Calque_1"
      x={0}
      y={0}
      viewBox="9 -8 117 117"
      xmlSpace="preserve"
      {...restProps}
    >
      <g id="prefix__Symbols">
        <g id="prefix__Footer" transform="translate(-452 -33)">
          <g transform="translate(452 33)" id="prefix__There-is-a-better-way_footer">
            <path
              id="prefix__Fill-1"
              className={classNames(className, color)}
              d="M53.2 51.1s9-2.2 10.9-7c1.6-4.2-3.9-7.1-13.3-7.2-25.8-.4-29.6 14.7-18.7 14.9 4 0 6.7-.8 8.6-2.3l-1-1.4c-1.2 1-3.8 1.7-5.2 1.7-6.6-.1 1-10.7 11.5-10.6 2.4 0 1.9 2.9-1.1 6.6-11 14-14.9 19.2-3.6 19.4 6.3.1 15.1-3.5 17.1-8.8 1.9-4.9-4.4-5.3-5.2-5.3m5.2-6.3c-1.2 3.2-6.8 5.6-10.2 5.8l1.2-1.5c2.9-3.7 4.8-8.2 3-10 4.8.1 7.3 2.4 6 5.7M41.8 63.1c-3.7 0-.4-4 5.3-11.2 2.2.2 6.5 1 5.1 4.6-1.3 3.5-7.3 6.7-10.4 6.6"
            />
            <path
              id="prefix__Fill-3"
              className={classNames(className, color)}
              d="M85.3 39.5s3 1.7 3 2.9S74.7 57 74.7 61.6c4.3-.9 11.7-5.7 11.7-5.7l1.1 1s-8 7.2-12.5 7.2c-2.5 0-4-3.8-4-5.1.1-1.5 13.8-18.5 14.3-19.5"
            />
            <path
              id="prefix__Fill-5"
              className={classNames(className, color)}
              d="M97.8 39.6s3 1.7 3 2.9-13.6 14.6-13.6 19.2c4.3-.9 11.7-5.8 11.7-5.8l1.1 1s-8 7.2-12.5 7.2c-2.5 0-4-3.8-4-5.1 0-1.3 13.7-18.3 14.3-19.4"
            />
            <path
              id="prefix__Fill-7"
              className={classNames(className, color)}
              d="M68.7 46.6s2.3 3 4.6 3c1.6 0 11.9-2.5 33.4-3.1-.2-.8-1.5-1.8-3.1-1.8s-16.2-.3-34.9 1.9"
            />
            <path
              id="prefix__Fill-9"
              className={classNames(className, color)}
              d="M73.7 55.5c-2 4.1-7.7 7.4-11.5 7.4-1 0-1.7-.2-2.1-.6-.4-.4-.3-1 .1-1.8.2-.3.4-.7.6-1 6.1-2 10.7-4.7 10.8-6.3 0-1.1-2-3.4-3.5-3.4-2.3 0-5 1.3-7.4 3.5-1.4 1.3-2.5 2.8-3.2 4.2l-.8 3.2c0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.4 4.9 1.4h.1c8.9.1 13.1-5.3 13.1-6.9-.1-1.3-2.3-2.3-2.3-2.3m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2-2.5 4.6-4.8 6-4.8"
            />
            <path
              id="prefix__Fill-11"
              className={classNames(className, color)}
              d="M111.3 55.1c-2 4.1-7.7 7.4-11.5 7.4-1 0-1.7-.2-2.1-.6-.4-.4-.3-1 .1-1.8.2-.3.4-.7.6-1 6.1-2 10.7-4.7 10.8-6.3 0-1.1-2-3.4-3.5-3.4-2.3 0-5 1.3-7.4 3.5-1.4 1.3-2.5 2.8-3.2 4.2l-.8 3.1c0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.4 4.9 1.4h.1c8.9.1 13.1-5.3 13.1-6.9 0-1.2-2.3-2.2-2.3-2.2m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2.1-2.5 4.7-4.8 6-4.8"
            />
            <path
              id="prefix__Fill-13"
              className={classNames(className, color)}
              d="M109.5 13.4c-2 4.1-7.7 7.5-11.5 7.5-1 0-1.7-.2-2.1-.6s-.3-1 .1-1.8c.2-.3.4-.7.6-1 6.1-2.1 10.7-4.8 10.8-6.4 0-1.1-2-3.3-3.5-3.3-2.3 0-5 1.3-7.4 3.6l-.1.1c.3-1.3.1-3-2.1-3-3.2 0-6.7 4.4-10 8.2 1.5-3 4-5.9 4-6.8 0-1.6-2.2-2-3.3-2.3-.2.9-2.6 5-4.6 8.2-2.6 3.2-7.1 5.5-10.2 5.5-1 0-1.7-.2-2.1-.6s-.3-1 .1-1.8c.2-.3.4-.7.6-1 6.1-2.1 10.7-4.8 10.8-6.4 0-1.1-2-3.3-3.5-3.3-2.3 0-5 1.3-7.4 3.6-1.4 1.3-2.5 2.8-3.2 4.2-2.9 2.1-6.1 4.1-7.6 4.1-2.8 0 6-9.1 5.9-9.8s-2.2-1.9-4-2.7c-3.7 2.2-8.6 5-12.5 9 1.8-3.1 12.2-16.1 12.2-19 0-.9-1.1-1.3-2.4-1.9 2.8 0 5.3 0 7.4.1 1 .1.7-.3-.2-1.1C62-7.6 52.6-7.8 49.1-7.8c-10.8-.1-24.8.8-33.2 3.1 2.1 2.6 4.2 4.6 6.5 4C27.1-2 34.3-3 41.7-3.8 36.2.9 26 15.6 26.8 19.7c.4 2.2 3.2 3.5 4.9 4.3 0-4.8 12-23.7 14.6-26.3.4-.4-.2-1.1-1.3-1.8 3.6-.3 7.2-.5 10.5-.6C53-.8 41 19.2 41 19.2c.4 1 2.4 2.7 3.5 2.7 1.3 0 9.2-9.1 12.8-10.5-2.4 3.1-4.8 6-4.5 7.7s3.2 3.3 4.9 3.3c1.5 0 4.3-1.6 7-3.5 0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.3 4.9 1.3h.1c3.4 0 6.2-.8 8.2-1.9.9.6 1.9.9 2.5.9 1.1 0 6.3-7.8 9.8-9.7l4 .4c-.9 1-1.5 2-2 3 0 0-.8 1.5-.8 3.2 0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.3 4.9 1.3h.1c8.9 0 13.1-5.5 13.1-7-.1-1.3-2.4-2.2-2.4-2.2m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2.1-2.4 4.7-4.8 6-4.8m-27.7.3c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2-2.5 4.6-4.8 6-4.8"
            />
            <path
              id="prefix__Fill-15"
              className={classNames(className, color)}
              d="M107.2 61.5c.9 1.2 2.8 2 3.7 2 1.1 0 6.3-7.7 9.8-9.6l4.5.5c.8-.8 1.6-4.1-1.5-4.2-3.2 0-6.7 4.4-10 8.1 1.5-2.9 4-5.9 4-6.8 0-1.6-2.2-2-3.3-2.3-.5 1.6-7.2 12.3-7.2 12.3"
            />
            <path
              id="prefix__Fill-17"
              className={classNames(className, color)}
              d="M79.9 37.4c3.3-1.2 2-5.9.4-8.3-.9-1.3-3.6-1.7-3.6-1.7-.8 2.7-8.6 11.2-11 11.2s3.6-5.6 3.2-7.9c-.1-.8-1.4-1.6-2.5-2.1 1.9-.6 4.9-1.8 5-3.4.4-3.4-5.1-2.9-5.1-2.9s.5 2.9-.9 5.9c-.2-.1-.6-.2-.6-.2 0 2.2-4.4 7.6-3.9 10.4.2 1.3 3 2.8 4.6 2.8.9 0 2.1-.6 3.5-1.5.7.7 2.5 2.1 5.8 2.1 3.9 0 11.8-4.6 14.6-2l.2-.5c-.6-2.5-3.4-3.9-9.7-1.9m-10.4 1.8c3.4-2.3 7.4-6.2 8.2-7.7 1.1 2.5 2.2 8.4-8.2 7.7"
            />
            <path
              id="prefix__Fill-19"
              className={classNames(className, color)}
              d="M26.7 82.6c-9.9-3-1.5-16.4 9.7-16.4 9.3 0-4.4 17.6-4.4 23.2 0 .7 2.9 2.7 4.7 2.7 5.4 0 23.8-15.7 23.8-19.1 0-2-3.7-2.4-3.7-2.4-.3 2.4-10.2 15-20.8 19.3 1.7-4.1 9-16.5 9-20.5 0-2.3-1.8-5.2-8.2-5.2-15.2 0-20.1 8.7-20.1 13.3.1 7.6 10 5.1 10 5.1"
            />
            <path
              id="prefix__Fill-21"
              className={classNames(className, color)}
              d="M55.7 68c0 10.4-8.1 15.3-8.1 20.9 0 .7 2.3 2.8 4.1 2.8 7.6 0 28.2-18.2 28.2-22.3 0-2-5.7-3.6-5.7-3.6 0 7.4-12.4 20.3-22.3 23.4 1.7-4.1 9.7-15 9.7-19 .1-1.9-4-2.2-5.9-2.2"
            />
            <path
              id="prefix__Fill-23"
              className={classNames(className, color)}
              d="M27.7 53.4c2 3.3-2.9 8.5-6.3 8.1-2.1-.2 3.8-10.1 6.2-12.2 0 0-.9-1.1-2.3-1.2-.8-.1-1.6.3-2.4 1-.6-.3-1.5-.7-2.8-.8-8.9-1-15 14.2-8 14.9 2.4.3 4.3-1.1 5.6-2.5 0 1.6.8 2.4 2.2 2.5 5.8.6 10.1-4.2 10.5-6.5.4-3.1-2.7-3.3-2.7-3.3m-8.4 1.3s-.1 0 0 0c-1.5 3-3.7 6.6-5.5 6.4-2.5-.3 2.4-12.5 7.8-11 .1 0 .1 0 .2.1-1 1.3-1.8 2.9-2.5 4.5"
            />
            <path
              id="prefix__Fill-25"
              className={classNames(className, color)}
              d="M86 85.7c-1.3 2.6-4.9 5-8.4 4.6-2.1-.2 4.9-9.7 7.6-11.7 0 0-.8-1-2.1-1.2-.8-.1-1.7.3-2.5 1-.6-.3-1.4-.7-2.7-.8-8.9-.9-16.7 13.6-9.7 14.4 2.4.2 4.4-1 5.9-2.4-.1 1.6.6 2.3 1.9 2.4 5.7.6 12.8-4 13.4-6.3.8-3-3.4 0-3.4 0m-9.7-1.9c-1.8 2.9-4.5 6.3-6.2 6.2-2.5-.3 3.8-12 9-10.5.1 0 .1 0 .2.1-1.1 1.1-2.1 2.7-3 4.2"
            />
            <g id="prefix__Group-29" transform="translate(30 82.888)">
              <path
                id="prefix__Fill-27"
                className={classNames(className, color)}
                d="M79.3-6.6l-.1-.2c-1.3-.7-2.6-1-3.2-1-.4 0-.8.1-1.1.4-.3.3-6.7 6.8-10 9.6-3.8 3.2-7 4.4-8.8 4.4 0-.1 8.3-7.5 8.1-10.6-.4-3.3-4.7-2.7-4.7-2.7 2.3 4-6.7 10.3-6.5 12.8.2.7 2.6 2.6 3.8 2.6 1.9 0 4.9-1.7 8.9-5.1 1.8-1.5 3.7-3.2 5.6-5.1-2 3.3-9.1 12.5-9.1 12.5 0 .1-.1.1-.1.2-.6 1.1-.4 1.9.1 2.4-11.6 3.6-29.8 8.6-42 7.2-6.8-.7-8.1-6.4-8.1-6.4-2.3 2.7-6.9 10.4 2.7 11.4 18.2 1.8 41.9-8.5 53-11.7.6 1.2 1.7 2.1 3.7 2.2 4.5.4 7.9-4.8 3.1-5.2-2-.2-6 1.1-7.4.9-2.1 0 11.4-17.8 12.1-18.6M73.4 13c1.6.1.4 1.8-.9 1.7-.9-.1-1.4-.4-2-1.1.8-.4 2-.7 2.9-.6"
              />
            </g>
            <path
              id="prefix__Fill-30"
              className={classNames(className, color)}
              d="M53.8 32.4c5.3.6 10.3.9 11.5-2.1-4.9 1.5-17.6-2.9-23.1-2.9s-6.3 3.8-3.9 6.2c1.3-3.1 7.2-2.3 13.2-1.5l2.3.3z"
            />
            <path
              id="prefix__Fill-32"
              className={classNames(className, color)}
              d="M91.5 32.4c-5.3.6-10.3.9-11.5-2.1 4.9 1.5 17.6-2.9 23.1-2.9s6.3 3.8 3.9 6.2c-1.3-3.1-7.2-2.3-13.2-1.5l-2.3.3z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
