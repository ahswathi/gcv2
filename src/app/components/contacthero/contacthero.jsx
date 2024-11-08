import React from 'react'
import styles from './contacthero.module.css'
import Link from 'next/link';
import Darkbutton from '../darkbutton/darkbutton';

const contacthero = ({title, heading}) => {
  return (
    <div className={styles.container}> 
    <div className={styles.quicknav}>
      <Link href="/" className={styles.main}>
        Home
      </Link>
      <span>/</span>
      <Link href="/contact"  className={styles.sub}>
        Contact
      </Link>
    </div>
    <div className={styles.container2}> 
      <div className={styles.heading}>{heading}</div>
      <div className={styles.title}>{title}</div>
       {/*  <Darkbutton title="Lets Connect" /> */}
    </div>
</div>
  )
}

export default contacthero
