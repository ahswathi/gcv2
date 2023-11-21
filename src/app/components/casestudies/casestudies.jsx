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

export default Casestudies