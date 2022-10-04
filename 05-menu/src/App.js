import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const newCategories = ["all", ...new Set(items.map((item) => item.category))];
  console.log("newcategories", newCategories);
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
        <Categories
          newCategories={newCategories}
          checkcategory={checkcategory}
        />

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
