import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [foodItems, setFoodItems] = useState(items);
  console.log("food", foodItems);
  const checkcategory = (e) => {
    let selectedCategory = e.target.innerHTML;

    console.log("select category", selectedCategory);

    if (selectedCategory === "all") {
      setFoodItems(items);
    } else {
      const selectedFoodItems = items.filter(
        (foodItem) => foodItem.category === selectedCategory
      );
      setFoodItems(selectedFoodItems);
      console.log("selectedfooditem", selectedFoodItems);
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Hello menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="filter-btn"
            onClick={(e) => checkcategory(e)}
          >
            all
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={(e) => checkcategory(e)}
          >
            breakfast
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={(e) => checkcategory(e)}
          >
            lunch
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={(e) => checkcategory(e)}
          >
            shakes
          </button>
        </div>
        <div className="section-center">
          {foodItems.map((item) => (
            <Menu item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
