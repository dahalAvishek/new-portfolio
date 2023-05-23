import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import WhatIdo from "../whatIdo/WhatIdo";
import Form from "../form/Form";
import styles from "./aboutContent.module.css"
import Contacts from "../common/contacts/Contacts";

const AboutContent = () => {
  return (
    <div className={styles.aboutContent}>
      <AboutMe />
      <WhatIdo />
      <Form />
      <Contacts />
    </div>
  );
};

export default AboutContent;
