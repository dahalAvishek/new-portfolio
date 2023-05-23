'use client'
import React from "react";
import styles from "./mainBody.module.css";
import IntroSection from "../introSection/IntroSection";
import ServiceSection from '../serviceSection/ServiceSection'
import ImageSection from "../imageSection/ImageSection";
import BodyLinks from "../bodyLinks/BodyLinks";
import HomeContent from "../homeContent/HomeContent";
import AboutContent from "../aboutContent/AboutContent";
import ProjectsContent from "../projectsContent/ProjectsContent";
import NavBar from "../common/navbar/NavBar";
import { useState } from "react";


const MainBody = () => {
  const [nav, setNav] = useState<"Home" | "About" | "Projects">("Home")
  console.log(nav)
  let BottomSection

  if (nav === "Home") {
    BottomSection = <HomeContent  />
  } else if (nav === "About") {
    BottomSection = <AboutContent  />
  } else if (nav=== "Projects") {
    BottomSection = <ProjectsContent  />
  }

  return (
    <div className={styles.mainBody}>
      <div className={styles.topSection}>
        <div className={styles.columns}>
          <IntroSection />
          <ServiceSection />
        </div>
        <ImageSection />
      </div>
      <BodyLinks />
      <NavBar nav={nav} setNav={setNav}/> 
       {BottomSection}
    </div>
  );
};

export default MainBody;
