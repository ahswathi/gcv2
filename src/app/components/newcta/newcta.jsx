'use client'
import Image from 'next/image'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import styles from './newcta.module.css'
// Darkbutt
const Newcta = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
       <img src='/assets/icons/tea.png' alt="" />
       </div>
       <div className={styles.right}>
        <h2>Find the perfect person every time</h2>
        <p>Get unlimited design inspirations. Level up your design.</p><br />
        <Darkbutton title="let's connect" />
       </div>
    </div>
  )
}

export default Newcta
