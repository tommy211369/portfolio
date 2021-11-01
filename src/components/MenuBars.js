import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Menubars({ handleLogOut, setShowMenuBars }) {
  return (
    <div className="menu-bars">
      <FontAwesomeIcon
        icon="times-circle"
        className="times-circle-icon"
        onClick={() => {
          setShowMenuBars(false);
        }}
      />
      <Link
        to="/"
        onClick={() => {
          setShowMenuBars(false);
        }}
      >
        <FontAwesomeIcon icon="lightbulb" className="fontawesome-icon" />
        <p>À propos</p>
      </Link>
      <Link
        to="/projects"
        onClick={() => {
          setShowMenuBars(false);
        }}
      >
        <FontAwesomeIcon icon="tasks" className="fontawesome-icon" />
        <p>Mes projets</p>
      </Link>

      <button onClick={handleLogOut}>Quitter</button>
    </div>
  );
}

export default Menubars;
