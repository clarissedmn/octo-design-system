import React from "react";
import classNames from "classnames";
import "./index.scss";

export interface HeaderMenuItemProps {
  /** Set the label of the `item` element */
  label: string;
  /** Redirect url of `item` element*/
  href?: string;
   /** Set the handler to handle click event */
   onClick?: () => void;
  /** Define the color used to paint the `item` element : "primary" | "white"	 */
  color?: "primary" | "white";
  className?: string;
  /** Disabled state of the `item` element */
  disabled?: boolean;
  /** Apply a current style on the `item` element */
  current?: boolean;
}

export default function HeaderMenuItem({
  label,
  className,
  color = "primary",
  disabled,
  current,
  href,
  onClick, 
  ...restProps
}: HeaderMenuItemProps) {
  return (
    <li className="header-menu-item-list">
      <a
        className={classNames("header-menu-item", className, color, {
          disabled,
          current,
        })}
        href={href}
        rel="noopener noreferrer"
        onClick={onClick}
        {...restProps}
      >
        {label}
      </a>
    </li>
  );
}
