// app/week-8/new-item.js
"use client";

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new item object
    const newItem = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), // Generate a unique ID
      name,
      quantity,
      category,
    };

    // Call the onAddItem prop with the new item
    onAddItem(newItem);

    // Reset the form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="p-4 bg-slate-800 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Item Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="e.g., Milk"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-1">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              className="w-full p-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-md"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
