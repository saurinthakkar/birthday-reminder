import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./data";
import Review from "./Review";
function App() {
  return <Review people={people} />;
}

export default App;
