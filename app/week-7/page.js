"use client";

import { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-gray-950 text-gray-50 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}