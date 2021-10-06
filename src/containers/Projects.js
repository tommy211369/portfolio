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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>{item.title}</h2>
                <h3>{item.short}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      <hr></hr>
      <h1>Projets en cours ...</h1>
      <hr></hr>
      <h1>Prochainement</h1>
    </div>
  );
};

export default Projects;
