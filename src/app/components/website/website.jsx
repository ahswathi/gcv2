'use client'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import Readmore from '../readbutton/readbutton'
import styles from './website.module.css'

const Website = () => {
  return (
      <div className={styles.container}>
        <div className={styles.mainLeft}>
          <h2>Build perfect e-commerce website with growCommerce</h2>
          <p>Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below.</p>
          <div className={styles.btngroup}>
                <Darkbutton title="Lets connect"/>
                <button className={styles.book}>Book a time</button>
            </div>
        </div>
        <div className={styles.mainRight}>
          <img src="assets/clientbrands/image.png" alt="" />
        </div>
</div>
  )
}

export default Website