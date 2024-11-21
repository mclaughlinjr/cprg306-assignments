"use client";
import React, { useState } from "react";
import Select from "react-select";
import { v4 as uuid } from "uuid";

const categoryOptions = [
    { value: "produce", label: "🍇 Produce" },
    { value: "dairy", label: "🥛 Dairy" },
    { value: "bakery", label: "🥐 Bakery" },
    { value: "meat", label: "🍖 Meat" },
    { value: "frozen foods", label: "❄️ Frozen Foods" },
    { value: "canned goods", label: "🥫 Canned Goods" },
    { value: "beverages", label: "🥤 Beverages" },
    { value: "snacks", label: "🍿 Snacks" },
    { value: "household", label: "🧼 Household" },
    { value: "miscellaneous", label: "🛒 Miscellaneous" }
];

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState({ value: "produce", label: "🍇 Produce" });

    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    };
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && quantity && category) {
            const newItem = {
                id: uuid(),
                name,
                quantity,
                category: category.value,
            };
            onAddItem(newItem);
            setQuantity(1);
            setName("");
            setCategory({ value: "produce", label: "🍇 Produce" });
        }
    };

    return (
        <main className="mb-32">
            <form onSubmit={handleSubmit} className="w-10/12 max-w-lg mx-auto space-y-4">
                <div>
                    <label htmlFor="item-name" className="sr-only">Item Name</label>
                    <input
                        id="item-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Item Name"
                        required
                        className="input input-bordered w-full h-10 p-2"
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-between border border-gray-300 rounded-lg w-36">
                        <button
                            type="button"
                            onClick={decrement}
                            disabled={quantity === 1}
                            className="btn btn-outline btn-sm w-12 h-12 text-xl"
                        >
                            -
                        </button>
                        <span className="text-xl">{quantity}</span>
                        <button
                            type="button"
                            onClick={increment}
                            disabled={quantity === 20}
                            className="btn btn-outline btn-sm w-12 h-12 text-xl"
                        >
                            +
                        </button>
                    </div>

                    <div className="flex-grow">
                        <Select
                            options={categoryOptions}
                            value={category}
                            onChange={setCategory}
                            className="w-full"
                            isSearchable
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </main>
    );
}
