'use client'
import React from 'react'
import Darkbookbutton from '../darkbookbutton/darkbookbutton'
import Lightbutton from '../lightbutton/lightbutton'
import Mainheadingdark from '../mainheadingdark/mainheadingdark'
import styles from './trends.module.css'

const Trends = () => {
  return (
    <div className={styles.container}> 
    <Mainheadingdark 
    titlecenter="Modern and Innovative emerging trends"
    contentcenter="Explo Commerce delivers end-to-end solutions in the emerging e-commerce industry. Choose from the various services that are detailed below."
    /> 
        <div className={styles.row}>
            <div className={styles.col}>
                <img src='assets/ETI1.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>Mobile Commerce</h2>
                    <p>Create responsive designs that instil self-assurance and utility value in the end customers. Build applications that enhance usage from different types of customers to deliver the utmost satisfaction.</p>
                </div>
            </div>
            <div className={styles.col}>
                <img src='assets/ETI2.png' />
                <div className={styles.heading}>
                    <h2>Social Commerce</h2>
                    <p>Take the challenge onto the social media platforms as many customers prefer to buy products on the platforms. Build applications that help scale up the selling process and establish your brand on various social media platforms.</p>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <img src='assets/ETI3.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>AR Commerce</h2>
                    <p>Interacting and viewing virtual products in a real-world environment is a different experience, create a high impact in the world of Augmented Reality by developing applications that boost product features and influence the customer’s mind.</p>
                </div>
            </div>
            <div className={styles.col}>
                <img src='assets/ETI4.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>Drop Shipping Commerce</h2>
                    <p>Enable yourself to sell products without creating inventory. Build applications that empower to drop shop efficiently and grow the sales cycle.  </p>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <img src='assets/ETI6.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>Video Commerce</h2>
                    <p>Deliver a great shopping experience to your customers with high-impact videos on products and services.</p>
                </div>
            </div>
            <div className={styles.col}>
                <img src='assets/ETI5.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>Voice Commerce</h2>
                    <p>Build efficiency in the sales process by leveraging voice-enabled technologies and digital assistants for customer interaction.</p>
                </div>
            </div>
        </div>
        <div className={styles.trendfoot}>
            <p>Looking forward to scaling up your e-commerce website</p>
            <div className={styles.btngroup}>
            <Lightbutton title="Let's connect"/>
            <Darkbookbutton title1="Book a slot"/>
        </div>
        </div>
    </div>
  )
}

export default Trends