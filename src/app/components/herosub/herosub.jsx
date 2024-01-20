'use client'
import React from 'react'
import Estimate from '../estimate/estimate'
import Letstalk from '../letstalk/letstalk'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import styles from './herosub.module.css'
import Link from 'next/link';

const Herosub = ({subtitle, title, imageUrl, content, bg}) => {
  return (
  <>
    
      <div className={styles.container}>
      <div className={styles.quicknav}>
          <Link href="/" className={styles.sub}>
            Home
          </Link>
          <span>/</span>
          <div className={styles.main}>
            Solutions
          </div>
          <span>/</span>
          <div className={styles.main}>
            Development
          </div>
          {/* <span>/</span>
          <Link href="/shopify"  className={styles.sub}>
            websit ui and ux
          </Link> */}
        </div>
        <div className={styles.service} style={{background: `${bg}`}}>
            <div className={styles.mainLeft}>
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className={styles.read}>
                    <Letstalk/>
                    <Estimate/>
                </div>
            </div>
            <div className={styles.mainRight}>
              <img src={imageUrl} />
            </div>
        </div>
      
</div>
 </>
  )
}

export default Herosub