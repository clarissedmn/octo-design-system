import React from "react";

import "./index.scss";

export interface HeaderLogoProps {
  children?: React.ReactNode;
}

export default function HeaderLogo({ children }: HeaderLogoProps) {
  return <div className="header-logo">{children}</div>;
}
