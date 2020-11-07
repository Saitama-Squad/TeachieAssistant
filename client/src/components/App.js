import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import { fetchUser } from "../actions/index";
import LandingPage from "./LandingPage/LandingPage";
import history from "../history";
import HomePage from "./HomePage/HomePage";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.auth);
    return (
      <div className="appcontainer">
        <Router history={history}>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={HomePage} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
