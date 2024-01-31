import React from 'react'
import styles from './darkbookbutton.module.css'

const Darkbookbutton = ({ title1, onClick}) => {
  return (
    <div onClick={onClick}>
       <a className={styles.button}>
       {title1}
        </a>
    </div>
  )
}

export default Darkbookbutton