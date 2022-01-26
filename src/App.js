import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />}></Route>

          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
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
