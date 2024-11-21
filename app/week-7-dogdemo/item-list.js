"use client";
import items from "../week-6/items.json";
import { useState } from "react";



export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");





 
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }
 

  const handleClick = (id) => {
    setSortBy(id);
  };
 

return (
  <main className="p-2">
    <h1 className="text-2xl font-semibold">Week 6</h1>
    <p>Currently sorting by: {sortBy}</p>
    <button onClick={() => handleClick("name")}className="mt-4 bg-green-600 text-white rounded">Sort by Name</button>
    <button onClick={() => handleClick("category")}className="mt-4 bg-green-600 text-white rounded">Sort by Category</button>
    <ul>
      {items.map((item) => (
        <li
          key={item.name}
          className={`py-2 m-2 ${
            item.id === sortBy ? "bg-gray-200" : "bg-gray-100"
          }`}

        >
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-sm">{item.description}</p>

        </li>
      ))}
    </ul>
  </main>
);
}