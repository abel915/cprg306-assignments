import React from "react";
import { items } from "./item-list";

function Item({ name, quantity, category }) {
    return (
        <li className="p-4 mb-2 bg-blue-100 rounded shadow flex flex-col">
            <span className="text-gray-950">{name}</span>
            <span className="text-sm text-gray-950">Quantity: {quantity}</span>
            <span className="text-sm text-gray-950">Category: {category}</span>
        </li>
    );
}
export default Item;
