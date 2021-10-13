import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Header = ({ setUsername, username }) => {
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
        <p>
          Bienvenue sur mon portfolio <span>{username}</span> !
        </p>
        <button onClick={handleLogOut}>Quitter</button>
      </div>
    </div>
  );
};

export default Header;
