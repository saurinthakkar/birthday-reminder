import React from "react";

const ButtonCategory = ({ company, filtercompany }) => {
  console.log("hello", company);
  return (
    <button
      type="button"
      className="job-btn"
      onClick={(e) => {
        filtercompany(e);
      }}
    >
      {company}
    </button>
  );
};

export default ButtonCategory;
