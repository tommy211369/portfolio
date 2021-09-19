import React from "react";
import { Link } from "react-router-dom";

// ajouter logos devant chaque liens

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="/">Mes projets</Link>
      <Link to="/technos">Mes technos</Link>
      <Link to="/about">À propos</Link>
      <Link to="/contact">Me contacter</Link>
    </nav>
  );
};

export default Sidebar;
