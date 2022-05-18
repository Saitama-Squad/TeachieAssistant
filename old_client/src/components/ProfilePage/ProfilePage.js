import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import Particles from "react-particles-js";
import { fetchUser } from "../../actions";
import "./ProfilePage.css";

class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderRemGoals = () => {
    if (this.props.auth.currentGoals.length <= 0) {
      return <div>No Goals</div>;
    } else {
      return Object.keys(this.props.auth.currentGoals).map((item, i) => {
        return <div key={i}>{this.props.auth.currentGoals[item]}</div>;
      });
    }
  };
  renderAllGoals = () => {
    if (this.props.auth.goals.length <= 0) {
      return <div>No Goals</div>;
    } else {
      return Object.keys(this.props.auth.goals).map((item, i) => {
        return <div key={i}>{this.props.auth.goals[item]}</div>;
      });
    }
  };
  renderCard = (h2Text, topic, relation) => {
    return (
      <>
        <div class="courses-container">
          <div class="course">
            <div class="course-preview">
              <h2>{h2Text}</h2>
              <a href="#">
                View all chapters <i class="fas fa-chevron-right"></i>
              </a>
            </div>
            <div class="course-info">
              <h6 style={{ color: "black" }}>{relation}</h6>
              <h2 style={{ color: "black" }}>{topic}</h2>
            </div>
          </div>
        </div>
      </>
    );
  };
  render() {
    console.log(this.props.auth);
    return (
      <div className="profilecontainer">
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
        <div className="profilepage">
          <div className="profiledetails">
            {this.props.auth ? (
              <>
                <img src={this.props.auth.userImage} alt="" />
                <h1 className="namediv">{this.props.auth.name}</h1>
                <div className="emaildiv">{this.props.auth.email}</div>
              </>
            ) : (
              <div>Login First</div>
            )}
          </div>
          <div className="detailscontainer">
            <div className="detailsdiv">
              {this.props.auth ? (
                <>
                  {this.renderCard(
                    "Goals Remaining: " +
                      Object.keys(this.props.auth.currentGoals).length,
                    this.renderRemGoals(),
                    "Programming"
                  )}
                  {this.renderCard(
                    "Goals Completed: " + this.props.auth.completedGoals,
                    this.renderAllGoals("goals"),
                    "All Goals: " + Object.keys(this.props.auth.goals).length
                  )}
                  <h4>
                    If You Have Added Any new goals, Logout and Login Again to
                    Refresh The Data.
                  </h4>
                </>
              ) : (
                <div>Login First</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps, { fetchUser })(ProfilePage);
