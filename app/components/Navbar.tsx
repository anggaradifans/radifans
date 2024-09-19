'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="text-blue-300 hover:text-blue-400">
              Home
            </Link>
          </li>
          <li className="relative">
            <button 
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="text-blue-300 hover:text-blue-300 focus:outline-none"
            >
              Projects 
            </button>
            {isProjectsOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg py-1 z-10">
                <li>
                  <Link 
                    href="projects/translator" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Translator
                  </Link>
                </li>
                {/* Add more project links here */}
              </ul>
            )}
          </li>
          {/* Add more top-level navigation items here */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;