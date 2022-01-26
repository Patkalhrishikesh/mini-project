import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  let counter = 1000;
  const like = () => {
    counter++;
    console.log(counter);
  };
  //uses of hooks use stase;

  let [counter1, setCounter1] = useState(100);

  const like1 = () => {
    const newCounter1 = counter1 + 1;
    setCounter1(newCounter1);
  };
  // EVERY MOVEMENT CHANGING STATE CHANGING STATE
  // RHS :: SPECIAL FUNCTION :: STARTWITH PREFIX USESTATE USEEFFECT
  // USEsTATE :: IT WORK WITH DOM INTERNALLY
  return (
    <div>
      <h1>
        Counter : {counter}
        <button onClick={like}>liKE</button>
      </h1>

      <h1>
        Counter1 : {counter1}
        <button onClick={like1}>liKE</button>
      </h1>
    </div>
  );
}
