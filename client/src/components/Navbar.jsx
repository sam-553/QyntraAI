'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Profile', href: '/userProfile' },
  { label: 'My Order', href: '/orders' },
];

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-gray-100 dark:bg-gray-900 shadow-md z-[1000] text-gray-900 dark:text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-[1.5rem] font-bold text-gray-800 dark:text-gray-400"
          >
            QyntraAI
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex ml-8 flex-1">
            <ul className="flex gap-8 items-center">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6 lg:gap-10">

            {/* Search (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1.5">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm outline-none text-gray-900 dark:text-white"
              />
              <Search size={18} className="text-gray-600 dark:text-gray-300" />
            </div>

            {/* Auth */}
            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={openSignIn}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <User />
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full z-[999] bg-gray-100 dark:bg-gray-800 px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="block hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Search (Mobile) */}
          <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-gray-900 dark:text-white outline-none w-full"
            />
            <Search size={18} className="text-gray-700 dark:text-gray-300" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
