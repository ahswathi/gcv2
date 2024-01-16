import React from 'react'
import Subhero from '../components/subhero/subhero'
import FAQ from '../components/faq/faq'
import styles from './page.module.css'
import Mainheadingdark from '../components/mainheadingdark/mainheadingdark'
import Mainheading from '../components/mainheading/mainheading'
import Ctaform from '../components/ctaform/ctaform'
import Brands from '../components/brands/brands'

const Ourstory = () => {
  return (
    <div>
      <Subhero/>
      <Brands/>
        <div className={styles.container}>
            <Mainheadingdark
            titlecenter="Awards & Recognition"
            contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
            /> 
          <div className={styles.row}>
            <div className={styles.maincontainer}>
              <div className={styles.content}>
                <img src="assets/award1.png" alt="Image" />
                <h2>Top Developers</h2>
                <p>Duis deserunt adipisicing fugiat labore non laboris. Duis deserunt adipisicing fugiat labore non laboris.</p>
              </div>
              <div className={styles.images}>
                <img src="assets/awards.png" alt="Image" />
              </div>
            </div>
            <div className={styles.maincontainer}>
              <div className={styles.content}>
                <img src="assets/award1.png" alt="Image" />
                <h2>Top Developers</h2>
                <p>Duis deserunt adipisicing fugiat labore non laboris. Duis deserunt adipisicing fugiat labore non laboris.</p>
              </div>
              <div className={styles.images}>
                <img src="assets/awards.png" alt="Image" />
              </div>
            </div>
            <div className={styles.maincontainer}>
              <div className={styles.content}>
                <img src="assets/award1.png" alt="Image" />
                <h2>Top Developers</h2>
                <p>Duis deserunt adipisicing fugiat labore non laboris. Duis deserunt adipisicing fugiat labore non laboris.</p>
              </div>
              <div className={styles.images}>
                <img src="assets/awards.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.teamcontainer}>
            <Mainheading
            titlecenter="Our Team"
            contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
            /> 
          <div className={styles.teammaincontainer}>
            
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

        <div className={styles.partnercontainer}>
              <div className={styles.partnerimage}>
                <h1>We Were Part Of <br/> Their Stories</h1>
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
      <Ctaform/>
    </div>
  )
}

export default Ourstory