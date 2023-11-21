'use client'
import React from 'react'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import styles from './content.module.css'

const Content = ({ subtitle, title, content, imageUrl}) => {
  return (
  <>
    <Mainheading
        titlecenter="Software Development Project"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        />
        <div className={styles.container}>
                <img src={imageUrl} />
                <p>{content}</p>
                <div className={styles.box}>
                    <div className={styles.box1}>
                        <span>Analytics</span>
                        <span>SEO</span>
                        <span>PPC</span>
                        <span>Content</span>
                        <span>Social</span>
                    </div>
                    <div className={styles.box2}>
                        <span>Email</span>
                        <span>Video</span>
                        <span>Branding</span>
                        <span>Strategy</span>
                    </div>
                </div>
        </div>
 </>
  )
}

export default Content