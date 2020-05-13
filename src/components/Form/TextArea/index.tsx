import classNames from "classnames";
import React from "react";
import Paragraph from "../../Typography/Paragraph";
import "./index.scss";

interface TextAreaProps {
  /** Set the label */
  labelText: string;
  /** Disable state of input */
  disabled?: boolean;
  labelFor: string;
  helperText?: string;
  placeholder?: string;
  inputId: string;
  rows: number;
  cols: number;
  className?: string;
}

export default function TextArea({
  labelText,
  labelFor,
  helperText,
  placeholder,
  inputId,
  rows,
  cols,
  disabled,
  className,
}: TextAreaProps) {
  return (
    <div className={classNames(className, "text-area")}>
      <label htmlFor={labelFor} className="label">
        {labelText}
        {helperText && (
          <Paragraph className="helperText" level="M">
            {helperText}
          </Paragraph>
        )}
      </label>
      <textarea
        className="text-area-input"
        rows={rows}
        cols={cols}
        id={inputId}
        name="nom"
        placeholder={placeholder}
        disabled={disabled}
        
      />
    </div>
  );
}
