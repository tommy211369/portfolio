import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import list from "../assets/projects";

const Project = () => {
  const location = useLocation();
  const project = location.state.project;
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    const newList = [...list];
    const removedItem = list.find((item) => item.slug === project.slug);
    const itemIndex = list.indexOf(removedItem);
    // console.log("Projet à retirer de la liste : ", removedItem);
    newList.splice(itemIndex, 1);
    setNewList(newList);
    // console.log("Nouvelle liste de projets à afficher : ", newList);
  }, [project.slug]);

  return (
    <div className="project pages">
      <div className="details">
        <img src={project.img} alt={`${project.slug}`} />
        <div className="title">
          <a href={project.site} target="blank">
            <h2>{project.title}</h2>
          </a>
          <a href={project.site} target="blank">
            Lien
          </a>
        </div>
      </div>
      <div className="other-projects">
        {newList.map((project) => {
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
