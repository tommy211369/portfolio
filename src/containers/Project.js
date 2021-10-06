import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import list from "../assets/projects";

const Project = () => {
  const location = useLocation();
  const project = location.state.project;

  return (
    <div>
      <h2>
        Page du projet <span>{project.title}</span>
      </h2>
    </div>
  );
};

export default Project;
