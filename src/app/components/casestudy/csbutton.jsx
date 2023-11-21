import React from 'react'
import styles from './csbutton.module.css'

const Csbutton = ({ title}) => {
  return (
    <div>
       <a className={styles.button}>
       {title}
        </a>
    </div>
  )
}

export default Csbutton