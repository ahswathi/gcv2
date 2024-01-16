'use client'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import Readmore from '../readbutton/readbutton'
import styles from './newintegration.module.css'

const Newintegration = ({ subtitle, title, content, }) => {
  return (
      <div className={styles.container}>
        <div className={styles.service}>
            <div className={styles.mainLeft}>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className={styles.btngroup}>
                <Darkbutton title="Lets connect"/>
                <button className={styles.book}>Book a time</button>
                </div>
            </div>
            <div className={styles.mainRight}>
               <img src='assets/clientbrands/payments.png' />
            </div>
        </div>
</div>
  )
}

export default Newintegration