import directscore from "./img/directscore.jpg";
import gamepad from "./img/gamepad.jpg";
import vinted from "./img/vinted.jpg";
import marvel from "./img/marvel.jpg";
import deliveroo from "./img/deliveroo.jpg";
import mvdb from "./img/mvdb.jpg";
import minions from "./img/minions.jpg";
import emoji from "./img/emoji.jpg";
import todolist from "./img/todolist.jpg";
import airbnb from "./img/airbnb.jpg";

const list = [
  {
    title: "DirectScore",
    slug: "directscore",
    description:
      "Site web en cours de développement qui permet de suivre les scores des matchs de foot en direct",
    features:
      "Le visiteur peut suivre les résultats des matchs de foot des 5 grands championnats européens ainsi que de la Ligue des Champions.",
    img: directscore,
    type: "Application web",
    short: "Web",
    site: "https://directscore.netlify.app/",
    github: "https://github.com/tommy211369/direct-score",
    technos: "React,Hooks,Express,Netlify,Render,API",
    packages: "react-router-dom, axios, material-ui, fontawesome, dotenv, cors",
  },

  {
    title: "Gamepad",
    slug: "gamepad",
    description:
      "Il s'agit d'une application web qui recense des milliers de jeux vidéo en utilisant l'API de rawg.io ",
    features:
      "L' utilisateur a la possibilité de créer un compte, rechercher un jeu, ajouter des jeux vidéo en favoris, ajouter un commentaire sur un jeu, liker un commentaire, filtrer les jeux.",
    img: gamepad,
    type: "Application web",
    short: "Web",
    site: "https://gamepad-by-tommy.netlify.app/",
    github: "https://github.com/tommy211369/gamepad-front",
    technos: "React,Hooks,Express,Netlify,Heroku,MongoDB,API",
    packages:
      "react-router-dom, axios, js-cookie, material-ui, fontawesome, dotenv, cors, crypto-js, uid2",
  },
  {
    title: "Réplique de Vinted",
    slug: "replique-de-vinted",
    description: "Il s'agit d'une réplique simplifiée du site web de Vinted.",
    features:
      "L'utilisateur a la possibilité de créer un compte, publier un article, ajouter un article au panier, acheter un article, rechercher un article, filtrer les articles par prix, trier par prix croissant ou décroissant,...",
    img: vinted,
    type: "Application web",
    short: "Web",
    site: "https://react-vinted-by-tommy.netlify.app/",
    github: "https://github.com/tommy211369/vinted-front",
    technos: "React,Hooks,Express,Netlify,Heroku,MongoDB,API, Stripe",
    packages:
      "react-router-dom, axios, js-cookie, material-ui, fontawesome, dotenv, cors, crypto-js, uid2",
  },
  {
    title: "Marvel",
    slug: "marvel",
    description:
      "Il s'agit d'une application web qui recense tous les personnages de Marvel Comics en utilisant l'API de Marvel Developer Portal. ",
    features:
      "L'utilisateur a la possibilité de créer un compte, de rechercher un personnage/comics, d'ajouter des personnages/comics en favoris",
    img: marvel,
    type: "Application web",
    short: "Web",
    site: "https://react-marvel-by-tommy.netlify.app/",
    github: "https://github.com/tommy211369/reacteur-marvel-front",
    technos: "React,Hooks,Express,Netlify,Heroku,MongoDB,API",
    packages:
      "react-router-dom, axios, js-cookie, material-ui, fontawesome, dotenv, cors, crypto-js, uid2",
  },
  {
    title: "The Movie Database",
    slug: "the-movie-database",
    description:
      "Une application qui recence tous les films existant en utilisant l'API de The Movie Database (TMDB).",
    features:
      "L'utilisateur recherche un film et obtient des informations : casting, vidéos, films recommandés. L'utilisateur peut obtenir également des informations sur un acteur (ou actrice) et voir sa filmographie",
    img: mvdb,
    type: "Application web",
    short: "Web",
    site: "https://themoviedb-tommy-thongrasamy.netlify.app/",
    github: "https://github.com/tommy211369/themoviedb",
    technos: "React,Hooks,Netlify,API",
    packages: "axios, react-youtube, react-router-dom",
  },
  {
    title: "Les Minions",
    slug: "minions",
    description:
      "Application simple utilisant la bibliothèque de gestion d'état Redux.",
    features:
      "L'utilisateur a la possiblité d'ajouter, détruire des minions ainsi que de sauvegarder le nombre de minions infiltrés.",
    img: minions,
    type: "Application web",
    short: "Web",
    site: "https://minions-tommy-thongrasamy.netlify.app/",
    github: "https://github.com/tommy211369/minions",
    technos: "React, Redux, Hooks, Netlify",
    packages: "redux",
  },
  // {
  //   title: "Réplique de Deliveroo",
  //   slug: "replique-de-deliveroo",
  //   description:
  //     "Il s'agit d'une réplique simplifiée du site web de Deliveroo.",
  //   features:
  //     "L'utilisateur a la possiblité de sélectionner des repas et de visualiser son panier.",
  //   img: deliveroo,
  //   type: "Application web",
  //   short: "Web",
  //   site: "https://react-deliveroo-project.netlify.app/",
  //   github: "https://github.com/tommy211369/react-deliveroo-front",
  //   technos: "React,Hooks,Express,Netlify,Heroku,MongoDB,API",
  //   packages: "material-ui, fontawesome",
  // },

  // {
  //   title: "Emoji Search",
  //   slug: "emoji-search",
  //   description:
  //     "Il s'agit d'une application web qui permet de rechercher des emojis.",
  //   features:
  //     "L'utilisateur a ensuite la possibilité de copier les emojis sur le presse-papier.",
  //   img: emoji,
  //   type: "Application web",
  //   short: "Web",
  //   site: "https://react-emoji-search-engine.netlify.app/",
  //   github: "https://github.com/tommy211369/react-emoji-search",
  //   technos: "React, Netlify",
  //   packages:
  //     "react-router-dom, axios, js-cookie, material-ui, fontawesome, dotenv, cors, crypto-js, uid2",
  // },
  // {
  //   title: "Todo List",
  //   slug: "todo-list",
  //   description:
  //     "Il s'agit d'une application web qui permet de créer une liste de tâches à effectuer.",
  //   features:
  //     "L'utilisateur peut ajouter une tâche, indiquer que la tâche a été effectuée, et enfin la supprimer. Il est possible de switcher du mode Sombre au mode Clair.",
  //   img: todolist,
  //   type: "Application web",
  //   short: "Web",
  //   site: "https://react-todo-list-tommy.netlify.app/",
  //   github: "https://github.com/tommy211369/react-todo-list",
  //   technos: "React, Netlify",
  //   packages:
  //     "react-router-dom, axios, js-cookie, material-ui, fontawesome, dotenv, cors, crypto-js, uid2",
  // },
];

export default list;
