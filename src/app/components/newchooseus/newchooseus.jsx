import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './newchooseus.module.css'

const Newchooseus = () => {
  return (
      <>
    <div className={styles.container}>
      <div className={styles.heading}>
            <h2>Why Choose Us?</h2>
            <p>Being an expert partner with a strong understanding of Shopify, we have the perfect team with the mix of Shopify design,
             marketing and development skills to build world-class eCommerce stores!</p>
            <div>
                <a className={styles.button}>
                    Let's Connect
                </a>
          </div>
      </div>
    
      <div className={styles.rowmain}>
        <div className={styles.row}>
            <div className={styles.col}>
                    <h2>100% Hosted eCommerce Platform</h2>
                    <div className={styles.line}></div>
            </div>
            <div className={styles.col}>
                    <h2>100% Hosted eCommerce Platform</h2>
                    <div className={styles.line}></div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                    <h2>100% Hosted eCommerce Platform</h2>
                    <div className={styles.line}></div>
            </div>
            <div className={styles.col}>
                    <h2>100% Hosted eCommerce Platform</h2>
                    <div className={styles.line}></div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                    <h2>100% Hosted eCommerce Platform</h2>
                    <div className={styles.line}></div>
            </div>
            <div className={styles.col}>
                    <h2>100% Hosted eCommerce Platform</h2>
                    <div className={styles.line}></div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                    <h2>100% Hosted eCommerce Platform</h2>
                    <div className={styles.line}></div>
            </div>
            <div className={styles.col}>
                    <h2>100% Hosted eCommerce Platform</h2>
                    <div className={styles.line}></div>
            </div>
        </div>
    </div>

    </div>
    </>
  )
}

export default Newchooseus