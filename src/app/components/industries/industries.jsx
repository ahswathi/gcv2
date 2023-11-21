import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './industries.module.css'

const Industries = () => {
  return (
  <>
  <Mainheading
 titlecenter="Industries we serve"
 contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
 /> 
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/Fashion.png' width='48px' height='48px' />
                    <h2>Fashion & Apparel</h2>
                    <p>the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog</p>
                    <span>Learn more</span>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-automotive-96.png' width='48px' height='48px' />
                    <h2>Health & Beauty</h2>
                    <p>the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog</p>
                    <span>Learn more</span>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-health-96.png' width='48px' height='48px' />
                    <h2>Food & Beverage</h2>
                    <p>the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog</p>
                    <span>Learn more</span>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-kawaii-soda-96.png' width='48px' height='48px' />
                    <h2>Manufacturing</h2>
                    <p>the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog</p>
                    <span>Learn more</span>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-manufacturing-96.png' width='48px' height='48px' />
                    <h2>Automotive</h2>
                    <p>the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog</p>
                    <span>Learn more</span>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-oil-industry-96.png' width='48px' height='48px' />
                    <h2>CBD</h2>
                    <p>the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog</p>
                    <span>Learn more</span>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Industries