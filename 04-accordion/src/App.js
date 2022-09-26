import React, { useState } from "react";
import SingleQuestion from "./Question";
import data from "./data";
import Question from "./Question";
function App() {
  //console.log("data", data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((data) => (
            <Question {...data} />

            // <article className="question">
            //   <header>
            //     <h4>{data.title}</h4>
            //     <button className="btn" onClick={() => setIsActive(!isActive)}>
            //       {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
            //     </button>
            //   </header>
            //   {isActive && <p>{data.info}</p>}
            // </article>
          ))}
        </section>
      </div>
    </main>
  );

  //return <Question data={data} />;
}

export default App;
