import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
// Import the specific icons you want to use
import { faLaugh } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";
import NamePlate from "../namePlate/NamePlate";
import Links from "../links/Links";

// Add the imported icons to the library
library.add(faLaugh);

const Header = () => {
  return (
    <header className={styles.header}>
      <NamePlate />
      <Links />
    </header>
  );
};

export default Header;
