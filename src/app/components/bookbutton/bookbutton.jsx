import React from 'react'
import styles from './bookbutton.module.css'

const Bookbutton = ({ title1, onClick}) => {
  return (
    <div onClick={onClick}>
       <a className={styles.button}>
       {title1}
        </a>
    </div>
  )
}

export default Bookbutton