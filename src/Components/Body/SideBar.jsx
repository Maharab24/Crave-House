import React from 'react';

function SideBar() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
      {/* Want to Cook Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-gray-800">Want to cook: </span>
          <span className="text-4xl text-[#150B2B]">01</span>
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
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800">Chicken Caesar Salad</td>
                <td className="py-3 px-4 text-gray-600">20 minutes</td>
                <td className="py-3 px-4 text-gray-600">400 calories</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Preparing</h3>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Currently Cooking Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-gray-800">Currently cooking: </span>
          <span className="text-4xl text-[#150B2B]">02</span>
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
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800">Spaghetti Bolognese</td>
                <td className="py-3 px-4 text-gray-600">30 minutes</td>
                <td className="py-3 px-4 text-gray-600">600 calories</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800">Spaghetti Bolognese</td>
                <td className="py-3 px-4 text-gray-600">30 minutes</td>
                <td className="py-3 px-4 text-gray-600">600 calories</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between mb-2">
            <span className="font-semibold text-gray-800">Total Time =</span>
            <span className="font-semibold text-[#150B2B]">45 minutes</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-800">Total Calories =</span>
            <span className="font-semibold text-[#150B2B]">1050 calories</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;