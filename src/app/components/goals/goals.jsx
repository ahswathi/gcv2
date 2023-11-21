import React from 'react'
import Mainheadingdark from '../mainheadingdark/mainheadingdark'
import styles from './goals.module.css'

const Goals = () => {
  return (
    <div className={styles.container}>
    <Mainheadingdark
      titlecenter="Project Goals"
      contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
    /> 
            <div className={styles.row}>
                <div className={styles.mainLeft}>
                    <span>01</span>
                    <h2>Impress with Efficient <br/> UX/UI Design</h2>
                    <h3>Impress with Efficient UX/UI Design</h3>
                    <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                    <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                </div>
                <div className={styles.mainRight}>
                    <img src='assets/project1.png' />
                </div>
            </div>
            <div className={styles.row2}>
                <div className={styles.mainRight}>
                    <img src='assets/project1.png' />
                </div>
                <div className={styles.mainLeft}>
                    <span>02</span>
                    <h2>Impress with Efficient <br/> UX/UI Design</h2>
                    <h3>Impress with Efficient UX/UI Design</h3>
                    <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                    <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                </div>
            </div>
    </div>
  )
}

export default Goals