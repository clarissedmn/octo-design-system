import React from "react";
import "./index.scss";

interface FormGroupProps {
  legend?: string;
  children?: React.ReactNode;
}

export default function FormGroup({ legend, children }: FormGroupProps) {
  return (
    <fieldset className="form-group">
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}


