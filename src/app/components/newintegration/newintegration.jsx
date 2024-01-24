'use client'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import Readmore from '../readbutton/readbutton'
import styles from './newintegration.module.css'

const Integration = ({ subtitle, title, content, imageUrl}) => {
  return (
      <div className={styles.container}>
        <div className={styles.service}>
            <div className={styles.mainRight}>
                <img src={imageUrl} />
            </div>
            <div className={styles.mainLeft}>
                <h2>{title}</h2>
                <p>{content}</p>
                <Darkbutton title="Lets connect"/>
            </div>
        </div>
</div>
  )
}

export default Integration