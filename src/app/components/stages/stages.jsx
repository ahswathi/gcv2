'use client'
import React from 'react'
import styles from './stages.module.css'
import Mainheading from '../mainheading/mainheading'
import cta1 from '../../../../public/assets/casestudies11.png'
import cta2 from '../../../../public/assets/casestudies12.png'
import cta3 from '../../../../public/assets/casestudies13.png'
import Image from 'next/image'

const Stages = () => {
  return (
    <div className={styles.container}>
        
        <Mainheading 
        titlecenter="We Support All Stages"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        /> 
        <div className={styles.box}>
          <div className={styles.contentmain}>
              
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Small (Early Stage)</h2>
                </div>
                <div className={styles.contentright}>
                  <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7608 16.4561C13.5702 17.5282 11.7358 17.4321 10.6637 16.2414L0.979563 5.48605C-0.712702 3.6066 0.642559 0.612647 3.17142 0.643957L24.5073 0.908134C27.148 0.94083 28.3751 4.19785 26.4126 5.96496L14.7608 16.4561Z" fill="#0AA8E5" fill-opacity="0.93"/>
                    </svg>
                </div>
              </div>
          </div>

          <div className={styles.contentmain}>
              <div className={styles.contentright}>
                  <Image src={cta2} 
                  />
              </div>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Grocery Shop</h2>
                  <p>Uniting teams to build a top-notch omnichannel shopping experience.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span>
                    <span>Native App</span>
                  </div>
                </div>
              </div>
          </div>
          
          <div className={styles.contentmain}>
              <div className={styles.contentright}>
                  <Image src={cta2} 
                  />
              </div>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Grocery Shop</h2>
                  <p>Uniting teams to build a top-notch omnichannel shopping experience.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span>
                    <span>Native App</span>
                  </div>
                </div>
              </div>
          </div>

          <div className={styles.contentmain}>
              <div className={styles.contentright}>
                  <Image src={cta3} 
                  />
              </div>
              <div className={styles.main}>
                <div className={styles.content}>
                  <h2>Grocery Shop</h2>
                  <p>Uniting teams to build a top-notch omnichannel shopping experience.</p>
                  <div className={styles.content2}>
                    <span>Ecommerce</span>
                    <span>Native App</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Stages