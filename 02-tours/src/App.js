import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  //let oldresponse = fetch(url);
  //let oldCommit = oldresponse.json();

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
    //console.log("ID called", newTours);
  };

  let getTourData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
      setIsLoading(false);

      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTourData();
  }, []);

  //console.log("getTourData", );

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className="title">
        <h2>No tours Left</h2>
        <button className="btn" onClick={getTourData}>
          Refresh
        </button>
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
          <Tours tours={tours} removeTour={removeTour} />
        </section>
      </main>
    </>
  );
}

export default App;
