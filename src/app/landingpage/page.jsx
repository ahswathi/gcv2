import Link from 'next/link'
import React from 'react'
import Casestudies from '../components/casestudies/casestudies'
import Ctaform from '../components/ctaform/ctaform'
import Herosub from '../components/herosub/herosub'
import Landinghero from '../components/landinghero/landinghero'
import Latestcs from '../components/latestcs/latestcs'
import Mainheading from '../components/mainheading/mainheading'
import Models from '../components/models/models'
import Newchooseus from '../components/newchooseus/newchooseus'
import Newintegration from '../components/newintegration/newintegration'
import Process from '../components/process/process'
import Subhero from '../components/subhero/subhero'
import Testimonials from '../components/testimonials/testimonials'
import styles from './page.module.css'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/landingpage',
  }
}
const Landingpage = () => {
  return (
    <div>
      <Landinghero/> 
     <Casestudies/>
     <Newchooseus/>
        <Testimonials/>
        <Process/>
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

        <Newintegration 
        title="Grow with integration"
        content="Vestibulum dapibus nunc ac augue. Cras ultricies mi eu turpis hendrerit fringilla. Pellentesque posuere. Vestibulum dapibus nunc ac augue."
       
      />
    </div>
  )
}

export default Landingpage