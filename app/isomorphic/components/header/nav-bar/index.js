import React from "react";
import { NavbarSearch } from "../navbar-search";
import { AppLogo } from "../app-logo";
import { FaBell } from "react-icons/fa";
import "./styles.m.css";
function NavBar(props) {
  return (
    <React.Fragment>
      <div styleName="parent">
        <AppLogo />
        <div styleName="next">
          <NavbarSearch {...props} />
          <FaBell style={{ color: " rgba(0,0,0,.54)", height: 20, width: 20, marginLeft: 15 }} />
          <button
            style={{
              // marginLeft: 8,
              fontSize: 15,
              borderRadius: 4,
              fontFamily: "medium-content-sans-serif-font",
              fontWeight: "initial",
              color: " rgba(0, 0, 0, 0.84)",
              borderColor: " rgba(0,0,0,.54)",
              paddingRight: 14,
              paddingLeft: 14,
              paddingTop: 7,
              paddingBottom: 7,
              marginLeft: 20
            }}
          >
            Upgrade
          </button>
          <div style={{ height: 25, width: 25, backgroundColor: "black", borderRadius: "50%", marginLeft: 20 }} />
        </div>
      </div>
    </React.Fragment>
  );
}
export { NavBar };
