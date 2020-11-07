import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Icon from "./Icon";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homepagecontainer">
        <div className="welcomecontainer">Welcome!</div>
        <div className="profilebuttontotalcontainer">
          <div className="profilebuttoncontainer">
            <button className="profilebutton"></button>
            <div>
              <a href="http://localhost:5000/api/logout">Logout!</a>
            </div>
          </div>
        </div>
        <div className="homepage">
          <div className="logocontainer">
            <div className="logo">
              <Icon />
            </div>
          </div>
          <div className="searchbarcontainer">
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
