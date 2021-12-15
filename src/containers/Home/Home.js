import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import routes from "../../routes";
import "./Home.css";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Project from "../Project/Project";
import Spinner from "../../components/Spinner";
import ScrollToTop from "../../components/ScrollToTop";
import ScrollUp from "../../components/ScrollUp/ScrollUp";

function Home({ username, setUsername }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <Spinner />
        </div>
      ) : (
        <Router>
          <ScrollToTop />
          <Header setUsername={setUsername} />

          <div className="main-content">
            <Sidebar />

            <Switch>
              <Route exact path={routes.PROJECTS}>
                <Projects />
              </Route>
              <Route exact path={routes.PROJECTS + "/:slug"}>
                <Project />
              </Route>
              <Route exact path={routes.ABOUT}>
                <About username={username} />
              </Route>
            </Switch>
            <ScrollUp />
          </div>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default Home;
