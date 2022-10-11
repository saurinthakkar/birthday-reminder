import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Jobs = ({ tabData, activeIndex }) => {
  console.log("tree", tabData, activeIndex);

  const { company, dates, duties, id, order, title } = tabData;
  console.log(company, dates, duties, id, order, title);
  //console.log("items", item);
  return (
    <article className="job-info">
      <h3>hello</h3>
      <h4>Hello</h4>
      {/* <p className="job-date">{dates}</p> */}
      {/* {duties.map((duty) => {
        return (
          <div className="job-desc">
            <FaAngleDoubleRight />
            <p>{duty}</p>
          </div>
        );
      })}
    </article> */}
    </article>
  );
};

export default Jobs;
