import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './newchooseus.module.css'
import Darkbutton from '../darkbutton/darkbutton'

const Newchooseus = () => {
  return (
      <>
    <div className={styles.container}>
      <div className={styles.contentleft}>
            <h2>What makes Explo Commerce work for your business?</h2>
            <p>The convergence of emerging technology with the latest innovative e-commerce applications makes a world of difference to online sellers. The applications enable the product and service construct to seamlessly blend with customer preferences and stimulate them to commit.    </p>
            <div>
              <Darkbutton title="Lets connect"/>
            </div>
      </div>
    <div className={styles.boxes}>
        <div className={styles.boxes1}>
          <div className={styles.box}>
            <span>1</span>
            <p className={styles.title}>Login or Sign Up</p>
            <p className={styles.para}>Use your user address and password to log in.</p>
          </div>
          <div className={styles.box}>
          <span>2</span>
                <p className={styles.title}>Verify Account</p>
                <p className={styles.para}>Verify your account.</p>
          </div>
        </div>
        <div className={styles.boxes2}>
          <div className={styles.box}>
          <span>3</span>
                <p className={styles.title}>Verify Account</p>
                <p className={styles.para}>Verify your account.</p>
         </div>
          <div className={styles.box}>
          <span>4</span>
            <p className={styles.title}>Ready to Use!</p>
            <p className={styles.para}>Start using</p>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Newchooseus