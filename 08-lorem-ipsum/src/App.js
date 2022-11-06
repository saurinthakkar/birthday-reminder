import React, { useState } from "react";
import data from "./data";
function App() {
  const [defaultValue, setDefaultValue] = useState(0);
  const [text, setText] = useState([""]);
  const handleClick = (e) => {
    e.preventDefault();
    //setIteration(e.target.value);
    console.log("checkIndex", defaultValue);
    if (defaultValue <= 0) {
      setDefaultValue(0);
    }
    if (defaultValue > 9) {
      setDefaultValue(9);
    }
    //setText(data.slice(-defaultValue));
    console.log("Hello", { data });
    console.log(">>>>>>>>>>>>", data.slice(-defaultValue));
    setText(data.slice(0, defaultValue));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setDefaultValue(e.target.value);
    console.log("handlechange", defaultValue);
  };
  //console.log(data.filter(para,index)=>{});
  return (
    <>
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form">
          <label for="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={(e) => handleChange(e)}
            value={defaultValue}
          />
          <button className="btn" onClick={(e) => handleClick(e)}>
            generate
          </button>
        </form>

        <article className="lorem-text">
          {text.map((para) => {
            return <p>{para}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
