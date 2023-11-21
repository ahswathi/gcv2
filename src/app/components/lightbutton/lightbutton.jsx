import React from 'react'
import styles from './lightbutton.module.css'

const Lightbutton = ({ title}) => {
  return (
    <div>
       <a className={styles.button}>
       {title}
        </a>
    </div>
  )
}

export default Lightbutton