import classNames from "classnames";
import React from "react";
import "./index.scss";

interface BasicBadgeProps {
  /** Set the status of the badge :
   * "primary-badge" | "secondary-badge" | "sucess-badge" | "danger-badge" | "default-badge" | "info-badge" | "warning-badge" | "new-badge" */
  status?:
    | "primary"
    | "secondary"
    | "sucess"
    | "danger"
    | "default"
    | "info"
    | "warning"
    | "new";
  /**  Set the label of the badge */
  label?: string;
  /** Allow to delete the badge */
  className?: string;
  /** Set the handler to handle click event */
  onClick?: () => void;
}

export default function BasicBadge({
  status = "primary",
  label,
  className,

  onClick,
}: BasicBadgeProps) {
  return (
    <span
      className={classNames("badge", className, `badge-${status}`)}
      onClick={onClick}
    >
      <span className="label-container">{label}</span>
    </span>
  );
}
