import React, { useState, useEffect } from 'react';
import { FiSearch, FiUser, FiHome, FiBookOpen, FiInfo, FiX, FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', icon: <FiHome className="md:hidden mr-2" /> },
    { name: 'Recipes', icon: <FiBookOpen className="md:hidden mr-2" /> },
    { name: 'About', icon: <FiInfo className="md:hidden mr-2" /> },
    { name: 'Search', icon: <FiSearch className="md:hidden mr-2" /> }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white shadow-xl animate-dropIn'
      : 'bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 shadow-lg'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className={`rounded-full p-1 mr-2 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500' : 'bg-white'}`}>
              <img
                src={logo}
                alt="Crave House Logo"
                className="w-8 h-8 rounded-xl object-cover border-2 border-dashed bg-gray-200"
              />
            </div>

            <span className={`text-xl font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500' : 'text-white'}`}>
              Crave House
            </span>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-rose-500'
                    : 'text-white hover:text-amber-200'
                } ${item.name === 'Search' ? 'md:hidden' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (Desktop) */}
            <div className={`hidden md:flex items-center rounded-full px-3 py-1 transition-all duration-300 ${
              isScrolled
                ? 'bg-gray-100 hover:bg-gray-200'
                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
            }`}>
              <FiSearch className={`mr-2 ${isScrolled ? 'text-rose-500' : 'text-white'}`} />
              <input
                type="text"
                placeholder="Search recipes..."
                className={`bg-transparent border-none focus:outline-none w-32 transition-all duration-300 focus:w-40 ${
                  isScrolled
                    ? 'text-gray-700 placeholder-gray-500'
                    : 'text-white placeholder-white/70'
                }`}
              />
            </div>

            {/* Search Icon (Mobile) */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`md:hidden p-2 rounded-full transition-all ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {searchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>

            {/* User Icon */}
            <div className="relative">
              <button className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white'
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white'
              }`}>
                <FiUser size={20} />
              </button>
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-4 transition-all duration-300 animate-fadeIn">
          <div className={`flex items-center rounded-full px-3 py-2 ${
            isScrolled
              ? 'bg-gray-100'
              : 'bg-white/20 backdrop-blur-sm'
          }`}>
            <FiSearch className={`mr-2 ${isScrolled ? 'text-rose-500' : 'text-white'}`} />
            <input
              type="text"
              placeholder="Search recipes..."
              className={`bg-transparent border-none focus:outline-none w-full ${
                isScrolled ? 'text-gray-700' : 'text-white placeholder-white/70'
              }`}
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-lg transition-all duration-300 animate-slideDown ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-gradient-to-b from-purple-700/90 to-rose-600/90'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center px-3 py-2 text-base font-medium rounded-lg transition-all ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
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