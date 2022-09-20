import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  console.log("Selected tour", tour);
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const { id, name, info, image, price } = tour;

  return (
    <article className="single-tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {isReadMore ? info.slice(0, 150) : info}
          <button onClick={toggleReadMore}>
            {isReadMore ? "..read more" : "show less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
