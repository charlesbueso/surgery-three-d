import React, { useState } from 'react';

export const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (selectedOption) => {
    onSelect(selectedOption);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>{isOpen ? 'Close' : 'Dropdown'}</button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;