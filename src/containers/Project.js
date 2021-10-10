import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import list from "../assets/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@material-ui/icons/GitHub";

const Project = () => {
  const location = useLocation();
  const project = location.state.project;
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const newList = [...list];
    const projectToRemoved = list.find((item) => item.slug === project.slug);
    const projectIndex = list.indexOf(projectToRemoved);
    // console.log("Projet à retirer de la liste : ", projectToRemoved);
    newList.splice(projectIndex, 1);
    setProjectsList(newList);
    // console.log("Liste des projets à afficher : ", newList);
  }, [project.slug]);

  return (
    <div className="project pages">
      {/* Details du projet */}
      <div className="details">
        <img src={project.img} alt={`${project.slug}`} />
        <div className="title">
          <a href={project.site} target="blank">
            <h2>{project.title}</h2>
          </a>

          {project.short === "Web" ? (
            <div>
              <a href={project.github} target="blank">
                <GitHubIcon className="github-icon" />
              </a>
              <a href={project.site} target="blank">
                <FontAwesomeIcon
                  icon="sign-in-alt"
                  className="fontawesome-icon"
                />
                <span>Visiter le site</span>
              </a>
            </div>
          ) : (
            <div>
              <a href={project.github}>
                <GitHubIcon className="github-icon" />
              </a>
              <a href="#">Essayer l'application</a>
            </div>
          )}
        </div>
      </div>

      {/* Liste des autres projets*/}
      <div className="other-projects">
        {projectsList.map((project) => {
          return (
            <Link
              key={project.slug}
              to={{
                pathname: `/project/${project.slug}`,
                state: { project: project },
              }}
            >
              <img src={project.img} alt={project.slug} />
              <div>
                <h1>{project.title}</h1>
                <p>{project.type}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
