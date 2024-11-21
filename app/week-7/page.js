"use client";

import ItemList from "./item-list";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";






export default function Page() {

const [items, setItems] = useState(itemsData);
const handleAddItem = (newItem) => {
    setItems([...items, item]);
};


return (
    <div>
<ItemList items={itemsData} />
<NewItem onAddItem={handleAddItem} />

</div>
);
}
  


