import React from "react";
import { render } from "react-dom";

import ThemeProvider from "./ThemeProvider";

import { Header } from "./Header";
import {ImageDrop}  from "./ImageDrop";
import { FakeImg } from "./FakeImg";
import {ImageWithOverlay} from './ImageWithOverlay';
function App() {
  return (
    <ThemeProvider>
      <div>
        <Header title={"Image Overlay Experiment"} />
        <div>
          <h2>Functional Prototype (work in progress</h2>
          <ImageDrop />
        </div>
        <div>
          <h2>Non-functional Prototype</h2>
          <FakeImg />
        </div>
        <div>
                  <h2>Image Overlay Component</h2>

            <ImageWithOverlay src="https://placekitten.com/500/200" alt="Cat" text={'Image With Text'} />
         </div>
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
