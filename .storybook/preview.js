import "../styles/globals.scss";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
