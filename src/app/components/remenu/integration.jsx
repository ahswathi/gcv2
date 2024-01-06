import React from 'react'
import styles from './remenu.module.css'

const integration = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <p className={styles.ptag}>Payment gateway</p>
        <p className={styles.links}><a href="#">Shipping</a></p>
        <p className={styles.links}><a href="#">Chatbotx</a></p>
        <p className={styles.links}><a href="#">CRM</a></p>
</div>
    </div>
  )
}

export default integration
