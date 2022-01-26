import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function App() {
  let preloginlist
  let location = useLocation();

  return (
    <>
      <div>
        <Link to="/">Login page</Link>
        <Link to="/Register">Register page</Link>
      </div>

      <div>
        <Link to="/welcome-home">home |</Link>
        <Link to="/welcome-home">exploerr |</Link>
        <Link to="/welcome-home">message |</Link>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/welcome-home" element={<Welcome />} />
      </Routes>
    </>
  );
}

function Login() {
  let navigate = useNavigate();
  const authantication = () => {
    navigate("/welcome-home");
  };

  return (
    <div>
      <h1>login page</h1>
      <div>
        <input type="text" placeholder="enter Username" />
      </div>
      <div>
        <input type="password" placeholder="enter password" />
      </div>
      <div>
        <input type="button" value="login" onClick={authantication} />
      </div>
    </div>
  );
}

function Register() {
  return (
    <div>
      <h1>Register page........</h1>
    </div>
  );
}

function Welcome() {
 
  let navigate = useNavigate();
  console.log("locaton");

  return (
    <div>
      <h1>welcome home</h1>
    </div>
  );
}
