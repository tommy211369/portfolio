import gamepad from "./img/gamepad.jpg";
import vinted from "./img/vinted.jpg";
import marvel from "./img/marvel.jpg";
import deliveroo from "./img/deliveroo.jpg";
import emoji from "./img/emoji.jpg";
import todolist from "./img/todolist.jpg";
import airbnb from "./img/airbnb.jpg";

const list = [
  {
    title: "Gamepad",
    slug: "gamepad",
    description:
      "Il s'agit d'une application web qui recense des milliers de jeux vidéo en utilisant l'API de rawg.io ",
    features:
      "L'utilisateur a la possibilité de créer un compte, rechercher un jeu, ajouter des jeux vidéo en favoris, ajouter un commentaire sur un jeu, liker un commentaire, filtrer les jeux.",
    img: gamepad,
    type: "Application web",
    short: "Web",
    site: "https://gamepad-by-tommy.netlify.app/",
    github: "https://github.com/tommy211369/react-gamepad-front",
    technos: "React,Hooks,Express,Netlify,Heroku,MongoDB,API",
  },
  {
    title: "Réplique de Vinted",
    slug: "replique-de-vinted",
    description: "Il s'agit d'une réplique simplifiée du site web de Vinted.",
    features:
      "L'utilisateur a la possibilité de créer un compte, publier un article, ajouter un article au panier, acheter un article, rechercher un article, trier par prix,...",
    img: vinted,
    type: "Application web",
    short: "Web",
    site: "https://react-vinted-by-tommy.netlify.app/",
    github: "https://github.com/tommy211369/vinted-front",
    technos: "React,Hooks,Express,Netlify,Heroku,MongoDB,API",
  },
  {
    title: "Réplique de Airbnb",
    slug: "airbnb-mobile-app",
    description:
      "Il s'agit d'une réplique simplifiée de l'application mobile d'Airbnb.",
    features:
      "L'utilisateur doit d'abord créer un compte pour se connecter. En activant la géolocalisation, on peut apercevoir les logements à proximité.",
    img: airbnb,
    type: "Application mobile",
    short: "Mobile",
    site: "https://expo.dev/@tommy211369/airbnb-by-Tommy",
    github: "https://github.com/tommy211369/react-native-airbnb",
    technos: "React Native, Hooks",
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
  },
  {
    title: "Réplique de Deliveroo",
    slug: "replique-de-deliveroo",
    description:
      "Il s'agit d'une réplique simplifiée du site web de Deliveroo.",
    features:
      "L'utilisateur a la possiblité de sélectionner des repas et de passer des paiements.",
    img: deliveroo,
    type: "Application web",
    short: "Web",
    site: "https://react-deliveroo-project.netlify.app/",
    github: "https://github.com/tommy211369/react-deliveroo-front",
    technos: "React,Hooks,Express,Netlify,Heroku,MongoDB,API",
  },
  {
    title: "Emoji Search",
    slug: "emoji-search",
    description:
      "Il s'agit d'une application web qui permet de rechercher des emojis.",
    features:
      "L'utilisateur a ensuite la possibilité de copier les emojis sur le presse-papier.",
    img: emoji,
    type: "Application web",
    short: "Web",
    site: "https://react-emoji-search-engine.netlify.app/",
    github: "https://github.com/tommy211369/react-emoji-search",
    technos: "React, Netlify",
  },
  {
    title: "Todo List",
    slug: "todo-list",
    description:
      "Il s'agit d'une application web qui permet de créer une liste de tâches à effectuer.",
    features:
      "L'utilisateur peut ajouter une tâche, indiquer que la tâche a été effectuée, et enfin la supprimer. Il est possible de switcher du mode Sombre au mode Clair.",
    img: todolist,
    type: "Application web",
    short: "Web",
    site: "https://react-todo-list-tommy.netlify.app/",
    github: "https://github.com/tommy211369/react-todo-list",
    technos: "React, Netlify",
  },
];

export default list;
