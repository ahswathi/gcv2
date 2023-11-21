import React from 'react'
import styles from './process.module.css'
import Mainheadingdark from '../mainheadingdark/mainheadingdark'

const Process = () => {
  return (
     <>
    <div className={styles.container}>
       <Mainheadingdark 
    titlecenter="Process"
    contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
    /> 
      <div className={styles.main}>
         <div className={styles.row}>
               <div className={styles.col}>
                  <div className={styles.cardactive}>
                  </div>
                     <div className={styles.details}>
                        <span>01</span>
                        <h2>Design</h2>
                        <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est. Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo.</p>
                     </div>
               </div>   
               <div className={styles.col}>
                  <div className={styles.card}>
                  </div>
                     <div className={styles.details}>
                        <span>02</span>
                        <h2>Development</h2>
                        <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est. Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo.</p>
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
                        <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est. Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo.</p>
                     </div>
               </div>   
               <div className={styles.col}>
                  <div className={styles.card}>
                  </div>
                     <div className={styles.details}>
                        <span>04</span>
                        <h2>Testing & Launch</h2>
                        <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est. Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo.</p>
                     </div>
               </div>   
         </div>
         
      </div>
    </div>
    </>
  )
}

export default Process