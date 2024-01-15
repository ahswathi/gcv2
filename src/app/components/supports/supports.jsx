'use client'
import React, { useState } from 'react'
import styles from './support.module.css'
import Mainheading from '../mainheading/mainheading'

const supports = () => {
  const [stages, setStages] = useState(2)

  const handleClick = (i) => {
    // let isExist = stages.findIndex((id) => id === i)
    // if(isExist > -1){
    //   let clone = [...stages];
    //   clone.splice(isExist, 1)
    //   setStages(clone)
    // }else{
    //   setStages((prev) => {return [...prev, i]})
    // }
    let exist = stages === i;

    if (exist) {
      setStages(null)
    } else {
      setStages(i)
    }
  }

  return (
    <div className={styles.container}>
      <Mainheading
        titlecenter="We Support All Stages"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      />
      <div className={styles.stages}>
        <div className={`${styles.box} ${styles.first}`}>
          <div className={styles.question}>
            <div className={styles.head}>
              Small (Early Stage)
            </div>
            <svg className={stages === 0 ? `${styles.dropdown} ${styles.active}` : styles.dropdown} onClick={() =>handleClick(0)} xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
              <path d="M14.7608 16.4561C13.5702 17.5282 11.7358 17.4321 10.6637 16.2414L0.979563 5.48605C-0.712702 3.6066 0.642559 0.612647 3.17142 0.643957L24.5073 0.908134C27.148 0.94083 28.3751 4.19785 26.4126 5.96496L14.7608 16.4561Z" fill="#0AA8E5" fill-opacity="0.93" />
            </svg>
          </div>
          <div className={styles.answer} style={{ display: stages===0 ? 'flex' : 'none' }}>
            <div className={styles.para}>Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.</div>
            <img src='assets/clientbrands/support.png' className={styles.ppl} />
          </div>
        </div>

        <div className={`${styles.box} ${styles.second}`} style={{ borderColor: '#1D212C' }}>
          <div className={styles.question}>
            <div className={styles.head} style={{ color: '#1D212C' }}>
              Medium (After Market Fit)
            </div>
            <svg className={stages===1 ? `${styles.dropdown} ${styles.active}` : styles.dropdown} onClick={() =>handleClick(1)} xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
  <path d="M15.1935 16.292C14.0028 17.3641 12.1684 17.268 11.0963 16.0773L1.41218 5.32199C-0.280083 3.44254 1.07518 0.448584 3.60404 0.479895L24.9399 0.744071C27.5806 0.776768 28.8078 4.03379 26.8452 5.80089L15.1935 16.292Z" fill="#090909"/>
</svg>
          </div>
          <div className={styles.answer} style={{ display: stages===1 ? 'flex' : 'none' }}>
            <div className={styles.para}>Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.</div>
            <img src='assets/clientbrands/support.png' className={styles.ppl} />
          </div>
        </div>

        <div className={`${styles.box} ${styles.third}`} style={{ borderColor: '#0FCC75' }}>
          <div className={styles.question}>
            <div className={styles.head} style={{ color: '#0FCC75' }}>
              Large (Enterprises)
            </div>
            <svg className={stages===2 ? `${styles.dropdown} ${styles.active}` : styles.dropdown} onClick={() =>handleClick(2)} xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17" fill="none">
  <path d="M12.5975 0.954225C13.75 -0.158771 15.5866 -0.126708 16.6996 1.02584L26.7532 11.4366C28.5101 13.2559 27.2601 16.2953 24.7317 16.3523L3.39961 16.8329C0.759368 16.8924 -0.580714 13.6801 1.31901 11.8456L12.5975 0.954225Z" fill="#0FCC75"/>
</svg>
          </div>
          <div className={styles.answer} style={{ display: stages===2 ? 'flex' : 'none' }}>
            <div className={styles.para}>Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.Implementing best practices, starting small, and shipping powerful iterations over time, based on real user data.</div>
            <img src='assets/clientbrands/support.png' className={styles.ppl} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default supports
