import React from "react";
import { Styled } from "theme-ui";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { PageTitle } from "./PageTitle";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const Header = ({ title }) => (
  <header
    sx={{
      display: "flex",
      flexWrap: "wrap"
    }}
  >
    <div
      sx={{
        flexGrow: 99999,
        flexBasis: 0,
        minWidth: 320
      }}
    >
      <PageTitle>{title}</PageTitle>
    </div>

    <div
      sx={{
        flexGrow: 1,
        flexBasis: "sidebar",
        padding: "24px"
      }}
    >
      <ColorModeSwitch />
    </div>
  </header>
);
