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
        <span>Développeur Fullstack Javascript</span>
      </div>

      <div>
        <p>
          Bienvenue <span>{username}</span> !
        </p>
        <button onClick={handleLogOut}>Se déconnecter</button>
      </div>
    </div>
  );
};

export default Header;
