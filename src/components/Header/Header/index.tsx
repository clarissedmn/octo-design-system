import React from "react";
import classNames from "classnames";

import "./index.scss";


interface HeaderProps {
  children?: React.ReactNode;
   /** Define the color used to paint the `header` element	 */
   color?: "primary" | "white";
   className?: string;
   sticky?: boolean;
}

export default function Header({ children, color="primary", className, sticky }: HeaderProps) {
  return (
    <header className={classNames("header", className, color, sticky)} role="banner">
      {children}
    </header>
  );
}
