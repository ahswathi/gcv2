'use client'
import React from 'react'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import styles from './technologies.module.css'

const Technologies = ({ subtitle, title, content, imageUrl}) => {
  return (
  <>
    <Mainheading
        titlecenter="Technologies We Use"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        />
      <div className={styles.container}>
        <div className={styles.service}>
            <div className={styles.mainLeft}>
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className={styles.read}>
                    <Readmore/>
                </div>
            </div>
            <div className={styles.mainRight}>
                <img src={imageUrl} />
            </div>
        </div>
        <div className={styles.service2}>
            <div className={styles.mainLeft}>
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className={styles.read}>
                    <Readmore/>
                </div>
            </div>
            <div className={styles.mainRight}>
                <img src={imageUrl} />
            </div>
        </div>
</div>
 </>
  )
}

export default Technologies