import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class ProfilePage extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-brand">
            <Link to="/">Welcome</Link>
          </div>
          <div className="navbar-menu">
            <div>
              <Link smooth to="/#home" className="navbar-menu-link btn-1">
                Profile
              </Link>
            </div>
            <div>
              <a
                href="http://localhost:5000/api/logout"
                className="navbar-menu-link btn-1"
                activeClassName="btn-1-active"
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

export default ProfilePage;
