import React, { Component } from "react";
import "./LandingPage.css";
import { connect } from "react-redux";

class LandingPage extends Component {
  notLogged = () => {
    return (
      <div className="landingpagecontainer">
        <div className="leftcontainer">
          <div className="linkkwrapper">
            <div className="lncontainer">
              <a href="http://localhost:3000" className="btn effect01">
                <span>Logo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="rightcontainer">
          <h2>Login To Explore The World Of Possibilities</h2>
          <div className="loginwrapper">
            <div className="linkkwrapper">
              <div className="lncontainer">
                <a
                  href="http://localhost:5000/auth/google"
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
        <div className="leftcontainer">
          <div className="linkkwrapper">
            <div className="lncontainer">
              <a href="http://localhost:3000" className="btn effect01">
                <span>Logo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="rightcontainer">
          <h2>Login To Explore The World Of Possibilities</h2>
          <div className="loginwrapper">
            <div className="linkkwrapper">
              <div className="lncontainer">
                <a
                  href="http://localhost:5000/api/logout"
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
      return <>{this.notLogged()}</>;
    } else {
      return <>{this.logged()}</>;
    }
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(LandingPage);
