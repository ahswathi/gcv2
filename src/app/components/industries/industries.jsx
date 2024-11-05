import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './industries.module.css'

const Industries = () => {
  return (
  <>
  <Mainheading
 titlecenter="Industries we serve"
 contentcenter="Explo Commerce develops applications that are compatible and agile for different types of industries."
 /> 
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/Fashion.png' width='48px' height='48px' />
                    <h2>Fashion & Apparel</h2>
                    <p>Deploying applications that are pertinent to the E-commerce fashion and apparel industry is significant as it will assist the business in its growth cycle. The dynamics and challenges keep changing in the world of business, irrespective of the business category. Explo Commerce brings its competency and proficiency with compatible applications and solutions.</p>
                    {/* <span>Learn more</span> */}
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-health-96.png' width='48px' height='48px' />
                    <h2>Health & Beauty</h2>
                    <p>The category of Health & Beauty brings with it a host of challenges for the e-commerce application; a thorough understanding of the category is essential to develop and deploy applications that deliver on the challenges. Explo Commerce ecommerce applications come with great compatibility and they adapt to deliver at the right time. </p>
                    {/* <span>Learn more</span> */}
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    {/* <img src='assets/icons8-health-96.png' width='48px' height='48px' /> */}
                    <img src='assets/icons8-kawaii-soda-96.png' width='48px' height='48px' />
                    <h2>Food & Beverage</h2>
                    <p>Food and beverages offer the most elaborate and comprehensive varieties, the segment is well-diversified and has many sub-categories that are equally diversified to satiate the growing hunger pangs of the consumer. Explo Commerce applications are well-suited to deliver solutions based on the category.</p>
                    {/* <span>Learn more</span> */}
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                <img src='assets/icons8-manufacturing-96.png' width='48px' height='48px' />
                    <h2>Manufacturing</h2>
                    <p>Manufacturing industries are largely dependent on sourcing raw materials, managing inventory, and delivering the end products on time. The e-commerce application should typically assist in the entire process and enable the company to manage its operations efficiently. Explo Commerce and its set of applications deliver agility and scalability for the manufacturing industry and help it to scale higher. </p>
                    {/* <span>Learn more</span> */}
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                <img src='assets/icons8-automotive-96.png' width='48px' height='48px' />
                    <h2>Automotive</h2>
                    <p>The automotive industry has undergone rapid changes and its set of challenges has multiplied in the last decade. Managing inventory, maintaining quality standards, and building a quality automobile are some of the top objectives of an automotive company. The e-commerce application should empower the entire process and induce efficiency in the process. Explo Commerce delivers applications that are ideal and suitable for this process. </p>
                    {/* <span>Learn more</span> */}
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-oil-industry-96.png' width='48px' height='48px' />
                    <h2>Real-estate</h2>
                    <p>the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog</p>
                    {/* <span>Learn more</span> */}
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Industries