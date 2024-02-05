'use client'
import React from 'react'
import Estimate from '../estimate/estimate'
import Letstalk from '../letstalk/letstalk'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import styles from './breadcrumbs.module.css'
import Link from 'next/link';

const breadcrumbs = ({mainlink, href}) => {
  return (
  <>
    
      <div className={styles.container}>
      <div className={styles.quicknav}>
          <Link href="/" className={styles.sub}>
            Home
          </Link>
          <span>/</span>
          <Link href={href} className={styles.sub}>
           {mainlink}
          </Link>
        </div>
      
</div>
 </>
  )
}

export default breadcrumbs