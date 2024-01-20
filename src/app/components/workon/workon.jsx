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
    
    <div className={styles.more}><p>View more </p> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.4556 8.20808C17.8462 7.81756 17.8462 7.18439 17.4556 6.79387L11.0917 0.429909C10.7012 0.0393844 10.068 0.0393844 9.67747 0.429909C9.28694 0.820433 9.28694 1.4536 9.67747 1.84412L15.3343 7.50098L9.67747 13.1578C9.28694 13.5484 9.28694 14.1815 9.67747 14.572C10.068 14.9626 10.7012 14.9626 11.0917 14.572L17.4556 8.20808ZM0.748535 8.50098H16.7485V6.50098H0.748535V8.50098Z" fill="#1E222B"/>
</svg></div>

    </div>
  )
}

export default workon
