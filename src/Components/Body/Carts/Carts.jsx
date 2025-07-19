import React, { useEffect, useState } from 'react';
import Cart from './Cart';

function Carts({ onAddToCart, cartItems }) {
  const [carts, setCarts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Number of carts to initially display
  const initialDisplayCount = 4;

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('restaurant_recipes.json');
        const data = await res.json();
        setCarts(data);
      } catch (err) {
        console.error('Error fetching carts:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCarts();
  }, []);

  // Handle show all button click
  const handleShowAll = async () => {
    if (carts.length > initialDisplayCount) {
      setIsLoadingMore(true);
      // Simulate network delay for demonstration
      await new Promise(resolve => setTimeout(resolve, 800));
      setShowAll(true);
      setIsLoadingMore(false);
    }
  };

  // Calculate the carts to display
  const displayedCarts = showAll ? carts : carts.slice(0, initialDisplayCount);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
      {[...Array(initialDisplayCount)].map((_, index) => (
        <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-md animate-pulse">
          <div className="h-48 bg-gray-300" />
          <div className="p-4">
            <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="mt-4 h-10 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
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
                onClick={handleShowAll}
                disabled={isLoadingMore}
                className={`relative bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-opacity duration-300 ${
                  isLoadingMore ? 'opacity-75 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isLoadingMore ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </div>
                ) : (
                  'Show All Recipes'
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Carts;