import React from 'react'
import Image from 'next/image'
import profilePicture from '../../public/profilePicture.png'
import styles from './imageSection.module.css'

const ImageSection = () => {

  return (
    <div className={styles.imageSection}>
        <Image 
            fill
            src={profilePicture} 
            alt="Profile Image"
            sizes='(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw'
            className={styles.profilePicture}
        />
    </div>
  )
}

export default ImageSection