import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './verticalchooseus.module.css'
import Darkbutton from '../darkbutton/darkbutton'

const Verticalchooseus = () => {
  return (
      <>
    <div className={styles.container}>
      <div className={styles.contentleft}>
            <h2>Why Choose Us?</h2>
            <p>Being an expert partner with a strong understanding of Shopify, we have the perfect team with the mix of Shopify design, marketing and development skills to build world-class eCommerce stores!</p>
            <div>
              <Darkbutton title="Lets connect"/>
            </div>
      </div>
    <div className={styles.boxes}>
        <div className={styles.boxes1}>
          <div className={styles.box}>
            <span>1</span>
            <p className={styles.title}>Login or Sign Up</p>
            <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi</p>
          </div>
          <div className={styles.box}>
          <span>2</span>
                <p className={styles.title}>Verify Account</p>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi</p>
          </div>
        </div>
        <div className={styles.boxes2}>
          <div className={styles.box}>
          <span>3</span>
                <p className={styles.title}>Verify Account</p>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi</p>
          </div>
          <div className={styles.box}>
          <span>4</span>
            <p className={styles.title}>Ready to Use!</p>
            <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi</p>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Verticalchooseus