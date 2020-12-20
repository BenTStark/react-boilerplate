import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home.view";
import Info from "./info.view";
import Calendar from "./calendar.view";
import Download from "./download.view";
import Contact from "./contact.view";

export class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/info">
            <Info/>
          </Route>
          <Route exact path="/calendar">
            <Calendar/>
          </Route>
          <Route exact path="/download">
            <Download/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Main;
