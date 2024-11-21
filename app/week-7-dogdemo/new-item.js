"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => { if (count < 20) { {setQuantity(quantity + 1)} console.log(quantity); };
    const decrement = () => { if (count > 1) { setQuantity(quantity - 1) } console.log(quantity); };

    return (
        <div>
            <p>Current Quantity: {quantity}</p>
            <button onClick={increment} className="bg-blue-600 text-9xl text-red-500 hover:bg-blue-900 text-write w-100 rounded">
                Increment

            </button>
            <button onClick={decrement} className="bg-blue-600 text-9xl text-red-500 hover:bg-blue-900 text-write w-100 rounded">
                Decrement

            </button>
        </div>
    );
    }
}
