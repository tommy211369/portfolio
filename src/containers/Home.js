import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Projects from "./Projects";
import About from "./About";
import Technos from "./Technos";
import Contact from "./Contact";
import Project from "./Project";

const Home = ({ username, setUsername }) => {
  return (
    <div>
      <Router>
        <Header setUsername={setUsername} username={username} />

        <div className="main-content">
          <Sidebar />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/technos">
              <Technos />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/project/:slug">
              <Project />
            </Route>
            <Route exact path="/">
              <Projects />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Home;
