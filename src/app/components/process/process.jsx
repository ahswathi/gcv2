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
                        {/* <p>Incorporate the best designs that blend well with customers. Choose from the range of Operating Systems (OS).</p> */}
                        <p>Transform ideas into visually appealing and user-centric designs by researching audience needs, brainstorming creative concepts, and iterating based on feedback to achieve an intuitive, engaging experience.
                        </p>
                     </div>
                  </div>
                  <div className={styles.col}>
                     <div className={styles.card}>
                     </div>
                     <div className={styles.details}>
                        <span>02</span>
                        <h2>Development</h2>
                        {/* <p>Build and operate applications at your convenience. Choose from the range of Operating Systems (OS).</p> */}
                        <p>Turn designs into functional applications by coding, testing, and optimizing performance. Leverage collaborative tools to streamline development and ensure seamless integration across platforms.
                        </p>
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
                        <p>Prepare applications for launch by refining, securing, and deploying across chosen environments. Monitor performance post-launch and gather user feedback for continual improvement.
                        </p>
                     </div>
                  </div>
                  <div className={styles.col}>
                     <div className={styles.card}>
                     </div>
                     <div className={styles.details}>
                        <span>04</span>
                        <h2>Testing & Launch</h2>
                        <p>Conduct thorough testing to identify and fix any issues across devices and platforms. Once ready, implement your deployment strategy and execute the launch. Monitor performance and user feedback to make quick adjustments and improvements post-launch.</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}

export default Process