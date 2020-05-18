import classNames from "classnames";
import React from "react";
import Icon, { IconType } from "../../Icon";
import "./index.scss";

interface IconBadgeProps {
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
  /** Set the icon component of button */
  icon?: IconType;
  /** Set the handler to handle click event */
  onClick?: () => void;
}

export default function IconBadge({
  status = "primary",
  label,
  className,
  icon,
  onClick,
}: IconBadgeProps) {
  return (
    <span
      className={classNames("badge", className, `badge-${status}`)}
      onClick={onClick}
    >
      <span className="icon-badge-label-container">
        {icon && <Icon className="icon" icon={icon} width={16} />}
        {label && <span className="icon-badge-label">{label}</span>}
      </span>
    </span>
  );
}
