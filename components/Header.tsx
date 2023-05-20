import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// Import the specific icons you want to use
import { faLaugh } from "@fortawesome/free-solid-svg-icons";
import '../styles/header.module.css'

// Add the imported icons to the library
library.add(faLaugh);

const Header = () => {
  return (
    <NamePlate  />
    <NavBar  />
    <Links  />

    <header className="header">
        <h2 className="name">
          <FontAwesomeIcon
            icon="laugh"
            className="text-yellow-500 inline h-6 mr-2"
          />
          DAHAL BHAAT
        </h2>
        <nav className="nav-bar">
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
        <div className="links">
          <a href="linkedin.com/in/abhishek-dahal-a69589180"><FaLinkedinIn  /></a>
        </div>
      </header>
  )
}

export default Header