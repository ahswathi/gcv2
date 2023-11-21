import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import Mainheading from '../mainheading/mainheading'
import styles from './working.module.css'

const Working = () => {
  return (
    <div className={styles.container}>
    <Mainheading
      titlecenter="We're working on"
      contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
    /> 
    <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.mainRight}>
                    <img src='assets/work.png' />
                        <div className={styles.content}>
                            <span>Dribble</span>
                            <h2>Credit Carma - Financial <br/> Insights Platform</h2>
                        </div>
                    </div>
                <div className={styles.mainLeft}>
                    <img src='assets/work.png' />
                        <div className={styles.content}>
                            <span>Dribble</span>
                            <h2>Credit Carma - Financial <br/> Insights Platform</h2>
                        </div>
                </div>
                <div className={styles.mainLeft}>
                    <img src='assets/work.png' />
                        <div className={styles.content}>
                            <span>Dribble</span>
                            <h2>Credit Carma - Financial <br/> Insights Platform</h2>
                        </div>
                </div>
            </div>
            <div className={styles.col2}>
                <div className={styles.mainRight}>
                    <img src='assets/work.png' />
                        <div className={styles.content}>
                            <span>Dribble</span>
                            <h2>Credit Carma - Financial <br/> Insights Platform</h2>
                        </div>
                    </div>
                <div className={styles.mainLeft}>
                    <img src='assets/work.png' />
                        <div className={styles.content}>
                            <span>Dribble</span>
                            <h2>Credit Carma - Financial <br/> Insights Platform</h2>
                        </div>
                </div>
                <div className={styles.mainLeft}>
                    <img src='assets/work.png' />
                        <div className={styles.content}>
                            <span>Dribble</span>
                            <h2>Credit Carma - Financial <br/> Insights Platform</h2>
                        </div>
                </div>
            </div>
    </div>
            <Darkbutton title='View more' />
    </div>
  )
}

export default Working