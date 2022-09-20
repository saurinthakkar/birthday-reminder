import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <>
      {tours.map((tour) => {
        return <Tour tour={tour} removeTour={removeTour} />;
      })}
    </>
  );
};

export default Tours;
