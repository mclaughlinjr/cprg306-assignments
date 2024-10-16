"use client";

import { useState } from "react";
import { NewItem } from "./new-item"; 

export default function Page() {
    const [isEnabled, setEnabled] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");  
    const [category, setCategory] = useState("produce");

    const toggleEnabled = () => {
        setEnabled(!isEnabled);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = { name, quantity, category };
        
        console.log(item); 
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
      };

    const handleNameChange = (event) => {
        let name = event.target.value;
        name = name.replace(/[^a-zA-Z\s]/g, "");
        setName(name);
    };
    const increment = () => {
        if (quantity < 20 && isEnabled == true) { // Use 'quantity' instead of 'count'
            setQuantity(quantity + 1);
            console.log(quantity + 1); // Log the new quantity
        }
        if (quantity == 19) {
            toggleEnabled();
            alert("You cannot increment the quantity above 20.");
        }
    };

    const decrement = () => {
        if (quantity > 1 && isEnabled == true) { // Use 'quantity' instead of 'count'
            setQuantity(quantity - 1);
            console.log(quantity - 1); // Log the new quantity
        }
        if (quantity == 2) {
            toggleEnabled();
            alert("You cannot decrement the quantity below 1.");
        }
        
    };

    return (
        <div className="flex flex-col items-start">
            <h1 className="text-2xl">Add Item To Your List</h1>
            <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => handleNameChange(event)}
          className="border border-black m-2"
        />
            <p className="text-xl text-purple-400 w-100 rounded mb-1 bg-slate-600">Quantity of Item: {quantity}</p>
            <button onClick={increment} className=" bg-gray-500 text-xl hover:bg-green-900 hover:text-green-500 text-white w-100 rounded mb-1">
                Increment
            </button>
            <button onClick={decrement} className="bg-gray-500 text-xl text-white-100 hover:bg-red-600 hover:text-red-900 text-white  w-100 rounded mb-1">
                Decrement
            </button>
            <button onClick={toggleEnabled} className="mt-4 bg-green-600 text-white rounded">
                {isEnabled ? "Disable Quantity Manipulation" : "Enable Quantity Manipulation"}
            </button>

            <button onClick={handleSubmit} className="bg-blue-600 text-white rounded mt-4">
                Submit
            </button>
        </div>

        

        
    );
}   


