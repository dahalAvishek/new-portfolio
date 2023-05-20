import React from "react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import styles from './links.module.css'

const Links = () => {
  return (
    <div className={styles.links}>
      <a href="linkedin.com/in/abhishek-dahal-a69589180">
        <FaLinkedinIn />
      </a>
      <a>
        <FaFacebookF  />
      </a>
    </div>
  );
};

export default Links;
