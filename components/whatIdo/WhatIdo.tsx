import React from 'react'
import styles from "../aboutContent/aboutContent.module.css"

const whatIdo = ["brand Development", "Visual Identity Strategy", "Production", " Advertisements", "UI UX", "Digital & Social"]

const WhatIdo = () => {
  return (
    <div className={styles.whatIdo}>
        <h2 className='text-3xl'>What I Do:</h2>
        {whatIdo.map(item => (
      <li className='text-xl leading-10' key={item}>
        {item}
      </li>
      ))}
    </div>
  )
}

export default WhatIdo