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
              className="project"
              key={index}
            >
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
