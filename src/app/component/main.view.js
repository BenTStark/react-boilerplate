import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home.view";
import Ordinary from "./ordinary.view";
import Timeseries from "./timeseries.view";
import Versionised from "./versionised.view";
import Image from "./image.view";

import { List } from "./list.view";
import { textFilter } from "react-bootstrap-table2-filter";

export class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ordinary">
            <List
              title={"Ordinary"}
              endpoint={"ordinary"}
              columns={[
                {
                  dataField: "id",
                  text: "ID",
                  sort: true,
                  autofill: true,
                  isPrimaryKey: true,
                  alwaysHidden: true,
                  hidden: true,
                },
                {
                  dataField: "info",
                  text: "Info",
                  sort: true,
                  autofill: false,
                  isPrimaryKey: false,
                  filter: textFilter(),
                },
              ]}
            />
          </Route>
          <Route exact path="/timeseries">
            <Timeseries />
          </Route>
          <Route exact path="/versionised">
            <List
              title={"Versionised"}
              endpoint={"versionised"}
              columns={[
                {
                  dataField: "id",
                  text: "ID",
                  sort: true,
                  autofill: false,
                  isPrimaryKey: true,
                  alwaysHidden: true,
                  hidden: true,
                },
                {
                  dataField: "normal_col",
                  text: "Normal",
                  sort: true,
                  autofill: false,
                  isPrimaryKey: false,
                  filter: textFilter(),
                },
                {
                  dataField: "update_col",
                  text: "Update",
                  sort: true,
                  autofill: false,
                  isPrimaryKey: false,
                  filter: textFilter(),
                },
                {
                  dataField: "ignore_col",
                  text: "Ignore",
                  sort: true,
                  autofill: false,
                  isPrimaryKey: false,
                  filter: textFilter(),
                },
              ]}
            />
          </Route>
          <Route exact path="/image">
            <Image />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Main;
