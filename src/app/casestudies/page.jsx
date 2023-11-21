import React from 'react'
import Ctaform from '../components/ctaform/ctaform'
import Goals from '../components/goals/goals'
import Latestcs from '../components/latestcs/latestcs'
import Mainheading from '../components/mainheading/mainheading'
import Subhero from '../components/subhero/subhero'
import styles from './page.module.css'

const Casestudies = () => {
  return (
    <>
      <Subhero/>
      <Mainheading
        titlecenter="Summary"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      /> 
      <div className={styles.container}>
          <div className={styles.summary}>
                      <div className={styles.mainRight}>
                          <img src='assets/summary.png' />
                      </div>
                      <div className={styles.mainLeft}>
                          <h2>Provide more detailed content inside<br/>  of tab components. </h2>
                          <h3>Provide more detailed content inside of tab components. </h3>
                          <p>Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence. Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.</p>
                      </div>
          </div>
      </div>
      <Goals/>
      <Mainheading
        titlecenter="Solutions Provided"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      /> 
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.solutionLeft}>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</h2>
              <div className={styles.solution}>
                <div className={styles.bullet}>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909"/>
                  </svg>
                </div>
                <div className={styles.content}>
                  <h2>Development resources</h2>
                  <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                </div>
              </div>
              <div className={styles.solution}>
                <div className={styles.bullet}>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909"/>
                  </svg>
                </div>
                <div className={styles.content}>
                  <h2>Development resources</h2>
                  <p>Duis deserunt adipisicing fugiat labore non laboris. Non sunt occaecat velit commodo. Minim officia elit id id ex est. Non sunt occaecat velit commodo. Minim officia elit id id ex est.</p>
                </div>
              </div>
          </div>
            <div className={styles.solutionRight}>
                <img src='assets/casestudies1.png' />                     
            </div>       
        </div>
      </div>

      <div className={styles.fullcontainer}>
        <div className={styles.mobileimg}>
            <div className={styles.imageup}>
                <img src='assets/mb1.png' />                     
            </div>   
            <div className={styles.imagedown}>
                <img src='assets/mb2.png' />                     
            </div>   
            <div className={styles.imageup}>
                <img src='assets/mb3.png' />                     
            </div>   
            <div className={styles.imagedown}>
                <img src='assets/mb4.png' />                     
            </div>   
            {/* <div className={styles.imageup}>
                <img src='assets/mb4.png' />                     
            </div> */}   
          </div>
      </div>

      
      <Mainheading
        titlecenter="Color & Typography"
      /> 
      <div className={styles.container}>
        <div className={styles.typo}>
          <div className={styles.typofont}>
              <span>Aa</span>
              <h2>Outfit</h2>
          </div>
          <div className={styles.typoalpha}>
            <span>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</span>
          </div>
        </div>
        <div className={styles.colorpallete}>
            <div className={styles.cpicon}>
                <img src='assets/cp1.png' />                     
            </div>   
            <div className={styles.cpicon}>
                <img src='assets/cp2.png' />                     
            </div>   
            <div className={styles.cpicon}>
                <img src='assets/cp3.png' />                     
            </div>   
            <div className={styles.cpicon}>
                <img src='assets/cp4.png' />                     
            </div>   
            <div className={styles.cpicon}>
                <img src='assets/cp5.png' />                     
            </div>   
        </div>
      </div>

      <Mainheading
        titlecenter="Tech Stack"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      /> 
      <div className={styles.container}>
        <div className={styles.tsicons}>
            <div className={styles.tsicon}>
                <img src='assets/ts1.png' />                     
            </div>   
            <div className={styles.tsicon}>
                <img src='assets/ts2.png' />                     
            </div>   
            <div className={styles.tsicon}>
                <img src='assets/ts3.png' />                     
            </div>   
            <div className={styles.tsicon}>
                <img src='assets/ts4.png' />                     
            </div>   
            <div className={styles.tsicon}>
                <img src='assets/ts5.png' />                     
            </div>   
          </div>
      </div>

      <div className={styles.clientcontainer}>
        <div className={styles.client}>
          <img src='assets/client.png' /> 
          <div className={styles.cliendetails}>
            <h3>Carina Lora</h3>
            <span>Senior Digital Producer</span>
          </div>
        </div>
        <div className={styles.clientreview}>
            <p>It’s always rewarding to collaborate with a team that is passionate about its products. The Popcornopolis brand is all about elevating everyday moments! The team’s enthusiasm really helped us bring that joyful energy to the forefront with a site experience  that feels bright and indulgent.</p>
        </div>
      </div>

      {/* <Mainheading
      titlecenter="Latest Case Studies"
      contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      />  */}
      <div className={styles.container}>
        <Latestcs/>
      </div>

      

      <Ctaform/>
    </>
  )
}

export default Casestudies