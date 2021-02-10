import React, { Component } from "react";
import Particles from "react-particles-js";
import "./AboutPage.css";
import NavBar from "./NavBar";

class AboutPage extends Component {
  render() {
    return (
      <div className="Aboutcontainer">
        <Particles
          id="tsparticles"
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
        <div className="mainpage">

        <div class="header">
            <div  class = "header">
                  <h1>About the project</h1>
                <div><br></br>
                  Techie Assistant is ReactJS based web application which uses state of the art MERN Stack, Web Scraping tools and APIs to helps users to get the required online resources in a faster manner.</div>
                <br></br>
                <p> The problem Techie Assistant solves</p>
                <br></br>
                <p class="para">  Struggles In self Learning</p>
                <p class="para">   No knowledge about resources</p>
                <p class="para">   Don’t know where to start</p>  
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;