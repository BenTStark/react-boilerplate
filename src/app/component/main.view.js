import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home.view";
import Ordinary from "./ordinary.view";
import Timeseries from "./timeseries.view";
import Versionised from "./versionised.view";
import Image from "./image.view";

export class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/ordinary">
            <Ordinary/>
          </Route>
          <Route exact path="/timeseries">
            <Timeseries/>
          </Route>
          <Route exact path="/versionised">
            <Versionised/>
          </Route>
          <Route exact path="/image">
            <Image/>
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Main;
