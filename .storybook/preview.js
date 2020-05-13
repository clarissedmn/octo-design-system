import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import "../src/reboot.css";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
