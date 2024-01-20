import React from 'react'
import styles from './subchoose.module.css'
import Mainheading from '../mainheading/mainheading'

const Subchoose = () => {
  return (
    <div className={styles.container}>
      <Mainheading
        titlecenter="Why Choose Us?"
        contentcenter='Being an expert partner with a strong understanding of Shopify, we have the perfect team with the mix of Shopify design, marketing and development skills to build world-class eCommerce stores!'
        />
        <div className={styles.main}>
        <div className={styles.mainleft}>
            <div className={styles.topic}>
                <div className={styles.icon}>
                    <img src="/assets/icons/icon1.png" style={{objectFit: 'cover'}} />
                </div>
                <div className={styles.content}>
                    <h5>Login or Sign Up</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi
                </div>
            </div>
            <div className={styles.topic}>
                <div className={styles.icon}>
                    <img src="/assets/icons/icon2.png" style={{objectFit: 'cover'}} />
                </div>
                <div className={styles.content}>
                    <h5>Verify Account</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi
                </div>
            </div>
            <div className={styles.topic}>
                <div className={styles.icon}>
                    <img src="/assets/icons/icon3.png" style={{objectFit: 'cover'}} />
                </div>
                <div className={styles.content}>
                    <h5>Create Product</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi
                </div>
            </div>
            <div className={styles.topic}>
                <div className={styles.icon}>
                    <img src="/assets/icons/icon4.png" style={{objectFit: 'cover'}} />
                </div>
                <div className={styles.content}>
                    <h5>Ready to Use!</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi
                </div>
            </div>
        </div>
        <div className={styles.mainright}>
            <img src='/assets/icons/women.png' />
        </div>
        </div>
    </div>
  )
}

export default Subchoose
