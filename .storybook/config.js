import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import centered from "@storybook/addon-centered/react";

const req = require.context("../src", true, /\.story\.jsx?$/);
function loadStories() {
  addDecorator(withInfo);
  addDecorator(withKnobs);
  addDecorator(withA11y);
  addDecorator(centered);
  req.keys().forEach(req);
}

withOptions({
  name: "@guyl/react-components",
  url: "https://github.com/guylivni/react-components"
});

configure(loadStories, module);
