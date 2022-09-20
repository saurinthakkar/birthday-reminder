import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  //let oldresponse = fetch(url);
  //let oldCommit = oldresponse.json();

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getTourData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);

      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTourData();
    setIsLoading(false);
  }, []);

  //console.log("getTourData", );

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <main>
        <section>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
          </div>
          <Tours tours={tours} />
        </section>
      </main>
    </>
  );
}

export default App;
