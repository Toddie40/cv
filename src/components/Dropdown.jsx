import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference to the dropdown container
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const openDropdown = () => {
        setIsOpen(true);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div
      className="dropdown_menu"
      ref={dropdownRef}
      onMouseEnter={openDropdown} // Open dropdown on hover
    >
      <button
        onClick={toggleDropdown} // Toggle dropdown on click
        className="flex items-center hover:text-highlight cursor-pointer"
      >
        {label}
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute flex-col bg-[var(--color-bg)] shadow-md mt-2 py-2 w-40">
          {items.map((item) => (
            <li key={item.route}>
              <Link
                to={`/projects/${item.route}`}
                className="block px-4 py-2 text-[var(--color-fg)] hover:bg-[var(--color-light)]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;