import React from "react";
const arrayToObject = (arr) => {
  var obj = {};
  for (var i = 0; i < arr.length; ++i) {
    obj[i] = arr[i];
  }
  return obj;
};
const ResultsSplitter = ({ data }) => {
  console.log("from resulsts");
  console.log(data);

  if (data) {
    console.log(data);
    return data.map((example, label) => {
      return (
        <li className="td-wrapper">
          <div className="td-container">{example}.</div>
        </li>
      );
    });
  } else {
    return <div className="none">None</div>;
  }
};

export default ResultsSplitter;
