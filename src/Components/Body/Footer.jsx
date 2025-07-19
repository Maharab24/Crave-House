// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
      <img src={logo} alt="Crave House Logo" className="w-10 h-10 rounded-lg" />
      <h2 className="ml-3 text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
        Crave House
      </h2>
    </div>
            <p className="text-gray-300 max-w-xs">
              Discover delicious recipes from around the world. Cook like a pro with our step-by-step guides and cooking tips.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                 color: 'from-blue-600 to-blue-800',
                 name: 'Facebook' },
                { icon: 'M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm3.75 10.75a.75.75 0 01-.75.75h-6a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v1.5zM12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 9a3.5 3.5 0 110-7 3.5 3.5 0 010 7z',
                 color: 'from-purple-500 to-purple-700',
                 name: 'Instagram' },
                { icon: 'M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.036 10.036 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z',
                 color: 'from-blue-400 to-blue-600',
                 name: 'Twitter' },
                { icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                 color: 'from-blue-700 to-blue-900',
                 name: 'LinkedIn' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`bg-gradient-to-r ${social.color} w-10 h-10 rounded-full flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-amber-500 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Recipes', 'Cooking Tips', 'Meal Plans', 'About Us', 'Contact'].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Recipe Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-amber-500 inline-block">Categories</h3>
            <ul className="space-y-3">
              {['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Quick & Easy', 'Family Meals', 'Holiday Specials'].map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {category}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-amber-500 inline-block">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for weekly recipe inspiration and cooking tips!
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-indigo-800 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Now
              </motion.button>
            </form>
            <div className="mt-6 p-4 bg-indigo-800/50 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-400">Download Our App</h4>
              <div className="flex space-x-3">
                <motion.a
                  href="#"
                  className="flex-1 bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center"
                  whileHover={{ y: -3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  App Store
                </motion.a>
                <motion.a
                  href="#"
                  className="flex-1 bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center"
                  whileHover={{ y: -3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Play Store
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-indigo-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Crave House. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
    
    </footer>
  );
};

export default Footer;