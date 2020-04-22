import React from "react";
import classNames from "classnames";
import "./index.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Set the status of button */
  kind:
    | "primary"
    | "outline"
    | "link";
  /** Choose an icon */
  label: string;
  /** Set the icon component of button */
  icon?: React.ReactNode;
  /** Set the icon position of button */
  iconPosition?: "left" | "right";
  /** Set the handler to handle click event */
  onClick?: () => void;
  /** Redirect url of link button */
  href?: string;
  /** Disabled state of button */
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
    >
      {iconPosition === "left" && icon}
      {label}
      {iconPosition === "right" && icon}
    </a>
  ) : (
    <button
      className={classNames(className, kind)}
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
