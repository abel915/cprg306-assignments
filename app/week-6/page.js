"use client";

import ItemList from './item-list1.js';

export default function Page() {
  return (
    <main className="bg-gray-950 text-gray-50 p-4">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}