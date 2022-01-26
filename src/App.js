import { useState } from "react";

export default function App() {
  let [active] = useState(true);
  return (
    <div>
      <h1>Conditional exicution</h1>

      {active && <h3>Good morning</h3>}

      {active && <h3>Good morning</h3>}

      {active && <h3>Good morning</h3>}
    </div>
  );
}
