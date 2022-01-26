import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Page1 />
        <Page2 />
      </BrowserRouter>
    </div>
  );
}

function Page1() {
  return (
    <div>
      <h1>page1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        quas similique quis, sequi ab quos suscipit! Culpa magnam esse eum?
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>page2</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        quas similique quis, sequi ab quos suscipit! Culpa magnam esse eum?
      </p>
    </div>
  );
}
