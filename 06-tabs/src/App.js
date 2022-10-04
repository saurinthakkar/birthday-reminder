import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
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

  console.log(tabData);
  return <h2>tabs project setup</h2>;
}

export default App;
