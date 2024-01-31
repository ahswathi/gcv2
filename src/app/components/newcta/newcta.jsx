'use client'
import Image from 'next/image'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import styles from './newcta.module.css'
// Darkbutt
const Newcta = () => {
  return (
     <div className={styles.container}>
      <div className={styles.content}>

    <div className={styles.contentright}>
                  <img src='/assets/icons/tea.png' alt="" />
              </div>
          <div className={styles.contentleft}>
              <h2>Find the perfect person <br/> every time</h2>
              <p>Get unlimited design inspirations. Level up your design.</p>
              <div> 
                <Darkbutton title="Lets connect"/>
              </div>
          </div>
          
      </div>
  </div>
  )
}

export default Newcta
