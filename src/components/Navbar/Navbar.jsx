import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink className="profile" to="profile" activeClassName={"active"}>
        Profile
      </NavLink>
      <NavLink className="formation" to="formation" activeClassName={"active"}>
        Formation
      </NavLink>
      <NavLink className="code" to="code" activeClassName={"active"}>
        Code
      </NavLink>
      <NavLink className="aboutme" to="aboutme" activeClassName={"active"}>
        About me
      </NavLink>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </header>
  );
};

export default Navbar;
