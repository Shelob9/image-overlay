import React from "react";
import { useColorMode } from "theme-ui";
import { Styled } from "theme-ui";

/** @jsx jsx */
import { jsx } from "theme-ui";

export const ColorModeSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      sx={{
        backgroundColor: "primary",
        padding: "16px",
        color: "background"
      }}
      onClick={e => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      }}
    >
      Toggle {colorMode === "light" ? "Dark Mode" : " Light Mode"}
    </button>
  );
};
