import React, { Component } from "react";
import { connect } from "react-redux";
import ResultsSplitter from "./ResultsSplitter";
import "./W3Container.css";

class W3Container extends Component {
  render() {
    if (this.props.results) {
      if (this.props.results.length > 0) {
        return (
          <div className="totalres">
            <ul className="res-container" data-aos="fade-up">
              <ResultsSplitter data={this.props.results} />
            </ul>
          </div>
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
  return { results: state.results };
};
export default connect(mapStateToProps)(W3Container);
