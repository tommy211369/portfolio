import { Link } from "react-router-dom";
import list from "../assets/projects";
import next from "../assets/next";
import currentProject from "../assets/currently";

function Projects() {
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
      <div className="current-project">
        <img src={currentProject.img} alt={currentProject.title} />
        <div>
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>
        </div>
      </div>

      <hr></hr>
      <h1>Prochainement</h1>
      <div>
        {next.map((item, index) => {
          return (
            <div key={index} className="next-project">
              <div>
                <img src={item.img} alt={item.title} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
