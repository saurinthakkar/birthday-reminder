import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (data) => {
  //console.log("data", data);
  const [isActive, setIsActive] = useState(false);
  const { id, title, info } = data;
  return (
    <article className="question" key={id}>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;
