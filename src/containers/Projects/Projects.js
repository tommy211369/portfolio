import { Link } from "react-router-dom";
import list from "../../assets/projects";
import Fade from "react-reveal/Fade";
import routes from "../../routes";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects pages">
      {/* Affichage des différents projets */}

      <div className="projects-list">
        {list.map((item, index) => {
          return (
            <Link
              to={{
                pathname: routes.PROJECTS + `/${item.slug}`,
                state: { project: item },
              }}
              className="project-link"
              key={index}
            >
              <Fade bottom>
                <img src={item.img} alt={item.title} />
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h2>{item.title}</h2>
                </div>
              </Fade>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
