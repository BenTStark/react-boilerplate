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
        {" "}
        <Switch>
          {" "}
          <Route exact path="/" component={Home} />{" "}
          <Route exact path="/info" component={Info} />{" "}
          <Route exact path="/calendar" component={Calendar} />{" "}
          <Route exact path="/download" component={Download} />{" "}
          <Route exact path="/contact" component={Contact} />{" "}
        </Switch>
      </div>
    );
  }
}
export default Main;
