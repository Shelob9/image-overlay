// basic usage
import React from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import theme from "./theme";
export default props => (
  <ThemeProvider theme={theme}>
    <ColorMode />
    {props.children}
  </ThemeProvider>
);
