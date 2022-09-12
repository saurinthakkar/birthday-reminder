import React, { useState } from "react";
import { List } from "./List";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
      {/* <h2>Birthday Reminder Project</h2>; */}
    </>
  );
}

export default App;
