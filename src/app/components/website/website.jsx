'use client'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import Bookbutton from '../bookbutton/bookbutton'
import styles from './website.module.css'

const Website = ({imageUrl, content, title, title1}) => {
  return (
 
 <div className={styles.container}>
       <div className={styles.mainLeft}>
           <h2>{title}</h2>
           <p>{content}</p>
           
          <div className={styles.buttondiv}>
            <Darkbutton title="Lets connect"/>
            <Bookbutton title1="Book a time"/>
          </div>
        </div>
    <div className={styles.mainRight}>
      <img src={imageUrl} />
    </div>
</div>


  )
}

export default Website