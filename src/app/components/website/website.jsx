'use client'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import Readmore from '../readbutton/readbutton'
import styles from './website.module.css'

const Website = ({imgURL, bg = '#fff', heading, title, color}) => {
  return (
      <div className={styles.container} style={{background: `${bg}`}}>
        <div className={styles.mainLeft}>
          <h2 style={{color: `${color}`}}>{heading}</h2>
          <p>{title}</p>
          <div className={styles.btngroup}>
                <Darkbutton title="Lets connect"/>
                <button className={styles.book} style={{color: `${color}`, borderColor: `${color}`}}>Book a time</button>
            </div>
        </div>
        <div className={styles.mainRight}>
          <img src={imgURL} alt="" />
        </div>
</div>
  )
}

export default Website