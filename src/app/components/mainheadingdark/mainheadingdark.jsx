import React from 'react'
import styles from './mainheadingdark.module.css'

const Mainheadingdark = ({ titlecenter, contentcenter }) => {
  return (
    <div className={styles.container}>
        <h2>{titlecenter}</h2>
        <p>{contentcenter}</p>
    </div>
  )
}

export default Mainheadingdark