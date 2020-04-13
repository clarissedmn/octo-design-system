import React from "react";
import "./index.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Set the status of button */
    kind: "primary" | "secondary" | "tertiary" | "quaternary" | "primary_outline" | "secondary_outline" | "tertiary_outline" | "quaternary_outline" | "link";
    /** Choose an icon */
    label: string;
    /** Set the icon component of button */
    icon?: React.ReactNode;
    /** Set the icon position of button */
    iconPosition?: "left" | "right";
    /** Set the handler to handle click event */
    onClick?: () => void;
    /** Redirect url of link button */
    href?: string;
    /** Disabled state of button */
    disabled?: boolean;
}
export default function Button({ kind, label, icon, iconPosition, className, onClick, href, disabled, ...htmlProps }: ButtonProps): JSX.Element;
export {};
