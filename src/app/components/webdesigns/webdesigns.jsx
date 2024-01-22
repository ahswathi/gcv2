import React from 'react'
import styles from './webdesigns.module.css'
import Mainheading from '../mainheading/mainheading'
const WebDesigns = () => {
  return (
    <div className={styles.container}>
      <Mainheading
        titlecenter="Sub Services"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        />
        <div className={styles.main}>
            <div className={styles.service}>
                <img src='/assets/icons/sub.png' />
                <h2>Shopify web development</h2>
                <p>Represent multiple buyers and locations with unique payment terms and user permissions.</p>
                <a href='#'>Learn more...</a>
            </div>
            <div className={styles.service}>
                <img src='/assets/icons/sub.png' />
                <h2>Shopify theme customization</h2>
                <p>Represent multiple buyers and locations with unique payment terms and user permissions.</p>
                <a href='#'>Learn more...</a>
            </div>
            <div className={styles.service}>
                <img src='/assets/icons/sub.png' />
                <h2>Shopify Maintenance and Support</h2>
                <p>Represent multiple buyers and locations with unique payment terms and user permissions.</p>
                <a href='#'>Learn more...</a>
            </div>
        </div>
    </div>
  )
}

export default WebDesigns
