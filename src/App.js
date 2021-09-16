import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Login from "./containers/Login";

function App() {
  const [username, setUsername] = useState(Cookies.get("username") || null);

  const setUserCookie = (name) => {
    setUsername(name);
    Cookies.set("username", name);
  };
  return (
    <div>
      {username ? (
        <Home username={username} setUsername={setUsername} />
      ) : (
        <Login setUserCookie={setUserCookie} />
      )}
    </div>
  );
}

export default App;
