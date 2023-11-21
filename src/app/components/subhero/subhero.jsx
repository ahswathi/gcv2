'use client'
import React from 'react'
import styles from './subhero.module.css'
import Link from 'next/link';
import Darkbutton from '../darkbutton/darkbutton';


const Subhero = () => {
  return (
    <div className={styles.container}> 
        <div className={styles.quicknav}>
          <Link href="/" className={styles.main}>
            Home
          </Link>
          <span>/</span>
          <Link href="/ourstory"  className={styles.sub}>
            Our Story
          </Link>
        </div>
        <div className={styles.container2}> 
          <div className={styles.heading}>We build digital commerce that perform.</div>
          <div> 
            <Darkbutton title="Lets Connect" />
          </div>
        </div>
    </div>
  )
}

export default Subhero