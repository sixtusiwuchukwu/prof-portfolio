import React, { useState } from "react";

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import { SampleProvider } from "./context/globalState.js";

import Home from "./VIEWS/home";

import Header from "./VIEWS/header";

import Projects from "./VIEWS/projects";

import About from "./VIEWS/about";

import Contact from "./VIEWS/contact";

import Animation from "./components/projects/animation";

import Cartoons from "./components/projects/cartoons";

import Logo from "./components/projects/logo";

import Otherprojects from "./components/projects/other";

import Additem from "./components/Dashboard/additem";

import Adminlogin from "./components/Dashboard/Adminlogin";

import Dashboardlayout from "./components/Dashboard/dashboardlayout";

import Createcollection from "./components/Dashboard/createcollection";

import Dashboard from "./components/Dashboard/dashboard.js";

const Notfound = ({ match }) => {
  return (
    <h2>
      a page with <Link to={match.params.id}>{match.params.id}</Link> is
      Notfound
    </h2>
  );
};

const App = (props) => {
  let url = window.location.href;

  // const [hideheader,setHideheader]=useState(true)
  return (
    <BrowserRouter>
      <div>
        <SampleProvider>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/Projects" exact component={Projects} />

            <Route path="/About" component={About} />

            <Route path="/projects/animation" component={Animation} />

            <Route path="/projects/cartoons" component={Cartoons} />

            <Route path="/projects/logo" component={Logo} />

            <Route path="/contact" component={Contact} />

            <Route path="/projects/otherprojects" component={Otherprojects} />

            {/* dashboard Admin login route */}
            <Route path="/admin/login" exact component={Adminlogin} />

            {/* dashboard routes is wrapped with dashboardlayout component as a parent element */}

            <Dashboardlayout>
              {/* dashboard routes */}

              <Redirect to="/admin/dashboard" />

              <Route path="/admin/additems" exact component={Additem} />

              <Route
                path="/admin/createcollection"
                exact
                component={Createcollection}
              />

              <Route path="/admin/dashboard" exact component={Dashboard} />
            </Dashboardlayout>

            <Route path="/:id" component={Notfound} />
          </Switch>
        </SampleProvider>
      </div>
    </BrowserRouter>
  );
};
export default App;
