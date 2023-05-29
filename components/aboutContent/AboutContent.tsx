import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import WhatIdo from "../whatIdo/WhatIdo";
import Form from "../form/Form";
import Contacts from "../common/contacts/Contacts";

const AboutContent = () => {
  return (
    <div className="grid pt-4 ">
      <AboutMe />
      <WhatIdo />
      <Form />
      <Contacts />
    </div>
  );
};

export default AboutContent;
