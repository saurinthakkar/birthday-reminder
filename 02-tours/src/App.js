import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  //let oldresponse = fetch(url);
  //let oldCommit = oldresponse.json();

  let tourData = fetch(url).then((response) => {
    //console.log(response);
    return response.json().then((data) => {
      console.log(data);
      return data;
    });
  });

  console.log("tourData", tourData.json());

  return (
    <>
      <main>
        <section>
          <Tours />
        </section>
      </main>
    </>
  );
}

export default App;
