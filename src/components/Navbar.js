import React, { Component } from "react";
import logo from "../assets/ruleswarewhite.png";
import Logout from "./Logout";
import "./components-styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="Navbar">
          <img className="logo" src={logo} alt="logo" />
          <Logout />
        </div>
        <div className="line"></div>
      </div>
    );
  }
}

export default Navbar;
