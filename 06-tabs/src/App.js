import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Job from "./Job";
import ButtonCategory from "./ButtonCategory";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [tabData, setTabData] = useState([]);
  let getData = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      //console.log(data);
      setTabData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  let filtercompany = (e) => {
    console.log("comnpany", e.target.innerHTML);
  };

  console.log(tabData);
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {tabData.map((item) => (
              <ButtonCategory
                company={item.company}
                filtercompany={filtercompany}
              />
            ))}
          </div>
          {tabData.map((item) => (
            <Job item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
