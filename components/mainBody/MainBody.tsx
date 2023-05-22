import React from "react";
import styles from "./mainBody.module.css";
import IntroSection from "../introSection/IntroSection";
import ServiceSection from '../serviceSection/ServiceSection'
import ImageSection from "../imageSection/ImageSection";
import BodyLinks from "../bodyLinks/BodyLinks";
import MyProjects from "../myProjects/MyProjects";
import MyServices from "../myServices/MyServices";
import NavBar from "../common/navbar/NavBar";

const MainBody = () => {
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
      <NavBar />
      <div className={styles.bottomSection}>
        <MyServices />
        <MyProjects />
      </div> 
    </div>
  );
};

export default MainBody;
