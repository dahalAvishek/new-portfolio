import React from "react";
import styles from './navBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      {(() => {
        const navElements = ["Home", "About", "projects"]; // Array to hold JSX elements
        // Loop logic
        const navButtons = navElements.map((item) => (
          <button key={navElements.indexOf(item)} className="text-2xl mx-4">
            {item}
          </button>
        ));
        return navButtons; // Returning the array of JSX elements
      })()}
    </nav>
  );
};

export default NavBar;
