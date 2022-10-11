import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
//import people from "./data";
function Review({ people }) {
  //console.log("people", people);
  const [loading, setLoadling] = useState(true);
  const [contAnimate, setContAnimate] = useState("activeSlide");
  const [index, setIndex] = useState(0);
  const { id, image, name, quote, title } = people[index];
  console.log("peopleData", people);
  const checkNumber = (id) => {
    if (id > people.length - 1) {
      //id = 0;
      return 0;
    }
    if (id < 0) {
      return people.length - 1;
    }
    return id;
    //console.log("data", people.length);
  };
  const prevPerson = () => {
    setContAnimate(() => "lastSlide");
    setIndex(() => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setContAnimate(() => "nextSlide");
    setIndex(() => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      nextPerson();
      prevPerson();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <section>
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <article className={contAnimate}>
          <img src={image} className="person-img" alt={name} />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
        <button className="prev" onClick={prevPerson}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextPerson}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Review;
