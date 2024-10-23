import React from 'react'
import styles from './process.module.css'
import Mainheadingdark from '../mainheadingdark/mainheadingdark'

const Process = () => {
  return (
     <>
    <div className={styles.container}>
       <Mainheadingdark 
    titlecenter="Process"
    contentcenter="By involving the most efficient, robust systems and processes, a quality end product is a natural outcome."
    /> 
      <div className={styles.main}>
         <div className={styles.row}>
               <div className={styles.col}>
                  <div className={styles.cardactive}>
                  </div>
                     <div className={styles.details}>
                        <span>01</span>
                        <h2>Design</h2>
                        <p>Incorporate the best designs that blend well with customers. Choose from the range of Operating Systems (OS).</p>
                     </div>
               </div>   
               <div className={styles.col}>
                  <div className={styles.card}>
                  </div>
                     <div className={styles.details}>
                        <span>02</span>
                        <h2>Development</h2>
                        <p>Build and operate applications at your convenience. Choose from the range of Operating Systems (OS).</p>
                     </div>
               </div>   
         </div>
         <div className={styles.row}>
               <div className={styles.col}>
                  <div className={styles.card}>
                  </div>
                     <div className={styles.details}>
                        <span>03</span>
                        <h2>Deployment</h2>
                        <p>Enable proficiency in the process, and deploy efficient systems.</p>
                     </div>
               </div>   
               <div className={styles.col}>
                  <div className={styles.card}>
                  </div>
                     <div className={styles.details}>
                        <span>04</span>
                        <h2>Testing & Launch</h2>
                        <p>Endure the applications with rigorous testing before launching.</p>
                     </div>
               </div>   
         </div>
         
      </div>
    </div>
    </>
  )
}

export default Process