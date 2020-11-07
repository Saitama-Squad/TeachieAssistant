import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Particles from "react-particles-js";
import Icon from "./Icon";
import "./HomePage.css";
import NavBar from "./NavBar";

class HomePage extends Component {
  render() {
    return (
      <div className="homepagecontainer">
        <Particles
          id="tssparticles"
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
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
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
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
                type: "square",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <div className="header-wrapper">
          <NavBar />
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
