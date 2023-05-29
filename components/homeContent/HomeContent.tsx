import React from 'react'
import MyProjects from "../myProjects/MyProjects";
import MyServices from "../myServices/MyServices";
import styles from "./homeContent.module.css";

const HomeContent = () => {
  return (
    <div className={styles.homeContent}>
        <MyServices />
        <MyProjects />
      </div>
  )
}

export default HomeContent