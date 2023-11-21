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
                <Darkbutton title="Lets connect"/>
            </div>
            <div className={styles.mainRight}>
                <div className={styles.row1}>
                    <img src='assets/i1.PNG' />
                    <img src='assets/i2.PNG' />
                    <img src='assets/i3.PNG'/>
                </div>
                <div className={styles.row2}>
                    <img src='assets/i1.PNG' />
                    <img src='assets/i2.PNG' />
                    <img src='assets/i3.PNG'/>
                </div>
            </div>
        </div>
</div>
  )
}

export default Newintegration