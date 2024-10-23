'use client'
import React from 'react'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import styles from './content.module.css'

const Content = ({ subtitle, title, content, imageUrl}) => {
  return (
  <>
        <div className={styles.container}>
                <img src={imageUrl} />
                <p>{content}</p>
                <div className={styles.box}>
                        <span>woo commerce</span>
                        <span>yoast</span>
                        <span>theme</span>
                        <span>payment gateway</span>
                        <span>shipping</span>
                        <span>page speed</span>
                        <span>bulk import</span>
                        <span>mobile responsive</span>
                        <span>social media sharing</span>
                </div>
        </div>
 </>
  )
}

export default Content