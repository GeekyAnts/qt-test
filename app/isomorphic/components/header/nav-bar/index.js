import React from "react";
import get from "lodash/get";
import { NavbarSearch } from "../navbar-search";
import { MenuItem } from "../helper-components";
import { AppLogo } from "../app-logo";
import "./styles.m.css";
function NavBar(props) {
  return (
    <React.Fragment>
      <AppLogo />
      <ul styleName="navbar">
        {get(props, ["menu", "default"], []).map((item, index) => {
          return (
            // eslint-disable-next-line react/prop-types
            <li key={`${item["id"]}${index}`} onClick={props.closeMenu} styleName="menu-item">
              <MenuItem item={item} />
            </li>
          );
        })}
      </ul>
      <div>
        <NavbarSearch {...props} />
      </div>
    </React.Fragment>
  );
}
export { NavBar };
