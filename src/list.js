import React from "react";

export const List = ({ people }) => {
  //console.log("Data", data);
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

//export { List };
