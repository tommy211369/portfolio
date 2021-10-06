import { Link } from "react-router-dom";
import list from "../assets/projects";

const Projects = () => {
  return (
    <div className="projects pages">
      {/* Affichage des différents projets */}
      <div className="projects-list">
        {list.map((item, index) => {
          return (
            <Link
              to={{
                pathname: `/project/${item.slug}`,
                state: { project: item },
              }}
              className="project-link"
              key={index}
            >
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
          );
        })}
      </div>
      <hr></hr>
      {/* Projet en cours */}
      <h1>Projet en cours ...</h1>
      <hr></hr>
      {/* Prochainement */}
      <h1>Prochainement</h1>
    </div>
  );
};

export default Projects;
