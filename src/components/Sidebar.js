import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ajouter logos devant chaque liens

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="/">
        <FontAwesomeIcon icon="lightbulb" className="fontawesome-icon" />
        <span>À propos</span>
      </Link>
      <Link to="/projects">
        <FontAwesomeIcon icon="tasks" className="fontawesome-icon" />
        <span>Mes projets</span>
      </Link>
    </nav>
  );
};

export default Sidebar;
