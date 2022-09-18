import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const response = fetch(url).then((response) => {response.json()

  })
  catch(error){ });   

  return (
    <>
      <h2>Tours Project Setup</h2>
    </>
  );
}

export default App;
