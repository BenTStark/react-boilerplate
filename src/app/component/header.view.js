import React, { Component } from "react";
import { Link } from "react-router-dom";

export class HeaderView extends Component {
  getItems() {
    return {
      headerList: [
        {
          link: "/",
          headerText: "Home",
        },
        {
          link: "/info",
          headerText: "Info",
        },
        {
          link: "/calendar",
          headerText: "Kalendar",
        },
        {
          link: "/download",
          headerText: "Download",
        },
        {
          link: "/contact",
          headerText: "Service & Kontakt",
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            {this.getItems().headerList.map(
              (item, index) =>
                (
                  <li key={item.headerText}>
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
