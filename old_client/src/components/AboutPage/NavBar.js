import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-brand">
            <Link to="/">Welcome</Link>
          </div>
          <div className="navbar-menu">
            <div>
              <Link to="/home" className="navbar-menu-link btn-1">
                Home
              </Link>
            </div>
            <div>
              <a
                href="localhost:3000/api/logout"
                className="navbar-menu-link btn-1"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
