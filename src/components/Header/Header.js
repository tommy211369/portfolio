import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Header.css";

import MenuBars from "./MenuBars/MenuBars";
import Sidebar from "../Sidebar/Sidebar";

function Header({ setUsername }) {
  const [showMenuBars, setShowMenuBars] = useState(false);
  const history = useHistory();

  const handleLogOut = () => {
    history.push("/");
    setUsername("");
    Cookies.remove("username");
  };

  return (
    <div className="header">
      <div>
        <span>Tommy Thongrasamy</span> &nbsp;
        <span>Développeur Front-end React</span>
      </div>
      <Sidebar />
      {/*<div>
        <button onClick={handleLogOut}>Quitter</button>
  </div> */}
      {!showMenuBars && (
        <FontAwesomeIcon
          icon="bars"
          className="menu-bars-icon"
          onClick={() => {
            setShowMenuBars(true);
          }}
        />
      )}
      {showMenuBars && (
        <MenuBars
          handleLogOut={handleLogOut}
          setShowMenuBars={setShowMenuBars}
        />
      )}
    </div>
  );
}

export default Header;
