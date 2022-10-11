import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Jobs from "./Job";
import ButtonCategory from "./ButtonCategory";
import { act } from "@testing-library/react";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tabData, setTabData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTabData(data);
    console.log("try", tabData);
    setLoading(false);
  };

  const buttons = tabData.map((item) => item.company);
  console.log("Buttons", buttons);
  useEffect(() => {
    getData();
  }, []);

  console.log("tabdata", tabData[0]);

  let filtercompany = (e) => {
    let selectedCompany = e.target.innerHTML;

    let filteredData = tabData.filter(
      (user) => selectedCompany === user.company
    );

    setTabData(filteredData);
  };
  //const { company, dates, duties, title } = tabData[0];
  // console.log("hello", company, dates, duties, title);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = tabData[activeIndex];
  console.log(company, dates, duties, title);

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {tabData.map((item, index) => {
              return (
                <button
                  className="job-btn"
                  onClick={() => setActiveIndex(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty) => {
              return (
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>

          {/* <Jobs tabData={tabData[activeIndex]} activeIndex={activeIndex} /> */}
        </div>
      </section>
    </>
  );
}

export default App;
