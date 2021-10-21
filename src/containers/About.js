const About = ({ username }) => {
  return (
    <div className="about pages">
      <h1>
        Bonjour <span>{username}</span> et bienvenue !
      </h1>

      <p>
        Je m'appelle <br></br>
        <span>Tommy Thongrasamy</span>.<br></br>
        Je suis développeur fullstack Web & Mobile depuis peu.
      </p>

      <p>
        En pleine pandémie du Covid-19, je réfléchie à la suite de ma carrière
        professionnelle. Après quelques conseils de mon entourage, je me lance
        en octobre 2020 dans le monde du développement web.{" "}
      </p>
      <p>
        Je commence mon apprentissage avec l'HTML et CSS sur OpenClassrooms. Je
        me découvre alors petit à petit une nouvelle passion et je sais que je
        suis au bon endroit.
      </p>
      <p>
        Je poursuis ensuite mon aventure avec JavaScript sur la plateforme Udemy
        et FreeCodeCamp. Je sais qu'à ce moment là, je suis passé aux choses
        sérieuses !
      </p>
      <p>
        J'étais vraiment fier de moi (et je le suis encore ^^) d'avoir appris
        toutes ces choses de mon côté, mais j'ai ressenti le besoin d'avoir une
        direction, des conseils sur les bons réflexes à avoir pour éviter de
        m'éparpiller et bien sûr aussi pour bien assimiler les différents
        concepts. <br></br>
        J'ai alors décidé en juin 2021 de m'inscrire à un bootcamp de 10
        semaines, Le Reacteur. Une formation où l'on se concentre sur la MERN
        stack : exactement ce que je cherchais !
      </p>
      <p>
        Depuis ma formation, je prends du plaisir à apprendre de nouvelles
        choses, des nouvelles technos et langages pour les utiliser ensuite dans
        mes différents projets.
      </p>
      <p>
        Mon aventure dans le code ne fait que commencer. <br></br>
        J'ai cependant un seul regret : ne pas l'avoir commencée plus tôt !
      </p>
    </div>
  );
};

export default About;
