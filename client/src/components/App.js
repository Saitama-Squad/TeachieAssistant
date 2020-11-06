import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";
import LandingPage from "./LandingPage/LandingPage";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.auth);
    return (
      <>
        <LandingPage />
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
