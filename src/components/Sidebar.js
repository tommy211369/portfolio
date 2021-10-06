import React from "react";
import { Link } from "react-router-dom";

// ajouter logos devant chaque liens

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="/">Mes projets</Link>
      <Link to="/stack">Ma stack technique</Link>
      <Link to="/about">À propos</Link>
      {/* <Link to="/contact">Me contacter</Link> */}
    </nav>
  );
};

export default Sidebar;
