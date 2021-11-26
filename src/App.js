// Librairies
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTasks,
  faCode,
  faUserCircle,
  faLightbulb,
  faSignInAlt,
  faExclamationTriangle,
  faBars,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cookies from "js-cookie";

// Components
import Home from "./containers/Home";
import Login from "./containers/Login";

library.add(
  faTasks,
  faCode,
  faUserCircle,
  faLightbulb,
  faSignInAlt,
  faExclamationTriangle,
  faBars,
  faTimesCircle
);

function App() {
  const [username, setUsername] = useState(Cookies.get("username") || null);

  const setUserCookie = (name) => {
    setUsername(name);
    Cookies.set("username", name);
  };
  return (
    <div className="app">
      {username ? (
        <Home username={username} setUsername={setUsername} />
      ) : (
        <Login setUserCookie={setUserCookie} />
      )}
    </div>
  );
}

export default App;
