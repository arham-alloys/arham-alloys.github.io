import React from "react";
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
// import About from "./Containers/About";
// import Events from "./Containers/Events";
// import Contact from "./Containers/Contact";
// import EventPost from "./Containers/EventPost";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import styled from "styled-components";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Application = () => {
  return (
    <DefaultRouter history={history}>
      <NavBar />
      <NavPadding />
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
      </Switch>
      <Footer />
    </DefaultRouter>
  );
};

const NavPadding = styled.div`
  min-height: 40px;
`;

export default Application;
