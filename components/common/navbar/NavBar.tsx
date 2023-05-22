import React from "react";
import '../../../style/globals.css'

const NavBar = () => {
  return (
    <nav className="flex gap-6 items-end mx-auto">
      {(() => {
        const navElements = ["Home", "About", "Projects"]; 
        const navButtons = navElements.map((item) => (
          <button key={navElements.indexOf(item)} className="text-2xl py-1 px-2 hover:border-b-4 hover:scale-110">
            {item}
          </button>
        ));
        return navButtons; 
      })()}
    </nav>
  );
};

export default NavBar;
