'use client'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}> 
         <div className={styles.heading}>We build digital commerce that perform.</div>
        <div> 
           <Darkbutton title="Lets Connect" />
        </div>
    </div>
  )
}

export default Hero