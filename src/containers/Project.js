import { useLocation, useHistory } from "react-router-dom";

const Project = () => {
  const location = useLocation();
  const history = useHistory();
  const project = location.state.project;

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="project pages">
      <button onClick={goBack}>Retour vers mes projets</button>
      <div>
        <h2>{project.title}</h2>
      </div>
    </div>
  );
};

export default Project;
