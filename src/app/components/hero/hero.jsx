'use client'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}> 
         <div className={styles.heading}>We build digital commerce that perform faster.</div>
         <div className={styles.subtitle}>Visionsharp is a Web Design Agency in Manchester specialising in specific platforms.Visionsharp is a Web Design Agency in Manchester specialising in specific platforms.</div>
        <div> 
           <Darkbutton title="Lets Connect" />
        </div>
    </div>
  )
}

export default Hero