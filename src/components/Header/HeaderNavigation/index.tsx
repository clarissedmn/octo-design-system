import React from "react";

import "./index.scss";

export interface HeaderNavigationProps {
  ariaLabel: string;
  children?: React.ReactNode;
}

export default function HeaderNavigation({
  ariaLabel,
  children,
}: HeaderNavigationProps) {
  return (
    <nav className="header-menu-nav" role="navigation" aria-label={ariaLabel}>
      <ul>{children}</ul>
    </nav>
  );
}
