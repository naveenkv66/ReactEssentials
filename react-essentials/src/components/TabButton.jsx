import React from "react";

const TabButton = ({ children, onTabClicked, isSelected }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : "undefined"}
        onClick={onTabClicked}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
