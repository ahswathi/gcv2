import React from 'react'
import Mainheadingdark from '../components/mainheadingdark/mainheadingdark'
import styles from './page.module.css'
import Subhero from '../components/subhero/subhero'
import Latestcs from '../components/latestcs/latestcs'
import Process from '../components/process/process'
import Testimonials from '../components/testimonials/testimonials'
import Portfolio from '../components/portfolio/portfolio'
import Ctaform from '../components/ctaform/ctaform'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/maincase',
  }
}
const page = () => {
  return (
    <>
    <Subhero/>
    
    <div className={styles.container}>
    <Mainheadingdark
      titlecenter="Tech Stack"
      contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
    /> 
      <div className={styles.casestudy}>
        <div className={styles.csleft}>
            <h2>Filter by</h2>
            <div className={styles.line}></div>
              <div className={styles.types}>
                <span>Industry</span><svg width="20" height="20" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5752 8.39164L10.2002 14.9135L3.8252 8.39164" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
            <div className={styles.options}>
              <div className={styles.optlbl}>
                <input type="checkbox" name="option1" value="Option 1"  className={styles.inplabl}/>
                <label>Agencies</label>
              </div>
              <div className={styles.optlbl}>
                <input type="checkbox" name="option1" value="Option 1"  className={styles.inplabl}/>
                <label>Electronics</label>
              </div>
              <div className={styles.optlbl}>
                <input type="checkbox" name="option1" value="Option 1"  className={styles.inplabl}/>
                <label>Finance</label>
              </div>
              <div className={styles.optlbl}>
                <input type="checkbox" name="option1" value="Option 1"  className={styles.inplabl}/>
                <label>Food & beverage</label>
              </div>
            </div>
        </div>
        <div className={styles.csright}>
          <div className={styles.row}>
            <div className={styles.col}>
              <img src='assets/csimg.png' /> 
              <h3>Electronics</h3>
              <h2>Skullcandy</h2>
              <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              <h6>Read more . . . </h6>
            </div>
            <div className={styles.col}>
              <img src='assets/csimg.png' /> 
              <h3>Electronics</h3>
              <h2>Skullcandy</h2>
              <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              <h6>Read more . . . </h6>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <img src='assets/csimg.png' /> 
              <h3>Electronics</h3>
              <h2>Skullcandy</h2>
              <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              <h6>Read more . . . </h6>
            </div>
            <div className={styles.col}>
              <img src='assets/csimg.png' /> 
              <h3>Electronics</h3>
              <h2>Skullcandy</h2>
              <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              <h6>Read more . . . </h6>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <img src='assets/csimg.png' /> 
              <h3>Electronics</h3>
              <h2>Skullcandy</h2>
              <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              <h6>Read more . . . </h6>
            </div>
            <div className={styles.col}>
              <img src='assets/csimg.png' /> 
              <span>Electronics</span>
              <h2>Skullcandy</h2>
              <p>Lorem ipsum dolor sit amet consectetur reprehe adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              <h6>Read more . . . </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.latestcontainer}>
    <Latestcs/>
    </div>
   
        <Process/>
        <Portfolio/>
        <Testimonials/>
        <Ctaform/>
    </>
  )
}

export default page