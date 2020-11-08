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
                  <div className="curgoals">
                    <h3 className="remgoals">
                      Goals Remaining:{" "}
                      {Object.keys(this.props.auth.currentGoals).length}
                    </h3>
                    {this.renderRemGoals()}
                  </div>
                  <div className="completedgoals">
                    <h3 className="donegoals">
                      Goals Completed:{this.props.auth.completedGoals}
                    </h3>
                  </div>
                  <div className="allgoals">
                    <h3 className="allgoals">
                      All Goals:{Object.keys(this.props.auth.goals).length}
                    </h3>
                    {this.renderAllGoals("goals")}
                  </div>
                  <div>
                    If You Have Added Any new goals, Logout and Login Again to
                    Refresh The Data.
                  </div>
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
