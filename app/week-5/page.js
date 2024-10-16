/* "use client";

import { useState } from "react";
import { NewItem } from "./new-item"; // Ensure this component is used appropriately.

export default function Page() {
    const [isEnabled, setEnabled] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const toggleEnabled = () => {
        setEnabled(!isEnabled);
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
            <p className="text-xl text-purple-400 w-100 rounded mb-5 bg-slate-600">Current Quantity: {quantity}</p>
            <button onClick={increment} className=" bg-gray-500 text-xl hover:bg-green-900 hover:text-green-500 text-white w-100 rounded mb-10">
                Increment
            </button>
            <button onClick={decrement} className="bg-gray-500 text-xl text-white-100 hover:bg-red-600 hover:text-red-900 text-white  w-100 rounded mb-10">
                Decrement
            </button>
            <button onClick={toggleEnabled} className="mt-4 bg-green-600 text-white rounded">
                {isEnabled ? "Disable Feature" : "Enable Feature"}
            </button>
        </div>
    );
}


*/

import DogForm from "./dog-form";

export default function Page() {
    return (
        <main className="m-4">
            <h1 className="text-2xl font-bold text-center">Week 5 Interactivity with Forms</h1>
            <DogForm />
            </main>
    );
}