import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import typescript from "../assets/img/typescript.png";
import react from "../assets/img/react.png";
import redux from "../assets/img/redux.png";
import next from "../assets/img/next.png";
import graphql from "../assets/img/graphql.png";
import gatsby from "../assets/img/gatsby.png";
import jest from "../assets/img/jest.png";
import nodejs from "../assets/img/nodejs.png";
import express from "../assets/img/express1.png";
import mongodb from "../assets/img/mongodb.png";
import netlify from "../assets/img/netlify.png";
import heroku from "../assets/img/heroku.png";
import git from "../assets/img/git.png";
import Logo from "./Logo";

const Stack = () => {
  return (
    <div className="stack">
      <h3>Ma Stack</h3>
      <div>
        <Logo techno={html} stack="HTML" />
        <Logo techno={css} stack="CSS" />
        <Logo techno={js} stack="JavaScript" />
        <Logo techno={typescript} stack="TypeScript" />
        <Logo techno={react} stack="React & React Native" />
        <Logo techno={redux} stack="Redux" />
        <Logo techno={next} stack="" />
        <Logo techno={gatsby} stack="Gatsby" />
        <Logo techno={graphql} stack="GraphQL" />
        <Logo techno={jest} stack="Jest" />
        <Logo techno={nodejs} stack="Node.js" />
        <Logo techno={express} stack="" />
        <Logo techno={mongodb} stack="MongoDB" />
        <Logo techno={netlify} stack="" />
        <Logo techno={heroku} stack="" />
        <Logo techno={git} stack="Git" />
      </div>
    </div>
  );
};

export default Stack;
