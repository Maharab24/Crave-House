// Carts.js
import React, { useEffect, useState } from 'react'
import Cart from './Cart';

function Carts() {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const res = await fetch('/public/restaurant_recipes.json');
                const data = await res.json();
                setCarts(data);
            } catch (err) {
                console.error('Error fetching carts:', err);
            }
        };
        fetchCarts();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"> {/* Responsive grid */}
            {carts.map((cart, index) => (
                <Cart key={index} recipe={cart} />
            ))}
        </div>
    )
}

export default Carts