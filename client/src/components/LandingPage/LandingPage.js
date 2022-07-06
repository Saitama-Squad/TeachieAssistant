import React, { Component } from "react";
import "./LandingPage.css";
import { connect } from "react-redux";
import ParticleJS from "./ParticleJS";
import DoodleContainer from "./doodleContainer";

class LandingPage extends Component {
  notLogged = () => {
    return (
      <div className="landingpagecontainer">
        <div className="leftcontainer rightdoodlecontainer">
          <DoodleContainer />
        </div>
        <div className="rightcontainer">
          <h1 className="headingg">Teachie Assistant</h1>
          <h2>Login To Explore The World Of Possibilities</h2>
          <div className="loginwrapper">
            <div className="linkkwrapper">
              <div className="lncontainer">
                <a
                  href="/auth/google"
                  className="btn effect01"
                >
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  logged = () => {
    return (
      <div className="landingpagecontainer">
        <div className="leftcontainer rightdoodlecontainer">
          <DoodleContainer />
        </div>
        <div className="rightcontainer">
          <h1>Teachie Assistant</h1>
          <h2>Login To Explore The World Of Possibilities</h2>
          <div className="loginwrapper">
            <div className="linkkwrapper">
              <div className="lncontainer">
                <a
                  href="/api/logout"
                  className="btn effect01"
                >
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    if (!this.props.auth) {
      return (
        <>
          <ParticleJS />
          {this.notLogged()}
        </>
      );
    } else {
      return (
        <>
          <ParticleJS />
          {this.logged()}
        </>
      );
    }
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(LandingPage);
