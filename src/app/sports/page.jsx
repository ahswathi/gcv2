import Link from 'next/link'
import React from 'react'
import Ctaform from '../components/ctaform/ctaform'
import Latestcs from '../components/latestcs/latestcs'
import Mainheading from '../components/mainheading/mainheading'
import Models from '../components/models/models'
import Process from '../components/process/process'
import Subhero from '../components/subhero/subhero'
import Testimonials from '../components/testimonials/testimonials'
import styles from './page.module.css'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/sports',
  }
}
const Sports = () => {
  return (
    <div>
      <Subhero/> 
      <div className={styles.container}>
      <div className={styles.service}>
            <div className={styles.mainRight}>
                <img src='assets/image2.png' />
            </div>
            <div className={styles.mainLeft}>
                <h6>Sports and recreation</h6>
                <h2>Expert Search Engine Optimization</h2>
                <p>Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.</p>
            </div>
        </div>
        </div>
        <Mainheading
          titlecenter="Sports and recreation"
          contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        /> 
      <div className={styles.container}>
     
        <div className={styles.services}>
          <div className={styles.row}>
            <div className={styles.col}>
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
            <div className={styles.col}>
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
          <div className={styles.row}>
            <div className={styles.col}>
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
            <div className={styles.col}>
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
          <div className={styles.row}>
            <div className={styles.col}>
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
            <div className={styles.col}>
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
        </div>

       
      <Latestcs/>

        
      </div>
        <Process/>
        <Testimonials/>
        <Ctaform/>
    </div>
  )
}

export default Sports