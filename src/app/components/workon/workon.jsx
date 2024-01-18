import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './workon.module.css'
const workon = () => {
  return (
    <div className={styles.container}>
      <Mainheading
            titlecenter="We're working on"
            contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
            />
    <div className={styles.main}>
    <div className={styles.story}>
        <img src="/assets/story/firstst.png" />
        <p>Dribble</p>
        <h3>Food Recipe & Ingredients Concept Recipe App</h3>
    </div>
    <div className={styles.story} style={{marginTop: '160px'}}>
    <img src="/assets/story/secondst.png" />
    <p>Dribble</p>
        <h3>Food Recipe & Ingredients Concept Recipe App</h3>
    </div>
    </div>
    </div>
  )
}

export default workon
