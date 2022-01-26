import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Hello id="1" name="rahul" />
      <Hello />
      <World />
    </div>
  );
}

//jsx :: react componant
// <hello/>

// Hello(1);
//
function Hello(p1) {
  console.log(p1);
  return <h1>hello ! {p1.name} </h1>;
}

function World() {
  return <h1>world </h1>;
}

export default App;
