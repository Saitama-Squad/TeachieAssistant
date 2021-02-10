import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import { fetchUser } from "./actions/index";
import LandingPage from "./components/LandingPage/LandingPage";
import history from "./history";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Error from "./Error";
import W3Container from "./components/ResultsPage/W3Container";
import YTubeContainer from "./components/ResultsPage/YTubeContainer";
import TotalData from "./components/ResultsPage/TotalData";
import AboutPage from "./components/AboutPage/AboutPage";
import "./App.css";
// eslint-disable-next-line no-unused-vars
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
          <Route path="/home/eRrOrXxX" component={Error} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/AboutPage" exact component={AboutPage} />
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
