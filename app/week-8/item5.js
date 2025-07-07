// app/week-8/item.js
import React from 'react';

// The Item component displays a single shopping list item.
// It now accepts an 'onSelect' prop, which is a function to be called
// when the item is clicked.
const Item = ({ name, quantity, category, onSelect }) => {
  return (
    // The entire list item is now clickable.
    // When clicked, it calls the 'onSelect' function, passing the item's name.
    <li
      className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer rounded-lg shadow-md"
      onClick={() => onSelect(name)} // Pass the item's name to the onSelect function
    >
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <div className="text-sm text-gray-300">Buy {quantity} in {category}</div>
    </li>
  );
};

export default Item;

