import Link from 'next/link'
import React from 'react'
import Darkbutton from '../darkbutton/darkbutton'
import Mainheading from '../mainheading/mainheading'
import styles from './models.module.css'

const Models = () => {
  return (
    <div className={styles.container}>
    <Mainheading
      titlecenter="Our Shopify Services"
      contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
    /> 
        <div className={styles.row}>
            <div className={styles.service}>
                    <div className={styles.mainRight}>
                        <img src='assets/casestudies1.png' />
                    </div>
                    <div className={styles.mainLeft}>
                        <h2>Web design for <br/> Blockchain X</h2>
                        <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <div> 
                            <Darkbutton title="Case study" />
                        </div>
                    </div>
            </div>
            <div className={styles.service2}>
                    <div className={styles.mainLeft}>
                        <h2>Web design for <br/> Blockchain X</h2>
                        <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <div> 
                            <Darkbutton title="Case study" />
                        </div>
                    </div>
                    <div className={styles.mainRight}>
                        <img src='assets/casestudies2.png' />
                    </div>
            </div>
            <div className={styles.service}>
                    <div className={styles.mainRight}>
                        <img src='assets/casestudies1.png' />
                    </div>
                    <div className={styles.mainLeft}>
                        <h2>Web design for <br/> Blockchain X</h2>
                        <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <div> 
                            <Darkbutton title="Case study" />
                        </div>
                    </div>
            </div>
            <div className={styles.service2}>
                    <div className={styles.mainLeft}>
                        <h2>Web design for <br/> Blockchain X</h2>
                        <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <div> 
                            <Darkbutton title="Case study" />
                        </div>
                    </div>
                    <div className={styles.mainRight}>
                        <img src='assets/casestudies2.png' />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Models