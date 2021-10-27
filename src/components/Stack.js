import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import redux from "../assets/img/redux.png";
import jest from "../assets/img/jest.png";
import nodejs from "../assets/img/nodejs.png";
import express from "../assets/img/express1.png";
import mongodb from "../assets/img/mongodb.png";
import netlify from "../assets/img/netlify.png";
import heroku from "../assets/img/heroku.png";
import git from "../assets/img/git.png";

const Stack = () => {
  return (
    <div className="stack">
      <h3>Ma Stack</h3>
      <div>
        <div>
          <img src={html} alt="html" />
          <p>HTML</p>
        </div>

        <div>
          <img src={css} alt="css" />
          <p>CSS</p>
        </div>

        <div>
          <img src={js} alt="js" />
          <p>JavaScript</p>
        </div>

        <div>
          <img src={react} alt="react" />
          <p>React & React Native</p>
        </div>

        <div>
          <img src={redux} alt="redux" />
          <p>Redux</p>
        </div>

        <div>
          <img src={jest} alt="jest" />
          <p>Jest</p>
        </div>

        <div>
          <img src={nodejs} alt="nodejs" />
          <p>Node.js</p>
        </div>

        <div>
          <img src={express} alt="express" />
        </div>

        <div>
          <img src={mongodb} alt="mongodb" />
          <p>MongoDB</p>
        </div>

        <div>
          <img src={netlify} alt="netlify" />
        </div>

        <div>
          <img src={heroku} alt="heroku" />
        </div>

        <div>
          <img src={git} alt="git" />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
