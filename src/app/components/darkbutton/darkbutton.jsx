import React from 'react'
import styles from './darkbutton.module.css'

const Darkbutton = ({ title}) => {
  return (
    <div>
       <a className={styles.button}>
       {title}
        </a>
    </div>
  )
}

export default Darkbutton