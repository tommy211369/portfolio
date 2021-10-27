import { Link } from "react-router-dom";
import tommy from "../assets/img/tommy.jpg";
import Stack from "../components/Stack";
import Contact from "../components/Contact";

const About = ({ username }) => {
  return (
    <div className="about pages">
      <h1>
        Bonjour <span>{username}</span> !
      </h1>

      <p className="first-p">
        Je m'appelle <br></br>
        <span>Tommy Thongrasamy</span>.<br></br>
        Je suis développeur fullstack Web & Mobile.
      </p>

      <div className="details">
        <div>
          <p>
            En pleine pandémie du Covid-19, je réfléchie à la suite de ma
            carrière professionnelle. Après quelques conseils de mon entourage,
            je me lance en <span>octobre 2020</span> dans le monde du
            développement web.{" "}
          </p>
          <p>
            Je commence mon apprentissage avec l'<span>HTML</span> et{" "}
            <span>CSS</span> sur OpenClassrooms. Je me découvre alors petit à
            petit une nouvelle passion et je sais que je suis au bon endroit.
          </p>
          <p>
            Je poursuis ensuite mon aventure avec <span>JavaScript</span> sur la
            plateforme Udemy et FreeCodeCamp. Je sais qu'à ce moment là, je suis
            passé aux choses sérieuses !
          </p>
          <p>
            J'étais vraiment fier de moi (et je le suis encore ^^) d'avoir
            appris toutes ces choses de mon côté, mais j'ai ressenti le besoin
            d'avoir une direction, des conseils sur les bons réflexes à avoir
            pour éviter de m'éparpiller et bien sûr aussi pour bien assimiler
            les différents concepts. <br></br>
            J'ai alors décidé en <span>juin 2021</span> de m'inscrire à un{" "}
            <span>bootcamp de 10 semaines, Le Reacteur</span>. Une formation où
            l'on se concentre sur la <span>MERN stack</span> : exactement ce que
            je cherchais !
          </p>
          <p>
            Depuis ma formation, je prends du plaisir à apprendre de nouvelles
            choses, des nouvelles technos et langages pour les utiliser ensuite
            dans mes différents projets.
          </p>
          <p>
            Mon aventure dans le code ne fait que commencer. <br></br>
            J'ai cependant un seul regret : ne pas l'avoir commencée plus tôt !
          </p>
        </div>
        <img src={tommy} alt="tommy" />
      </div>

      <div className="link">
        <Link to="/projects">Voir mes Projets</Link>
      </div>

      <div className="stack-and-contact">
        <Stack />
        <Contact />
      </div>
    </div>
  );
};

export default About;
