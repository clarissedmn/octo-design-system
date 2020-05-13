import * as React from "react";
import FormGroup from "../../src/components/Form/FormGroup";
import TextInput from "../../src/components/Form/TextInput";
import TextArea from "../../src/components/Form/TextArea";

export default {
  title: "TextInput",
  parameters: {
    info: { inline: true },
  },
};

export const Form = () => (
  <>
  <FormGroup legend="Category 1">
    <TextInput
      labelText="Select a category"
      labelFor="ici"
      helperText="Optional helper text here."
      placeholder="Search by keywords"
      inputId="input"
      inputType="text"
    />
    <TextInput
      labelText="Select a category"
      labelFor="ici"
      placeholder="Search by keywords"
      inputId="input"
      inputType="password"
    />
    <TextInput
      labelText="Select a category"
      labelFor="ici"
      placeholder="Search by keywords"
      inputId="input"
      inputType="text"
      disabled
    />
    <TextInput
      labelText="Select a category"
      labelFor="ici"
      placeholder="Search by keywords"
      inputId="input"
      inputType="password"
    />
    </FormGroup>
    <FormGroup legend="Category 2">
    <TextArea
      labelText="Select a category"
      labelFor="ici"
      placeholder="Search by keywords"
      inputId="input"
      rows={5}
      cols={55}
      helperText="Optional helper text here."
    ></TextArea>
    <TextArea
      labelText="Select a category"
      labelFor="ici"
      placeholder="Search by keywords"
      inputId="input"
      rows={5}
      cols={55}
      helperText="Optional helper text here."
      disabled
    ></TextArea>
  </FormGroup>
  </>
);
