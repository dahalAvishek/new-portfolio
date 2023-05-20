import React from "react";
import styles from "./homeBody.module.css";
import IntroSection from "../introSection/IntroSection";
import ServiceSection from '../serviceSection/ServiceSection'
import ImageSection from "../imageSection/ImageSection";

const HomeBody = () => {
  return (
    <div className={styles.homeBody}>
      <div className={styles.topSection}>
        <div className={styles.columns}>
          <IntroSection />
          <ServiceSection />
        </div>
        <ImageSection />
      </div>
      {/* <BodyLinks />
      <div className={styles.bottomSection}>
        <MyServices />
        <MyProjects />
      </div> */}
    </div>
  );
};

export default HomeBody;
