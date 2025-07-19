import React, { useEffect, useState } from 'react';
import Cart from './Cart';

function Carts({ onAddToCart, cartItems }) {
  const [carts, setCarts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Number of carts to initially display
  const initialDisplayCount = 4;

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

  // Calculate the carts to display
  const displayedCarts = showAll ? carts : carts.slice(0, initialDisplayCount);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {displayedCarts.map((cart, index) => (
          <Cart
            key={index}
            recipe={cart}
            onAddToCart={onAddToCart}
            isAdded={cartItems.some(item => item.recipe_id === cart.recipe_id)}
          />
        ))}
      </div>

      {/* Show All button */}
      {!showAll && carts.length > initialDisplayCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Show All Recipes
          </button>
        </div>
      )}
    </div>
  )
}

export default Carts;