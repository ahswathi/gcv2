import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './chooseus.module.css'

const Chooseus = () => {
  return (
      <>
      <Mainheading
     titlecenter="Why choose us?"
     contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     /> 
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/choose1.png' width='48px' height='48px' />
                    <h2>Experience</h2>
                    <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/choose2.png' width='48px' height='48px' />
                    <h2>Perform</h2>
                    <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/choose3.png' width='48px' height='48px' />
                    <h2>Support</h2>
                    <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Chooseus