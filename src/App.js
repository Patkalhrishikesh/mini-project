import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <World />
    </div>
  );
}

//jsx :: react componant
// <hello/>

function Hello() {
  return <h1>hello </h1>;
}

function World() {
  return <h1>world </h1>;
}

export default App;
