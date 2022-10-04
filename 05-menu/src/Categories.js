import React from "react";

const Categories = ({ checkcategory, newCategories }) => {
  console.log("hello", newCategories);
  return (
    <div className="btn-container">
      {newCategories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            onClick={(e) => checkcategory(e)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
