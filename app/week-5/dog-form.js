"use client";
import {useState} from "react";
export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    
    return (
        <div className="m-2">
            <h2 className="text-2xl text-purple-400">Add a dog</h2>
        </div>
    )
}