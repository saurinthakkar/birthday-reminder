import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Job = ({ item }) => {
  const { company, dates, duties, id, order, title } = item;
  //console.log(company, dates, duties, id, order, title);
  //console.log("items", item);
  return (
    <article className="job-info">
      <h3>{item.title}</h3>
      <h4>{item.company}</h4>
      <p className="job-date">{item.dates}</p>
      {duties.map((duty) => {
        return (
          <div className="job-desc">
            <FaAngleDoubleRight />
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Job;
