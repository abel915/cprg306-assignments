"use client";

import { useState } from "react";
import NewItem from "./new-item5"; // Assuming new-item5.js is correctly set up from Week 7
import ItemList from "./item-list5"; // Updated ItemList component
import MealIdeas from "./meal-ideas"; // New MealIdeas component
import itemsData from "./item3.json"; // Your shopping list data

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Handler for adding a new item to the shopping list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Handler for when an item in the shopping list is selected
  const handleItemSelect = (itemName) => {
    // Clean up the item name by removing size, weight, and emojis
    // This regex matches various Unicode emoji ranges
    const cleanedItemName = itemName
      .split(',')[0] // Take only the part before the first comma (e.g., "milk, 4 L 🥛" -> "milk")
      .trim() // Remove leading/trailing whitespace
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') // Remove emojis
      .replace(/[\u0023-\u0039]\uFE0F?\u20E3|\u00A9|\u00AE|[\u2000-\u3300]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDEFF]/g, '') // More comprehensive emoji removal
      .trim(); // Trim again after emoji removal

    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-8 text-orange-500 tracking-wide">Shopping List</h1>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        {/* Left column for adding items and displaying the list */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {/* Right column for displaying meal ideas */}
        <div className="w-full lg:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
