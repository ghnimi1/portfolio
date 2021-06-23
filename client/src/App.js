import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "./components/Admin/Dashboard";
import Login from "./components/Admin/Login";
import AdminExperience from "./components/Admin/AdminExperience";
import AdminProjects from "./components/Admin/AdminProjects";
import ProtectedRoute from "./Routes";

export function Home() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Works />
      <Contact />
    </div>
  );
}


function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Login} />
      <ProtectedRoute exact path="/dashboard/skills" component={Dashboard} />
      <ProtectedRoute exact path="/dashboard/experience" component={AdminExperience} />
      <ProtectedRoute exact path="/dashboard/projects" component={AdminProjects} />
    </Switch>
  );
}
export default App;