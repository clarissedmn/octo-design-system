import React from "react";
import classNames from "classnames";
import "./index.scss";

export interface HeaderActionItemProps {
  /** Set the label of the `item` element */
  label: string;
  /** Redirect url of `item` element */
  href?: string;
  /** Set the handler to handle click event */
  onClick?: () => void;
  /** Define the color used to paint the `item` element : "primary" | "white"	 */
  color?: "primary" | "white";
  className?: string;
  /** Disabled state of the `item` element */
  disabled?: boolean;
  /** Apply a current style on the `item` element */
  current: boolean;
}

export default function HeaderActionItem({
  label,
  className,
  color = "primary",
  disabled,
  href,
  onClick,
  current,
}: HeaderActionItemProps) {
  return (
    <li className="header-action-item-list">
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
