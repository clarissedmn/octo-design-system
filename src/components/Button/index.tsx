import React from "react";
import classNames from "classnames";
import "./index.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Set the kind of button: 
   * "primary-btn"| "outline-btn" | "link"
   */
  kind:
    | "primary"
    | "outline"
    | "link";
  /** Set the label of button */
  label: string;
  /** Set the icon component of button */
  icon?: React.ReactNode;
  /** Set the icon position of button */
  iconPosition?: "left" | "right";
  /** Set the handler to handle click event */
  onClick?: () => void;
  /** Redirect url of link button */
  href?: string;
  /** Disable state of button */
  disabled?: boolean;
}

export default function Button({
  kind = "primary",
  label,
  icon,
  iconPosition,
  className,
  onClick,
  href,
  disabled = false,
  ...htmlProps
}: ButtonProps) {
  return kind === "link" ? (
    <a
      className={classNames(className, kind, { disabled })}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onClick={onClick}
    >
      {iconPosition === "left" && icon}
      {label}
      {iconPosition === "right" && icon}
    </a>
  ) : (
    <button
      className={classNames("btn", className, `btn-${kind}`)}
      onClick={onClick}
      disabled={disabled}
      {...htmlProps}
    >
      {iconPosition === "left" && icon}
      {label}
      {iconPosition === "right" && icon}
    </button>
  );
}
