import React, { Component } from "react";
import "./TotalData.css";
import { Link } from "react-router-dom";
import { addGoals } from "../../actions";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";

let butTerm = null;
class TotalData extends Component {
  constructor(props) {
    super(props);
    this.buttonn = React.createRef();
  }
  componentDidMount = () => {
    AOS.init({
      duration: 1000,
    });
  };
  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  state = { word: null };
  onButtonClick = async (event) => {
    butTerm = null;
    console.log("button: " + this.props.results[0] + this.props.auth.googleId);
    this.props.addGoals(this.props.results[0], this.props.auth.googleId);
    this.buttonn.current.innerHTML = "Goal Added😊";
    this.buttonn.current.onClick = null;
    await this.sleep(1000);
    console.log(event);

    this.buttonn.current.display = "inline";
  };
  render() {
    let term = this.props.results[0];
    butTerm = term;
    return (
      <aside className="totaldatacontainer">
        <ul>
          <li>
            <Link to={`/home/${term}/w3`}>Topics To Be Learnt</Link>
          </li>
          <li>
            <Link to={`/home/${term}/ytube`}>
              Youtube Courses That We Recommend
            </Link>
          </li>
        </ul>
        <div className="addgoalcontainer">
          {butTerm ? (
            <button
              className="button"
              onClick={(event) => this.onButtonClick(event)}
              ref={this.buttonn}
            >
              {term ? "Add " + term.toUpperCase() + " To Goals?" : term}
            </button>
          ) : (
            <div></div>
          )}
        </div>
        {/* <div className="instruct">Click any one of 'em!</div> */}
      </aside>
    );
  }
}
const mapStateToProps = ({ results, auth }) => {
  return { results: results, auth: auth };
};
export default connect(mapStateToProps, { addGoals })(TotalData);
