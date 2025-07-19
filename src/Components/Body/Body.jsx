import React from 'react';
import RecipesDes from './RecipesDes';
import Carts from './Carts/Carts';
import SideBar from './SideBar';

function Body() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-4 py-8">
      {/* Main content area */}
      <div className="flex-1">
        <RecipesDes />
        <div className="mt-8">
          <Carts />
        </div>
      </div>

      {/* Sticky Sidebar for large screens */}
      <div className="w-full lg:w-96 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
        <SideBar />
      </div>
    </div>
  )
}

export default Body;