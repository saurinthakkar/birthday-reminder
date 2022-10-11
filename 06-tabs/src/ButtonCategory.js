import React from "react";

const ButtonCategory = ({ button, filtercompany }) => {
  console.log("hello", button);
  return (
    <button
      className="job-btn"
      onClick={(e) => {
        filtercompany(e);
      }}
    >
      {button}
    </button>
  );
};

export default ButtonCategory;
