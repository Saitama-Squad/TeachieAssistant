import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import { fetchUser } from "../actions/index";
import LandingPage from "./LandingPage/LandingPage";
import history from "../history";
import HomePage from "./HomePage/HomePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import Error from "../Error";
import W3Container from "./ResultsPage/W3Container";
import YTubeContainer from "./ResultsPage/YTubeContainer";
import TotalData from "./ResultsPage/TotalData";
import "./App.css";
const LineLoader = () => {
  return <div className="lineloader"></div>;
};
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    // console.log(this.props.auth);
    return (
      <div className="appcontainer">
        <Router history={history}>
          {/* <Route path="/home/loading" exact component={LineLoader} /> */}
          <Route path={"/eRrOrXxX"} exact component={Error} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/home/:word" component={TotalData} />
          <Route path="/home/:word/w3" component={W3Container} />
          <Route path="/home/:word/ytube" component={YTubeContainer} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
