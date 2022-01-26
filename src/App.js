import { useState } from "react";

export default function App() {
  return (
    <div>
      <Page1 />
      <Page2 />
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
