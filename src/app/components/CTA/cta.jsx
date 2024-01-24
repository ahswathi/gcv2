'use client'
import Image from 'next/image'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import styles from './cta.module.css'
import cta from '../../../../public/assets/cta.png'

const CTA = ( ) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.contentleft}>
                <h2>Find the perfect person <br/> every time</h2>
                <p>Get unlimited design inspirations. Level up your design.</p>
                <div> 
                {/* <a className={styles.button}>
                Lets connect
                </a> */}<Darkbutton title="Lets connect"/>
                </div>
            </div>
            
            <div className={styles.contentright}>
                <Image src={cta} 
                 />
            </div>
        </div>
    </div>
  )
}

export default CTA