import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import list from "../assets/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCode2Icon from "@mui/icons-material/QrCode2";
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
                  className="go-to-app-icon"
                />
                <span>Visiter le site</span>
              </a>
            </div>
          ) : (
            <div>
              <a href={project.github} target="blank">
                <GitHubIcon className="github-icon" />
              </a>
              <a href={project.site} target="blank">
                <QrCode2Icon className="go-to-app-icon" />
                <span>Essayer l'application</span>
              </a>
            </div>
          )}
        </div>

        {/* Technologies utilisées 
        <div className="technos">
      
        </div> */}

        {/* Description du projet */}
        <div className="game-description">
          <p>{project.description}</p>
          <p>{project.features}</p>
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
