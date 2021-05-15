import React from "react";
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Contact from "./Containers/Contact";
import Infrastructure from "./Containers/Infrastructure";
import About from "./Containers/About";
import SellYourScrap from "./Containers/SellYourScrap";
import Careers from "./Containers/Careers";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Application = () => {
  return (
    <DefaultRouter history={history}>
      <NavBar />
      <NavPadding />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/sell-your-scrap" component={SellYourScrap} />
        <Route exact path="/infrastructure" component={Infrastructure} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
      <ScrollToTop
        smooth
        style={{
          borderRadius: "50%",
          outline: "none",
          bottom: "1.5rem",
          right: "1.5rem",
        }}
        component={<Icon path={mdiArrowUp} color="#3B2B98" size={1} />}
      />
    </DefaultRouter>
  );
};

const NavPadding = styled.div`
  min-height: 40px;
`;

export default Application;
