import React, { useState } from 'react';

const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dropdown menu for specific sections
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  // Function to toggle the main menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center cursor-pointer"
        onClick={toggleMenu} // Clicking on this div toggles the menu
      >
        {/* Left Side Logo */}
        <div className="text-2xl font-bold">My Brand</div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Main Navigation Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <div className="container mx-auto p-4 space-y-4">
            <button onClick={closeMenu} className="text-gray-600">
              Close Menu
            </button>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Catalog</a>
            
            {/* How it works dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('howItWorks')}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                How it works
              </button>
              {dropdown === 'howItWorks' && (
                <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-48 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option A</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option B</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option C</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option D</a>
                </div>
              )}
            </div>

            <a href="#" className="block text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
            
            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                Services
              </button>
              {dropdown === 'services' && (
                <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-48 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option A</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option B</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option C</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option D</a>
                </div>
              )}
            </div>

            <a href="#" className="block text-gray-600 hover:text-gray-900">Use-cases</a>
            
            {/* Need help dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('needHelp')}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                Need help?
              </button>
              {dropdown === 'needHelp' && (
                <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-48 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option A</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option B</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option C</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option D</a>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
