import React, { Component } from "react";
import "./YTubeContainer.css";
import ResultsSplitter from "./ResultsSplitter";
import { connect } from "react-redux";
class YTubeContainer extends Component {
  render() {
    if (this.result.length > 0) {
      return (
        <div className="def-container" data-aos="fade-right">
          <ResultsSplitter data={this.result} keyid={this.resultid} />
        </div>
      );
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
  return { results: state.results };
};
export default connect(mapStateToProps)(YTubeContainer);
