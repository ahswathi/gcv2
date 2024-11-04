'use client'
import React from 'react'
import Bookbutton from '../bookbutton/bookbutton'
import Darkbookbutton from '../darkbookbutton/darkbookbutton'
import Darkbutton from '../darkbutton/darkbutton'
import Readmore from '../readbutton/readbutton'
import styles from './newintegration.module.css'

const Integration = ({ subtitle, title, content, growi, growi2, growi3, growi4, growi5, growi6,}) => {
  return (
      <div className={styles.outercont}>
             <div className={styles.container}>
                <div className={styles.contentleft}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <div className={styles.buttons}>
                    <Darkbutton title="Lets connect"/>
                  {/*   <Bookbutton title1="Book a time"/> */}
                    </div>
                </div>
                <div className={styles.mainRight}>
                    <div className={styles.mainRight1}>
                        <div className={styles.techicon}>
                            <img src={growi} />
                            <span>Ship Rocket</span>
                        </div>
                        <div className={styles.techicon}>
                            <img src={growi2} />
                            <span>CC Avenue</span>
                        </div>
                        <div className={styles.techicon}>
                            <img src={growi3} />
                            <span>Paytm</span>
                        </div>
                    </div>
                    <div className={styles.mainRight2}>
                        <div className={styles.techicon}>
                            <img src={growi4} />
                            <span>Razor Pay</span>
                        </div>
                        <div className={styles.techicon}>
                            <img src={growi5} />
                            <span>Phonepay</span>
                        </div>
                        <div className={styles.techicon}>
                            <img src={growi6} />
                            <span>Paypal</span>
                        </div>
                    </div>
                </div>
            </div>
</div>
  )
}

export default Integration