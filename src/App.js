import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  const [username, setUsername] = useState("rohit");
  const [password, setPassword] = useState("123");

  const handleUsername = (e) => {
    const newusername = e.target.value;
    setUsername(newusername);
  };

  const handlepassword = (e) => {
    const newpassword = e.target.value;
    setPassword(newpassword);
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUsername} />
      <input type="password" value={password} onChange={handlepassword} />

      <h1>
        {username} {password}
      </h1>
      <hr />

      <h1>{username}</h1>
      <hr />
    </div>
  );
}
