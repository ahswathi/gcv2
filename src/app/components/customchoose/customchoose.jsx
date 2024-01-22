import React from 'react'
import styles from './custom.module.css'
import Mainheading from '../mainheading/mainheading'
const CustomChoose = () => {
  return (
    <div className={styles.container}>
      <Mainheading 
        titlecenter="Why Choose Us?"
        contentcenter="Being an expert partner with a strong understanding of Shopify, we have the perfect team with the mix of Shopify design, marketing and development skills to build world-class eCommerce stores!"
        />
        <div className={styles.main}>
            <div className={styles.topic}>
                <div className={styles.icon}>
                    <img src="/assets/icons/icon1.png" style={{objectFit: 'cover'}} />
                </div>
                <div className={styles.content}>
                    <h5>Login or Sign Up</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi                
                </div>
            </div>

            <div className={styles.topic}>
                <div className={styles.icon}>
                    <img src="/assets/icons/icon1.png" style={{objectFit: 'cover'}} />
                </div>
                <div className={styles.content}>
                    <h5>Login or Sign Up</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi                
                </div>
            </div>

            <div className={styles.topic}>
                <div className={styles.icon}>
                    <img src="/assets/icons/icon1.png" style={{objectFit: 'cover'}} />
                </div>
                <div className={styles.content}>
                    <h5>Login or Sign Up</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi                
                </div>
            </div>

            <div className={styles.topic}>
                <div className={styles.icon}>
                    <img src="/assets/icons/icon1.png" style={{objectFit: 'cover'}} />
                </div>
                <div className={styles.content}>
                    <h5>Login or Sign Up</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi                
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomChoose
