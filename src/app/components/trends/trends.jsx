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
    titlecenter="Emerging Trends & Innovations"
    contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
    /> 
        <div className={styles.row}>
            <div className={styles.col}>
                <img src='assets/ETI1.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>Mobile Commerce</h2>
                    <p>Our professionals develop out-of-the-box ideas and ensure a workflow that meets the project’s key objectives.</p>
                </div>
            </div>
            <div className={styles.col}>
                <img src='assets/ETI2.png' />
                <div className={styles.heading}>
                    <h2>Social Commerce</h2>
                    <p>Our professionals develop out-of-the-box ideas and ensure a workflow that meets the project’s key objectives.</p>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <img src='assets/ETI3.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>AR Commerce</h2>
                    <p>Our professionals develop out-of-the-box ideas and ensure a workflow that meets the project’s key objectives.</p>
                </div>
            </div>
            <div className={styles.col}>
                <img src='assets/ETI4.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>Drop Shipping Commerce</h2>
                    <p>Our professionals develop out-of-the-box ideas and ensure a workflow that meets the project’s key objectives.</p>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <img src='assets/ETI6.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>Video Commerce</h2>
                    <p>Our professionals develop out-of-the-box ideas and ensure a workflow that meets the project’s key objectives.</p>
                </div>
            </div>
            <div className={styles.col}>
                <img src='assets/ETI5.png' width='100px' height='94px' />
                <div className={styles.heading}>
                    <h2>Voice Commerce</h2>
                    <p>Our professionals develop out-of-the-box ideas and ensure a workflow that meets the project’s key objectives.</p>
                </div>
            </div>
        </div>
        <div className={styles.trendfoot}>
            <p>Do you want to scale your e-commerce</p>
            <div className={styles.btngroup}>
            <Lightbutton title="Lets connect"/>
            <Darkbookbutton title1="Book a time"/>
        </div>
        </div>
    </div>
  )
}

export default Trends