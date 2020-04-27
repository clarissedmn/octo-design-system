import React from "react";
import classNames from "classnames";
import "./index.scss";

export interface HeaderActionItemProps {
  /** Choose an icon */
  label: string;
  /** Set the handler to handle click event */
  onClick?: () => void;
  /** Redirect url of link button */
  href?: string;
  /** Define the color used to paint the `item` element	 */
  color?: "primary" | "white";
  className?: string;
  /** Disabled state of HeaderMenuItem */
  disabled?: boolean;
  current: boolean;
}

export default function HeaderActionItem(
  {label,
  className,
  color = "primary",
  disabled,
  href,
  onClick,
  current}: HeaderActionItemProps
) {
  return (
    <li>
      <a
        className={classNames(
          "header-action-item",
          className,
          color,
          { current },
          { disabled }
        )}
        rel="noopener noreferrer"
        onClick={onClick}
        href={href}
      >
        {label}
      </a>
    </li>
  );
}
