import React from "react";

import "./index.scss";

export interface HeaderActionProps {
  /** Define a aria-label	 */
  ariaLabel: string;
  children?: React.ReactNode;
}

export default function HeaderAction({
  children,
  ariaLabel,
}: HeaderActionProps) {
  return (
    <div className="header-action" aria-label={ariaLabel}>
      {children}
    </div>
  );
}
