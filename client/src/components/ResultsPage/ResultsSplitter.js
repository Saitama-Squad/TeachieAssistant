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
    let i = 0;
    var newdata = arrayToObject(data);
    console.log(newdata);
    // return newdata.map((example, label) => {
    //   return (
    //     <div className="td-wrapper">
    //       <div className="td-container">{example}.</div>
    //     </div>
    //   );
    // });
    return (
      <div className="td-wrapper">
        <div className="td-container">{newdata[0]}</div>
      </div>
    );
  } else {
    return <div className="none">None</div>;
  }
};

export default ResultsSplitter;
