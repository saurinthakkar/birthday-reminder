import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
//import people from "./data";
function Review({ people }) {
  //console.log("people", people);
  const [loading, setLoadling] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);
  //const { id, image, name, quote, title } = people[activeIndex];
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
    //setContAnimate(() => "lastSlide");
    setActiveIndex(() => {
      const newIndex = activeIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    //setContAnimate(() => "nextSlide");
    setActiveIndex(() => {
      const newIndex = activeIndex + 1;
      return checkNumber(newIndex);
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      nextPerson();
      //prevPerson();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [activeIndex]);
  // const checkAnimate = (index, activeIndex) => {
  //   //if(index === )
  //   console.log("*******************", index, activeIndex);

  //   if (index === activeIndex) {
  //     return "activeSlide";
  //   } else {
  //     if (index > activeIndex && activeIndex < index - 2) {
  //       return "nextSlide";
  //     } else {
  //       return "lastSlide";
  //     }
  //   }
  // };
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          console.log("*******************", activeIndex, personIndex);
          let position = "nextSlide";
          if (activeIndex === personIndex) {
            position = "activeSlide";
          }
          if (
            personIndex === activeIndex - 1 ||
            (activeIndex === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} className="person-img" alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

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
