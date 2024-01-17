import React from 'react'
import styles from './remenu.module.css'
import Link from 'next/link'

const integration = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <p className={styles.ptag}>Payment gateway</p>
        <p className={styles.links}><Link href="#">Shipping</Link></p>
        <p className={styles.links}><Link href="#">Chatbotx</Link></p>
        <p className={styles.links}><Link href="#">CRM</Link></p>
</div>
    </div>
  )
}

export default integration
