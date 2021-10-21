import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Projects from "./Projects";
import About from "./About";
import Project from "./Project";
import Spinner from "../components/Spinner";

const Home = ({ username, setUsername }) => {
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
          <Header />

          <div className="main-content">
            <Sidebar />
            <Switch>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/project/:slug">
                <Project />
              </Route>
              <Route exact path="/">
                <About setUsername={setUsername} username={username} />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
};

export default Home;
