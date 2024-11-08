'use client'
import Image from 'next/image'
import React from 'react'
import Bookbutton from '../bookbutton/bookbutton'
import Darkbutton from '../darkbutton/darkbutton'
import styles from './newcta.module.css'
// Darkbutt
const Newcta = () => {
  return (
     <div className={styles.container}>
      <div className={styles.content}>

    <div className={styles.contentright}>
                  <img src='/assets/cta.jpg' alt="" />
              </div>
          <div className={styles.contentleft}>
              <h2>Find the right support, every time.</h2>
              <p>Get unlimited insights and guidance to level up your CMS experience.</p>
              <div className={styles.buttondiv}>
                <Darkbutton title="Lets connect"/>
               {/*  <Bookbutton title1="Book a time"/> */}
              </div>
              
          </div>
          
      </div>
  </div>
  )
}

export default Newcta
