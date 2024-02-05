import React from 'react'
import styles from './remenu.module.css'
import Link from 'next/link'
const design = ({handleClose}) => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
       {/*  <p className={styles.ptag}>E-commerce UI/UX design services </p> */}
        <p className={styles.ptag}><Link onClick={() =>handleClose()} href="/services/ecommerceuiux">Website ui and ux</Link></p>
        <p className={styles.links}><Link onClick={() =>handleClose()} href="/services/websiteuiux">Website ui and ux</Link></p>
        <p className={styles.links}><Link onClick={() =>handleClose()} href="/services/mobileuiux">Mobile ui and ux</Link></p>
      </div>
    </div>
  )
}

export default design
