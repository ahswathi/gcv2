'use client'
import React from 'react'
import styles from './newcasestudies.module.css'
import Mainheading from '../mainheading/mainheading'
import cta1 from '../../../../public/assets/MandM.png'
import cta2 from '../../../../public/assets/electrowiz.png'
import cta3 from '../../../../public/assets/showfocus.png'
import cta4 from '../../../../public/assets/kingster.png'
import Image from 'next/image'
import Link from 'next/link'

const Newcasestudies = () => {
  return (
    <div className={styles.container}>
        
        <Mainheading 
        titlecenter="Case Studies"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        /> 
        <div className={styles.box}>
          <div className={styles.contentmain}>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Missy & Moppet</h2>
                  <p>Uniting teams to build a top-notch omnichannel shopping experience.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span>
                    <span>Native App</span>
                  </div>
                </div>
              </div>
              <div className={styles.contentright}>
                  <Image src={cta1} 
                  />
              </div>
          </div>
   
          <div className={styles.contentmain}>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Furniture Web Design</h2>
                  <p>Building a single housekeeping application to make the lives of both clients and personnel a lot easier.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span>
                    <span>Native App</span>
                  </div>
                </div>
              </div>
              <div className={styles.contentright}>
                  <Image src={cta2} 
                  />
              </div>
          </div>
         
          <div className={styles.contentmain}>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Furniture Web Design</h2>
                  <p>Building a single housekeeping application to make the lives of both clients and personnel a lot easier.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span>
                    <span>Native App</span>
                  </div>
                </div>
              </div>
              <div className={styles.contentright}>
                  <Image src={cta3} 
                  />
              </div>
          </div>
     
          <div className={styles.contentmain}>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Restaurant</h2>
                  <p>Building a single housekeeping application to make the lives of both clients and personnel a lot easier.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span>
                    <span>Native App</span>
                  </div>
                </div>
              </div>
              <div className={styles.contentright}>
                  <Image src={cta4} 
                  />
              </div>
          </div>
          <div className={styles.more}>{/* <p>View more </p> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.4556 8.20808C17.8462 7.81756 17.8462 7.18439 17.4556 6.79387L11.0917 0.429909C10.7012 0.0393844 10.068 0.0393844 9.67747 0.429909C9.28694 0.820433 9.28694 1.4536 9.67747 1.84412L15.3343 7.50098L9.67747 13.1578C9.28694 13.5484 9.28694 14.1815 9.67747 14.572C10.068 14.9626 10.7012 14.9626 11.0917 14.572L17.4556 8.20808ZM0.748535 8.50098H16.7485V6.50098H0.748535V8.50098Z" fill="#090909"/>
</svg> */}
    <div className={styles.read}>
                    <Link href='#'>   View more 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                    <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#090909"/>
                  </svg></Link>
                    </div> 
</div>
        </div>
    </div>
  )
}

export default Newcasestudies