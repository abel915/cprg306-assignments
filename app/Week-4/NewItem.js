'use client'
import { useState } from 'react';



export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(q => (q < 20 ? q + 1 : 20));
    const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));
    return (
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Add New Item</h2>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={decrement} 
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span className="text-xl">{quantity}</span>
                    <button 
                        onClick={increment} 
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        +
                    </button>
                </div>
            </div>
        );



}