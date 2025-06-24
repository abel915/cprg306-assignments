"use client";

import { useState } from 'react';
import Item from './item.js';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <span className="mr-2">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`p-2 mr-2 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-2 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}