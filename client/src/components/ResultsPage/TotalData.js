import React, { Component } from "react";
import "./TotalData.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";

class TotalData extends Component {
  componentDidMount = () => {
    AOS.init({
      duration: 1000,
    });
  };
  render() {
    let term = this.props.results[0];
    console.log("totdata:" + term);
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
        {/* <div className="instruct">Click any one of 'em!</div> */}
      </aside>
    );
  }
}
const mapStateToProps = ({ results }) => {
  return { results: results };
};
export default connect(mapStateToProps)(TotalData);
