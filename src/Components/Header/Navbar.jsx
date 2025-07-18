import React, { useState } from 'react';
import { FiSearch, FiUser, FiHome, FiBookOpen, FiInfo, FiX, FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: <FiHome className="md:hidden mr-2" /> },
    { name: 'Recipes', icon: <FiBookOpen className="md:hidden mr-2" /> },
    { name: 'About', icon: <FiInfo className="md:hidden mr-2" /> },
    { name: 'Search', icon: <FiSearch className="md:hidden mr-2" /> }
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-white rounded-full p-1 mr-2">
              <img
      src={logo}
      alt="Crave House Logo"
      className="w-8 h-8 rounded-xl object-cover border-2 border-dashed bg-gray-200"
    />

            </div>

            <span className="text-white text-xl font-bold tracking-wider">Crave House</span>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`px-4 py-2 text-sm font-medium text-white hover:text-amber-200 transition-all duration-300 transform hover:scale-105 ${
                  item.name === 'Search' ? 'md:hidden' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-300 hover:bg-white/30">
              <FiSearch className="text-white mr-2" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="bg-transparent border-none text-white placeholder-white/70 focus:outline-none w-32 transition-all duration-300 focus:w-40"
              />
            </div>

            {/* Search Icon (Mobile) */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden text-white p-2 rounded-full hover:bg-white/20 transition-all"
            >
              {searchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>

            {/* User Icon */}
            <div className="relative">
              <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <FiUser className="text-white" size={20} />
              </button>
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-full hover:bg-white/20 transition-all"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-4 transition-all duration-300 animate-fadeIn">
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
            <FiSearch className="text-white mr-2" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="bg-transparent border-none text-white placeholder-white/70 focus:outline-none w-full"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-700/90 to-rose-600/90 backdrop-blur-lg transition-all duration-300 animate-slideDown">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center px-3 py-2 text-base font-medium text-white rounded-lg hover:bg-white/20 transition-all"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;