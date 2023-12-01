'use client'
import React from 'react'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import styles from './subservices.module.css'

const Subservices = ({ subtitle, title, content, imageUrl}) => {
  return (
  <>
      <div className={styles.container}>
        <div className={styles.service}>
            <div className={styles.mainLeft}>
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className={styles.read}>
                    <Readmore/>
                </div>
            </div>
            <div className={styles.mainRight}>
                <img src='assets/hero.png' />
                <div className={styles.content}>
                        <div className={styles.bullet}>
                          <div><svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909"/>
                          </svg></div>
                          <div><p>Total control with full root access and optional control panels.</p></div>

                        </div> <div className={styles.bullet}>
                          <div><svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909"/>
                          </svg></div>
                          <div><p>Automated daily backups and on-demand snapshots.</p></div>

                        </div> <div className={styles.bullet}>
                          <div><svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909"/>
                          </svg></div>
                          <div><p>99.9% uptime guaranteed.</p></div>
                          
                        </div> <div className={styles.bullet}>
                          <div><svg  width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909"/>
                          </svg></div>
                          <div><p>99.9% uptime guaranteed.</p></div>
                        </div>
                </div>
            </div>
        </div>
</div>
 </>
  )
}

export default Subservices