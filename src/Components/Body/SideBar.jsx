import React, { useState } from 'react';

function SideBar({ cartItems }) {
  // State management for cooking process
  const [cookingItems, setCookingItems] = useState([]);
  const [movedToCookingIds, setMovedToCookingIds] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  // Filter cartItems to only show those not moved to cooking section
  const wantToCookItems = cartItems.filter(
    item => !movedToCookingIds.includes(item.recipe_id)
  );

  // Move recipe to cooking section
  const handleMoveToCooking = (recipe) => {
    // Add to cooking items
    setCookingItems([...cookingItems, recipe]);

    // Add to moved IDs to prevent showing in both sections
    setMovedToCookingIds([...movedToCookingIds, recipe.recipe_id]);

    // Update totals
    setTotalTime(totalTime + parseInt(recipe.preparing_time));
    setTotalCalories(totalCalories + parseInt(recipe.calories));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
      {/* Want to Cook Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-gray-800">Want to cook: </span>
          <span className="text-4xl text-[#150B2B]">{wantToCookItems.length}</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Name</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Time</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Calories</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {wantToCookItems.map((recipe) => (
                <tr key={recipe.recipe_id} className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-800">{recipe.recipe_name}</td>
                  <td className="py-3 px-4 text-gray-600">{recipe.preparing_time} minutes</td>
                  <td className="py-3 px-4 text-gray-600">{recipe.calories} calories</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleMoveToCooking(recipe)}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Currently Cooking Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-gray-800">Currently cooking: </span>
          <span className="text-4xl text-[#150B2B]">{cookingItems.length}</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Name</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Time</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Calories</th>
              </tr>
            </thead>
            <tbody>
              {cookingItems.map((recipe) => (
                <tr key={recipe.recipe_id} className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-800">{recipe.recipe_name}</td>
                  <td className="py-3 px-4 text-gray-600">{recipe.preparing_time} minutes</td>
                  <td className="py-3 px-4 text-gray-600">{recipe.calories} calories</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between mb-2">
            <span className="font-semibold text-gray-800">Total Time =</span>
            <span className="font-semibold text-[#150B2B]">{totalTime} minutes</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-800">Total Calories =</span>
            <span className="font-semibold text-[#150B2B]">{totalCalories} calories</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;