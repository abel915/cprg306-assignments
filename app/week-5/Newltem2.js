
'use client';
import { useState } from 'react';


export default function NewItem() {
  // Initialize state variables for the form fields
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  
    {Event} event 
   
  const handleSubmit = (event) => {
    // Prevent the form's default submission behavior
    event.preventDefault();

    // Create an item object with the current state values
    const item = {
      name,
      quantity,
      category,
    };

    // Log the item object to the console
    console.log(item);

    // Display an alert with the item's details
    alert(`Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);

    // Reset the form fields to their initial state
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <main>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-white font-bold mb-8">Create New Item</h1>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Quantity and Category Fields */}
            <div className="flex justify-between gap-4 mb-4">
              {/* Quantity */}
              <div className="w-1/2">
                <label className="block text-gray-400 mb-2">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  required
                  className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              {/* Category Field */}
              <div className="w-1/2">
                <label className="block text-gray-400 mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="" disabled>Category</option>
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
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
            >
              Create Item
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
