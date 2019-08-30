import React from "react";
import { render } from "react-dom";

import ThemeProvider from "./ThemeProvider";

import { Header } from "./Header";
import { Image } from "./Image";
import { FakeImg } from "./FakeImg";
function App() {
  return (
    <ThemeProvider>
      <div>
        <Header title={"Image Overlay Experiment"} />
        <div>
          <h2>Functional Prototype (work in progress</h2>
          <Image />
        </div>
        <div>
          <h2>Non-functional Prototype</h2>
          <FakeImg />
        </div>
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
