import React from "react";
import classNames from "classnames";
import "./index.scss";

interface BadgeProps {
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
  label: string;
  className?: string;
}

export default function Badge({
  status = "primary",
  label,
  className,
}: BadgeProps) {
  return (
    <span className={classNames("badge", className, `badge-${status}`)}>{label}</span>
  );
}
