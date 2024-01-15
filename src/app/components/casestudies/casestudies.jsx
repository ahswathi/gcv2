'use client'
import React from 'react'
import styles from './casestudies.module.css'
import Mainheading from '../mainheading/mainheading'
import cta1 from '../../../../public/assets/casestudies11.png'
import cta2 from '../../../../public/assets/casestudies12.png'
import cta3 from '../../../../public/assets/casestudies13.png'
import Image from 'next/image'

const Casestudies = () => {
  return (
    <div className={styles.container}>
        
        <Mainheading 
        titlecenter="Case Studies"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        /> 
        <div className={styles.box}>
          <div className={styles.contentmain}>
              <div className={styles.contentright}>
                  <Image src={cta1} 
                  />
              </div>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Grocery Shop</h2>
                  <p>Uniting teams to build a top-notch omnichannel shopping experience.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span><br className={styles.hidden} />
                    <span>Native App</span>
                  </div>
                </div>
              </div>
          </div>
    <br />
          <div className={styles.contentmain}>
              <div className={styles.contentright}>
                  <Image src={cta2} 
                  />
              </div>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Furniture Web Design</h2>
                  <p>Building a single housekeeping application to make the lives of both clients and personnel a lot easier.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span><br className={styles.hidden} />
                    <span>Native App</span>
                  </div>
                </div>
              </div>
          </div>
          <br />
          <div className={styles.contentmain}>
              <div className={styles.contentright}>
                  <Image src={cta2} 
                  />
              </div>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Furniture Web Design</h2>
                  <p>Building a single housekeeping application to make the lives of both clients and personnel a lot easier.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span><br className={styles.hidden} />
                    <span>Native App</span>
                  </div>
                </div>
              </div>
          </div>
      <br />
          <div className={styles.contentmain}>
              <div className={styles.contentright}>
                  <Image src={cta3} 
                  />
              </div>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Restaurant</h2>
                  <p>Building a single housekeeping application to make the lives of both clients and personnel a lot easier.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span><br className={styles.hidden} />
                    <span>Native App</span>
                  </div>
                </div>
              </div>
          </div>
          <div className={styles.more}><p>View more </p> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.4556 8.20808C17.8462 7.81756 17.8462 7.18439 17.4556 6.79387L11.0917 0.429909C10.7012 0.0393844 10.068 0.0393844 9.67747 0.429909C9.28694 0.820433 9.28694 1.4536 9.67747 1.84412L15.3343 7.50098L9.67747 13.1578C9.28694 13.5484 9.28694 14.1815 9.67747 14.572C10.068 14.9626 10.7012 14.9626 11.0917 14.572L17.4556 8.20808ZM0.748535 8.50098H16.7485V6.50098H0.748535V8.50098Z" fill="#1E222B"/>
</svg></div>
        </div>
    </div>
  )
}

export default Casestudies