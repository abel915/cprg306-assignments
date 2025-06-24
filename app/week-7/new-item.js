'use client';
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold text-white mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit}>
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
            <div className="flex justify-between gap-4 mb-4">
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
                <div className="w-1/2">
                    <label className="block text-gray-400 mb-2">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
            >
                Add Item
            </button>
        </form>
    </div>
  );
}