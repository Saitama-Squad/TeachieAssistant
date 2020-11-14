import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const ResultsSplitter = ({ data }) => {
  AOS.init({
    duration: 1000,
  });
  console.log("from resulsts");
  // console.log(data);

  if (data) {
    console.log(data);
    let i = 60;
    return data.map((example, label) => {
      i += 20;
      return (
        <li className="td-wrapper" key={label}>
          <div className="td-container">{example}.</div>
        </li>
      );
    });
  } else {
    return <div className="none">None</div>;
  }
};

export default ResultsSplitter;
