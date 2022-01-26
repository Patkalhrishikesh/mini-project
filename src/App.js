import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Link to="/">page1 |</Link>
        <Link to="/page2">page2 |</Link>
        <Routes>
          <Route path="/" element={<Page1 />}></Route>

          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </Router>
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
