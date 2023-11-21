'use client'
import React from 'react'
import Csbutton from '../casestudy/csbutton'
import Mainheading from '../mainheading/mainheading'
import styles from './portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={styles.container}>
    <Mainheading 
    titlecenter="Portfolio"
    contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
    /> 
      <div className={styles.row}>
        <div className={styles.imagecontainer}>
          <img src="assets/p1.png" alt="Image" className={styles.image}/>
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h3>Crazy Price Beds</h3>
              <p>Crazy Price Beds was founded in 2005 with the ambition of providing great designs and comfort to their c..</p>
              <div> 
                <Csbutton title=" Case study" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imagecontainer}>
          <img src="assets/p2.png" alt="Image" className={styles.image}/>
          <div className={styles.overlay}>
            <div className={styles.content}>
            <h3>Crazy Price Beds</h3>
              <p>Crazy Price Beds was founded in 2005 with the ambition of providing great designs and comfort to their c..</p>
              <div> 
                <Csbutton title=" Case study" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.imagecontainer}>
          <img src="assets/p3.png" alt="Image" className={styles.image}/>
          <div className={styles.overlay}>
            <div className={styles.content}>
            <h3>Crazy Price Beds</h3>
              <p>Crazy Price Beds was founded in 2005 with the ambition of providing great designs and comfort to their c..</p>
              <div> 
                <Csbutton title=" Case study" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imagecontainer}>
          <img src="assets/p4.png" alt="Image" className={styles.image}/>
          <div className={styles.overlay}>
            <div className={styles.content}>
            <h3>Crazy Price Beds</h3>
              <p>Crazy Price Beds was founded in 2005 with the ambition of providing great designs and comfort to their c..</p>
              <div> 
                <Csbutton title=" Case study" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio