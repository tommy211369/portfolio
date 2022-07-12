// Librairies
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import routes from "../../assets/routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTasks,
  faCode,
  faUserCircle,
  faLightbulb,
  faSignInAlt,
  faExclamationTriangle,
  faBars,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
// import Cookies from "js-cookie";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import Sidebar from "../../components/Sidebar/Sidebar";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Project from "../Project/Project";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Spinner from "../../components/Spinner";
import ScrollToTop from "../../components/ScrollToTop";
import ScrollUp from "../../components/ScrollUp/ScrollUp";

library.add(
  faTasks,
  faCode,
  faUserCircle,
  faLightbulb,
  faSignInAlt,
  faExclamationTriangle,
  faBars,
  faTimesCircle
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // const [username, setUsername] = useState(Cookies.get("username") || null);

  // const setUserCookie = (name) => {
  //   setUsername(name);
  //   Cookies.set("username", name);
  // };

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <Spinner />
        </div>
      ) : (
        <div className="app">
          <Router>
            <ScrollToTop />
            <Header />

            <Switch>
              <Route exact path={routes.PROJECTS}>
                <Projects />
              </Route>
              <Route path={routes.PROJECTS + "/:slug"}>
                <Project />
              </Route>
              <Route exact path={routes.ABOUT}>
                <About />
              </Route>
              <Route exact path={routes.ERROR}>
                <ErrorPage />
              </Route>
            </Switch>
            <ScrollUp />

            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
