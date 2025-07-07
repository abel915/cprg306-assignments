// app/week-8/item-list.js
"use client";

import { useState } from "react";
import Item from "./item5"; 

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="p-4 bg-slate-800 rounded-lg shadow-lg">
      <div className="mb-4 flex items-center">
        <label htmlFor="sort" className="mr-4 text-lg font-semibold text-white">Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`p-3 mr-3 rounded-lg font-medium transition-colors duration-200 ${
            sortBy === "name" ? "bg-orange-500 text-white shadow-md" : "bg-orange-700 text-gray-200 hover:bg-orange-600"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-3 rounded-lg font-medium transition-colors duration-200 ${
            sortBy === "category" ? "bg-orange-500 text-white shadow-md" : "bg-orange-700 text-gray-200 hover:bg-orange-600"
          }`}
        >
          Category
        </button>
      </div>
      <ul>
        {/* Map through the sorted items and render an Item component for each. */}
        {/* The onItemSelect function from the parent is passed down as 'onSelect' prop. */}
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
