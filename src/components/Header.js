import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MenuBars from "./MenuBars";

const Header = ({ setUsername }) => {
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
        <span>Développeur Fullstack Web & Mobile</span>
      </div>

      <div>
        <button onClick={handleLogOut}>Quitter</button>
      </div>

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
};

export default Header;
