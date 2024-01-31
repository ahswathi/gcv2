import Link from 'next/link'
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
    <div className={styles.storymain}>
    <div className={styles.main}>
      <div className={styles.story}>
          <img src="/assets/story/firstst.png" />
          <p>Dribble</p>
          <h3>Food Recipe & Ingredients Concept Recipe App</h3>
      </div>
      <div className={styles.story2}>
        <img src="/assets/story/secondst.png" />
        <p>Dribble</p>
            <h3>U2 Fashion Store| Fashion App | UI/UX design</h3>
        </div>
    </div>

    <div className={styles.main}>
      <div className={styles.story}>
          <img src="/assets/story/thirdst.png" />
          <p>Dribble</p>
          <h3>Watch Retail App E-Commerce Mobile App Buying and selling goods</h3>
      </div>
      <div className={styles.story2}>
        <img src="/assets/story/fourst.png" />
        <p>Dribble</p>
            <h3>Concept of Mobile App for order and delivery of Lamps</h3>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.story}>
          <img src="/assets/story/fifthst.png" />
          <p>Dribble</p>
          <h3>Kakud- Fertilizer & Pesticides E-commerce App | Mobile App</h3>
      </div>
      <div className={styles.story2}>
          <img src="/assets/story/sixthst.png" />
          <p>Dribble</p>
            <h3>Ajayal - E-commerce Mobile App Development | UI/UX design</h3>
      </div>
    </div>
    </div>
    <div className={styles.more}>  <div className={styles.read}>
                 <Link href='#'>   View more 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B"/>
</svg></Link>
                </div> </div>

    </div>
  )
}

export default workon
