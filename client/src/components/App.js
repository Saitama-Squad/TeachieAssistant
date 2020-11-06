import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "react-router-dom";
import { fetchUser } from "../actions/index";
import LandingPage from "./LandingPage/LandingPage";
import history from "../history";
import Particles from "react-particles-js";
// import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.auth);
    return (
      <div className="appcontainer">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#000000",
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Router history={history}>
          <LandingPage />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
