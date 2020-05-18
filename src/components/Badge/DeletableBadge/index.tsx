import classNames from "classnames";
import React from "react";
import Icon, { IconType } from "../../Icon";
import "./index.scss";

interface DeletableBadgeProps {
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
  deletable?: boolean;
  className?: string;
  /** Set the icon component of button */
  icon?: IconType;
  /** Set the handler to handle click event */
  onClick?: () => void;
  onClose?: () => void;
  hidden?: boolean;
}

export default function DeletableBadge({
  status = "primary",
  label,
  className,
  deletable = false,
  onClick,
  onClose,
  hidden,
}: DeletableBadgeProps) {
  if (hidden) {
    return null;
  }

  return (
    <span
      className={classNames("badge", className, `badge-${status}`)}
      onClick={onClick}
    >
      <span className="deletable-badge-label-container">{label}</span>
      {deletable && (
        <span
          className={classNames("deletable", `deletable-${status}`)}
          onClick={onClose}
        >
          <Icon width={14} icon="close" color="primary" />
        </span>
      )}
    </span>
  );
}
