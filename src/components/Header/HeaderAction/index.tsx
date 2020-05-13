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
    <nav className="header-action" role="navigation" aria-label={ariaLabel}>
      <ul  className="header-action-list">{children}</ul>
    </nav>
  );
}
