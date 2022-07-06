import React, { Component } from "react";
import "./YTubeContainer.css";
import ResultsSplitter from "./ResultsSplitter";
import { connect } from "react-redux";

class YTubeContainer extends Component {
  render() {
    let x = this.props.ytresults.shift();
    console.log("w3: " + x);
    if (this.props.ytresults) {
      if (this.props.ytresults.length > 0) {
        return (
          <ol className="res-container" data-aos="fade-up">
            <ResultsSplitter data={this.props.ytresults} />
          </ol>
        );
      } else {
        return (
          <div className="ntg-container" data-aos="fade-up">
            😕Nothing to show here.Search anything different or reload the
            page!😕
          </div>
        );
      }
    } else {
      return (
        <div className="ntg-container" data-aos="fade-up">
          😕Nothing to show here.Search anything different or reload the page!😕
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return { ytresults: state.ytresults };
};
export default connect(mapStateToProps)(YTubeContainer);
