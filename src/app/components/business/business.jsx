'use client'
import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './business.module.css'

const Business = ({ subtitle, title, content, imageUrl}) => {
  return (
      <>
      <Mainheading
     titlecenter="Business Modules"
     contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     /> 
      <div className={styles.container}>
        <div className={styles.service}>
            <div className={styles.mainRight}>
                <img src={imageUrl} />
            </div>
            <div className={styles.mainLeft}>
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
        <div className={styles.service2}>
            <div className={styles.mainRight}>
                <img src={imageUrl} />
            </div>
            <div className={styles.mainLeft}>
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
</div>
</>
  )
}

export default Business