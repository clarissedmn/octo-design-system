import React from "react";
import classNames from "classnames";

import "./index.scss";


interface HeaderProps {
  children?: React.ReactNode;
   /** Define the color used to paint the `header` element	 */
   color?: "primary" | "white";
   className?: string;
}

export default function Header({ children, color="primary", className }: HeaderProps) {
  return (
    <header className={classNames("header", className, color)} role="banner">
      {children}
    </header>
  );
}
