'use client'
import React from 'react'
import FAQ from '../components/faq/faq'
import Darkbutton from '../components/darkbutton/darkbutton'
import styles from './page.module.css'
import Mainheadingdark from '../components/mainheadingdark/mainheadingdark'
import Mainheading from '../components/mainheading/mainheading'
import Ctaform from '../components/ctaform/ctaform'
import Brands from '../components/brands/brands'
import Aboutus from '../components/aboutus/aboutus'
import Platform from '../components/platform/platform'
import Trends from '../components/trends/trends'
import Newchooseus from './../components/newchooseus/newchooseus';
import Workon from './../components/workon/workon';

import { usePathname } from "next/navigation"

const Ourstory = () => {

    const path = usePathname()

    console.log("pathname", path)
    return (
        <div>
            <Aboutus title='Visionsharp is a Web Design Agency in Manchester specialising in specific platforms.Visionsharp is a Web Design Agency in Manchester specialising in specific platforms.'
                heading='We build digital commerce that perform faster.' />
            <Brands />
            <Platform />
            <Trends />
            <div className={styles.spaceT}></div>
            <Mainheading
                titlecenter="Fast-track your business goals."
                contentcenter="Whether you’re starting from an ambiguous challenge or a clear idea, we can help you move forward. Reach out for an informal meeting below."
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Darkbutton title='Lets talk' />
            </div>
            <div className={styles.space}></div>

            <div className={styles.teamcontainer}>
                <Mainheading
                    titlecenter="Our Team"
                    contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
                />
                <div className={styles.teammaincontainer}>
                    <div className={styles.teamrow}>
                        <div className={styles.teamcard}>
                            <h2>Eleonora Israele</h2>
                            <img src="assets/team.png" alt="Image" />
                            <span>PROJECT MANAGER</span>
                        </div>
                        <div className={styles.teamcard2}>
                            <h2>Eleonora Israele</h2>
                            <img src="assets/team.png" alt="Image" />
                            <span>PROJECT MANAGER</span>
                        </div>
                        <div className={styles.teamcard}>
                            <h2>Eleonora Israele</h2>
                            <img src="assets/team.png" alt="Image" />
                            <span>PROJECT MANAGER</span>
                        </div>

                    </div>
                    <div className={styles.teamrow}>
                        <div className={styles.teamcard}>
                            <h2>Eleonora Israele</h2>
                            <img src="assets/team.png" alt="Image" />
                            <span>PROJECT MANAGER</span>
                        </div>
                        <div className={styles.teamcard2}>
                            <h2>Eleonora Israele</h2>
                            <img src="assets/team.png" alt="Image" />
                            <span>PROJECT MANAGER</span>
                        </div>
                        <div className={styles.teamcard}>
                            <h2>Eleonora Israele</h2>
                            <img src="assets/team.png" alt="Image" />
                            <span>PROJECT MANAGER</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.partnercontainer}>
                <div className={styles.partnerimage}>
                    <h1>We Were Part Of <br /> Their Stories</h1>
                    <img src="assets/partner.png" alt="Image" />
                    {/*<div><h1>We Were Part Of <br/> Their Stories</h1></div>
                 <div className={styles.slide}>
                <div className={styles.slidetrack}>
		
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb1.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb2.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb3.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb4.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb5.png'/>
			</div>
			
			<div className={styles.slide}>
			<img src='assets/clientbrands/cb6.png'/>
			</div>
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb1.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb2.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb3.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb4.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb5.png'/>
			</div>
			
			<div className={styles.slide}>
			<img src='assets/clientbrands/cb6.png'/>
			</div>
			
		            </div></div> */}
                </div>
            </div>
            <Workon />
            <Newchooseus />
            <Ctaform />
        </div>
    )
}

export default Ourstory