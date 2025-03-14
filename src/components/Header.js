import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-indigo-600">Neev Ahuja</a>
  
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
            {/* <a href="#blog" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</a> */}
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
        </div>
  
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col px-4 py-2">
              <a href="#about" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#blog" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="#contact" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>
    );
  }

  export default Header;