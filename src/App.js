import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";
import Home from "./view/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
