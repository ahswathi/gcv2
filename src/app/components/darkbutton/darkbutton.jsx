import React from 'react'
import styles from './darkbutton.module.css'

const Darkbutton = ({ title, onClick}) => {
  return (
    <div onClick={onClick}>
       <a href="/contact" className={styles.button}>
       {title}
        </a>
    </div>
  )
}

export default Darkbutton