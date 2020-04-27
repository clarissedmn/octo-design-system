import React from "react";
import classNames from "classnames";
import "./index.scss";

export interface HeaderMenuItemProps {
  /** Choose an icon */
  label: string;
  /** Redirect url of link button */
  href?: string;
   /** Set the handler to handle click event */
   onClick?: () => void;
  /** Define the color used to paint the `item` element	 */
  color?: "primary" | "white";
  className?: string;
  /** Disabled state of HeaderMenuItem */
  disabled?: boolean;
  current: boolean;
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
    <li>
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
