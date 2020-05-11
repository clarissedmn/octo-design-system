import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as React from "react";
import Button from "../Button";

test("Renders a link button with a label", async () => {
  const { getByText } = render(<Button kind="link" label="Hello World!" />);

  expect(getByText("Hello World!")).toBeTruthy();
});
