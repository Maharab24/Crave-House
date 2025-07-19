import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Cart({ recipe }) {
    const [imageError, setImageError] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [showIngredientsModal, setShowIngredientsModal] = useState(false);
    const fallbackImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c";

    return (
        <>
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{
                    scale: 1.02,
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
                    y: -5
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-md h-full flex flex-col"
            >
                {/* Image with error handling - fixed height */}
                <div className="h-56 w-full bg-gray-100 flex-shrink-0">
                    {!imageError && recipe.image ? (
                        <img
                            src={recipe.image}
                            alt={recipe.recipe_name}
                            className="w-full h-full object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-rose-400/30 w-full h-full flex items-center justify-center">
                            <img
                                src={fallbackImage}
                                alt="Food placeholder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* Content area with flex-grow */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-800">{recipe.recipe_name}</h2>
                        <p className="text-gray-600">{recipe.description}</p>

                        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mt-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{recipe.preparing_time}</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm8-4a4 4 0 00-8 0v4h8V6z" />
                                </svg>
                                <span>{recipe.calories}</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                                <span>{recipe.ingredients.length} ingredients</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                                <span>ID: #{recipe.recipe_id}</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-md font-semibold mb-2 text-gray-800 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                                Ingredients:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {recipe.ingredients.slice(0, 3).map((item, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                                    >
                                        {item}
                                    </span>
                                ))}
                                {recipe.ingredients.length > 3 && (
                                    <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs">
                                        +{recipe.ingredients.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Buttons at the bottom */}
                    <div className="mt-auto pt-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-3">
                            <motion.button
                                className="flex-1 mb-2 sm:mb-0 bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setIsAdded(true);
                                    setTimeout(() => setIsAdded(false), 2000);
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {isAdded ? (
                                        <motion.span
                                            key="added"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center justify-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Added to Cart
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="add"
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: 1 }}
                                            className="flex items-center justify-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Add to Cart
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <button
                                className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                                onClick={() => setShowIngredientsModal(true)}
                            >
                                View Recipe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Success animation */}
                <AnimatePresence>
                    {isAdded && (
                        <motion.div
                            className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Ingredients Modal */}
            <AnimatePresence>
                {showIngredientsModal && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowIngredientsModal(false)}
                    >
                        <motion.div
                            className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 pb-4 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold text-gray-800">All Ingredients</h3>
                                    <button
                                        className="text-gray-500 hover:text-gray-700"
                                        onClick={() => setShowIngredientsModal(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-gray-600 mt-1">{recipe.recipe_name}</p>
                            </div>

                            <div className="p-6 overflow-y-auto flex-grow">
                                <ul className="space-y-3">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="text-green-500 mr-2">•</span>
                                            <span className="text-gray-700">{ingredient}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 border-t border-gray-200">
                                <button
                                    className="w-full bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-3 rounded-full font-medium"
                                    onClick={() => setShowIngredientsModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Cart;