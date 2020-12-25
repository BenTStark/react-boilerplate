import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../scss/header.scss';

export class HeaderView extends Component {
  getItems() {
    return {
      headerList: [
        {
          link: "/",
          headerText: "Home",
        },
        {
          link: "/ordinary",
          headerText: "Ordinary Table",
        },
        {
          link: "/timeseries",
          headerText: "Timeseries Table",
        },
        {
          link: "/versionised",
          headerText: "Versionised Table",
        },
        {
          link: "/image",
          headerText: "Image Table",
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <nav>
          <ul className="containerNavigation">
            {this.getItems().headerList.map(
              (item, index) =>
                (
                  <li key={item.headerText} className="navigationListItem">
                    <Link to={item.link}>{item.headerText}</Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderView;
