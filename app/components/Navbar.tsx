'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="p-4 sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-6 items-center">
          <li>
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              Experience
            </button>
          </li>
          <li className="relative">
            <button 
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="text-blue-300 hover:text-blue-400 focus:outline-none transition-colors"
            >
              More 
            </button>
            {isProjectsOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-gray-800 bg-opacity-95 rounded-md shadow-lg py-1 z-10 border border-blue-500">
                <li>
                  <Link 
                    href="/projects/translator" 
                    className="block px-4 py-2 text-sm text-blue-300 hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Translator Tool
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://github.com/anggaradifans" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-blue-300 hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/anggaradifans/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-blue-300 hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;