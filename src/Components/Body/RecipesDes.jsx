import React from 'react';

function RecipesDes() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Decorative elements */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/4 w-16 h-16 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600">Recipes</span>
            </h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto mb-8 rounded-full"></div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover culinary masterpieces crafted with passion and precision. Each recipe is a journey through flavors,
              carefully tested to bring restaurant-quality dining to your home kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipesDes;