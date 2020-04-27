import React from "react";
import classNames from "classnames";
import "./index.scss";

interface BadgeProps {
  /** Set the status of the badge :  
   * "primary-badge" | "secondary-badge" | "sucess-badge" | "danger-badge" | "default-badge" | "info-badge" | "warning-badge" | "new-badge" */
  status:
    | "primary-badge"
    | "secondary-badge"
    | "sucess-badge"
    | "danger-badge"
    | "default-badge"
    | "info-badge"
    | "warning-badge"
    | "new-badge";
  /**  Set the label of the badge */
  label: string;
  className?: string;
}

export default function Badge({
  status = "primary-badge",
  label,
  className,
}: BadgeProps) {
  return (
    <span className={classNames("badge", className, status)}>{label}</span>
  );
}
