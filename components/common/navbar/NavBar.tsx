import React from "react";
import styles from './navBar.module.css'
import '../../../style/globals.css'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      {(() => {
        const navElements = ["Home", "About", "Projects"]; 
        
        const navButtons = navElements.map((item) => (
          <button key={navElements.indexOf(item)} className="text-2xl mx-4 py-1 px-2 hover:shadow-outer hover:scale-110">
            {item}
          </button>
        ));
        return navButtons; 
      })()}
    </nav>
  );
};

export default NavBar;
