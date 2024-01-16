import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './newchooseus.module.css'

const Newchooseus = () => {
  return (
      <>
    <div className={styles.container}>
      <div className={styles.heading}>
            <h2>Why Choose Us?</h2>
            <p>Being an expert partner with a strong understanding of Shopify, we have the perfect team with the mix of Shopify design, marketing and development skills to build world-class eCommerce stores!</p>
            <div>
                <a className={styles.button}>
                    Let's Connect
                </a>
          </div>
      </div>
    <div className={styles.boxes}>
        <div className={styles.box}>
          <span>1</span><br />
          <p className={styles.title}>Login or Sign Up</p><br />
          <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi</p>
        </div>
    <div className={styles.box}>
    <span>2</span><br />
          <p className={styles.title}>Verify Account</p><br />
          <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi</p>
    </div>
    <div className={styles.box}>
    <span>3</span><br />
          <p className={styles.title}>Verify Account</p><br />
          <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi</p>
    </div>
        <div className={styles.box}>
        <span>4</span><br />
          <p className={styles.title}>Ready to Use!</p><br />
          <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Newchooseus