import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ reviews }) => {
  //console.log("reviews", reviews);
  const [activeIndex, setActiveIndex] = useState(0);
  const { id, name, job, image, text } = people[activeIndex];

  const checknumber = (id) => {
    if (id > reviews.length - 1) {
      const newId = 0;
      return newId;
    }
    if (id < 0) {
      const newId = reviews.length - 1;
      return newId;
    }
    return id;
  };
  const randomPerson = () => {
    let randomPersonIndex = Math.floor(Math.random() * people.length);
    console.log("hello", randomPersonIndex);
    if (randomPersonIndex === activeIndex) {
      randomPersonIndex = activeIndex + 1;
    }
    setActiveIndex(checknumber(randomPersonIndex));
  };
  const prevPerson = () => {
    //console.log("prevPerson", prevPersonId);
    setActiveIndex((index) => {
      let newIndex = activeIndex - 1;
      return checknumber(newIndex);
    });
  };
  const nextPerson = (nextPersonId) => {
    //console.log("nextPerson", nextPersonId);
    setActiveIndex((index) => {
      let newIndex = nextPersonId + 1;
      return checknumber(newIndex);
    });
  };
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={() => nextPerson(id - 1)}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomPerson}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
};

export default Review;
