import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './workon.module.css'
const workon = () => {
  return (
    <div className={styles.container}>
      <Mainheading
            titlecenter="We're working on"
            contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
            />
    <div className={styles.main}>
    <div className={styles.story}>
        <img src="/assets/story/firstst.png" />
        <p>Dribble</p>
        <h3>Food Recipe & Ingredients Concept Recipe App</h3>
    </div>
  <div className={`${styles.story} ${styles.design}`}>
    <img src="/assets/story/secondst.png" />
    <p>Dribble</p>
        <h3>U2 Fashion Store| Fashion App | UI/UX design</h3>
    </div>
    </div>
    <div className={styles.main}>
    <div className={`${styles.story} ${styles.designing}`}>
        <img src="/assets/story/thirdst.png" />
        <p>Dribble</p>
        <h3>Watch Retail App E-Commerce Mobile App Buying and selling goods</h3>
    </div>
  <div className={`${styles.story}`}>
    <img src="/assets/story/fourst.png" />
    <p>Dribble</p>
        <h3>Concept of Mobile App for order and delivery of Lamps</h3>
    </div>
    </div>
    <div className={styles.main}>
    <div className={`${styles.story} ${styles.designing}`}>
        <img src="/assets/story/fifthst.png" />
        <p>Dribble</p>
        <h3>Kakud- Fertilizer & Pesticides E-commerce App | Mobile App</h3>
    </div>
  <div className={`${styles.story}`}>
    <img src="/assets/story/sixthst.png" />
    <p>Dribble</p>
        <h3>Ajayal - E-commerce Mobile App Development | UI/UX design</h3>
    </div>
    </div>
    </div>
  )
}

export default workon
