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

export const metadata = {
    title: 'Explo Commerce',
    description: 'We build digital commerce that perform faster.',
    metadata: new URL("https://www.explocommerce.com"),
    alternates: {
        canonical: 'https://www.explocommerce.com/ourstory',
    }
}
const Ourstory = () => {

    return (
        <div>
            <Aboutus title='Explo Commerce delivers pace in the fast-paced e-commerce industry to make every delivery count. '
                heading='Explo Commerce delivers bespoke e-commerce applications and solutions that impact the sales process holistically.' />
            <Brands />
            <Platform />
            <Trends />
            <div className={styles.spaceT}></div>
            <Mainheading
                titlecenter="Build agility in your business. Scale up and grow."
                contentcenter="Businesses must scale up to grow; e-commerce is the right platform for growth-oriented business models. "
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Darkbutton title='Lets talk' />
            </div>
            <div className={styles.space}></div>

            {/* <div className={styles.teamcontainer}>
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
 */}
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
            {/* <Workon /> */}
            {/*  <Newchooseus /> */}
            <Ctaform />
        </div>
    )
}

export default Ourstory