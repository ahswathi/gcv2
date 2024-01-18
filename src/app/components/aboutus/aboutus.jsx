import React from 'react'
import styles from './about.module.css'
import Link from 'next/link';
import Darkbutton from '../darkbutton/darkbutton';

const aboutus = ({title, heading}) => {
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
      <div className={styles.heading}>{heading}</div>
      <div className={styles.title}>{title}</div>
        <Darkbutton title="Lets Connect" />
    </div>
</div>
  )
}

export default aboutus
