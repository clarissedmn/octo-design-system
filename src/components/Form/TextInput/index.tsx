import React from "react";
import Paragraph from "../../Typography/Paragraph";
import classNames from "classnames";
import "./index.scss";

interface TextInputProps {
  /** Set the label */
  labelText: string;
  /** Disable state of input */
  disabled?: boolean;
  labelFor: string;
  helperText?: string;
  placeholder?: string;
  inputId: string;
  inputType: "text" | "password";
  className?: string;
  invalid?: boolean;
  errorMessage?: string;
}

export default function TextInput({
  labelText,
  labelFor,
  helperText,
  placeholder,
  inputId,
  inputType,
  disabled,
  invalid,
  errorMessage,
  className,
}: TextInputProps) {
  return (
    <div className={classNames(className, "text-input")}>
      <label htmlFor={labelFor} className="label">
        {labelText}
        {helperText && (
          <Paragraph className="helperText" level="M">
            {helperText}
          </Paragraph>
        )}
      </label>
      <input
        className="input"
        type={inputType}
        id={inputId}
        name="nom"
        placeholder={placeholder}
        disabled={disabled}
      />
      {invalid && errorMessage && <p>ERROR</p>}
    </div>
  );
}
