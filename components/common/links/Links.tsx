import React from "react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import styles from './links.module.css'

const Links = () => {
  return (
    <div className={styles.links}>
      <a href="linkedin.com/in/abhishek-dahal-a69589180" className="p-2 hover:border-b-2 hover:scale-125">
        <FaLinkedinIn />
      </a>
      <a href="linkedin.com/in/abhishek-dahal-a69589180" className="p-2 hover:border-b-2 hover:scale-125">
        <FaFacebookF  />
      </a>
    </div>
  );
};

export default Links;
