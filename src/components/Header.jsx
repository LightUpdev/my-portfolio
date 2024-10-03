// src/components/Header.js
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/">
          <h1 className="text-2xl font-bold">Lenity Stephen</h1>
        </a>

        {/* Hamburger Icon for mobile */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
          <a
            href="http://github.com/LightUpdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-center py-4 space-y-4">
            <a href="#about" className="block hover:text-gray-400">
              About
            </a>
            <a href="#skills" className="block hover:text-gray-400">
              Skills
            </a>
            <a href="#experience" className="block hover:text-gray-400">
              Experience
            </a>
            <a href="#projects" className="block hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="block hover:text-gray-400">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
