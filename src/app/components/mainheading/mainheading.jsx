import React from 'react'
import styles from './mainheading.module.css'

const Mainheading = ({ titlecenter, contentcenter }) => {
  return (
    <div className={styles.container}>
        <h2>{titlecenter}</h2>
        <p>{contentcenter}</p>
    </div>
  )
}

export default Mainheading