import React, { useState } from 'react';
import RecipesDes from './RecipesDes';
import Carts from './Carts/Carts';
import SideBar from './SideBar';

function Body() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (recipe) => {
    setCartItems(prevItems => {
      const exists = prevItems.some(item => item.recipe_id === recipe.recipe_id);
      return exists ? prevItems : [...prevItems, recipe];
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Recipe Description Section */}
      <RecipesDes />

      {/* Content Area with Carts and Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Carts Section */}
        <div className="w-full lg:w-2/3">
          <Carts onAddToCart={handleAddToCart} cartItems={cartItems} />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <SideBar cartItems={cartItems} />
        </div>
      </div>
    </div>
  )
}

export default Body;