'use client'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import Mainheading from '../mainheading/mainheading'
import styles from './latestcs.module.css'

const Latestcs = () => {
  return (
      <>
      <Mainheading
        titlecenter="Our Latest Case Studies"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      /> 
    <div className={styles.container}>
        <div className={styles.latestcs}>
            <div className={styles.mainRight}>
                <img src='assets/latestcs.png'/>
            </div>    
            <div className={styles.mainLeft}>
                <div className={styles.arrow}>
                    <div className={styles.icon}><img src='assets/chevron-left.png'/></div>
                    <div className={styles.line}></div>
                    <div className={styles.icon}><img src='assets/chevron-right.png'/></div>
                </div>
                <div className={styles.content}>
                    <h6>Mobile app & website design</h6>
                    <h2>LynkTown App</h2>
                    <p>LYNKE is a mobile application that allows you to create customizable, interactive business cards that can be safely and efficiently shared with anyone. LYNKE is a mobile application that allows you to create customizable.</p>
                    <Darkbutton title="Case study" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Latestcs