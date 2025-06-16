"use client";

import { useState } from 'react';
import Item from './item3.js';
import itemsData from './item2.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
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