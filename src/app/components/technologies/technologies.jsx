'use client'
import Link from 'next/link'
import React from 'react'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import Viewmore from '../viewmore/viewmore'
import styles from './technologies.module.css'

const Technologies = ({ subtitle, title, content, iwebflow,iwoocom, imegento, ishopify, inextjs, inodejs, ireactjs,ilaravel,secondtitle, secondsubtitle, secondcontent}) => {
  return (
  <>
    <Mainheading
        titlecenter="Technologies We Use"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        />
      <div className={styles.container}>
        <div className={styles.service}>
            <div className={styles.mainLeft}>
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{content}</p>
                {/* <div className={styles.read}>
                    View more <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B"/>
</svg>
                </div> */}
                <div className={styles.read}>
                 <Link href='#'>   View more 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B"/>
</svg></Link>
                </div> 
            </div>
            <div className={styles.mainRight}>
                <div className={styles.mainRight1}>
                    <div className={styles.techicon}>
                        <img src={iwebflow} />
                        <span>Webflow</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={iwoocom} />
                        <span>WooCommerce</span>
                    </div>
                </div>
                <div className={styles.mainRight2}>
                    <div className={styles.techicon}>
                        <img src={imegento} />
                        <span>Meganto</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={ishopify} />
                        <span>Shopify</span>
                    </div>
                </div>
            </div>
            <div className={styles.mainRightxs}>
                    <div className={styles.techicon}>
                        <img src={iwebflow} />
                        <span>Webflow</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={iwoocom} />
                        <span>WooCommerce</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={imegento} />
                        <span>Meganto</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={ishopify} />
                        <span>Shopify</span>
                    </div>
            </div>
        </div>
        <div className={styles.service2}>
            <div className={styles.mainLeft}>
                <h6>{secondsubtitle}</h6>
                <h2>{secondtitle}</h2>
                <p>{secondcontent}</p>
                {/* <div className={styles.read}>
                    View more <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B"/>
</svg>
                </div> */}
                <div className={styles.read}>
                 <Link href='#'>   View more 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B"/>
</svg></Link>
                </div> 
            </div>
            <div className={styles.mainRight}>
                <div className={styles.mainRight1}>
                    <div className={styles.techicon}>
                        <img src={inextjs} />
                        <span>NextJs</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={inodejs} />
                        <span>NodeJs</span>
                    </div>
                </div>
                <div className={styles.mainRight2}>
                    <div className={styles.techicon}>
                        <img src={ilaravel} />
                        <span>Laravel</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={ireactjs} />
                        <span>Reacts</span>
                </div>
                </div>
            </div>
            <div className={styles.mainRightxs}>
                    <div className={styles.techicon}>
                        <img src={iwebflow} />
                        <span>Webflow</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={iwoocom} />
                        <span>WooCommerce</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={imegento} />
                        <span>Meganto</span>
                    </div>
                    <div className={styles.techicon}>
                        <img src={ishopify} />
                        <span>Shopify</span>
                    </div>
            </div>
        </div>
</div>
<br /><br />
 </>
  )
}

export default Technologies