import React from 'react'
import Ctaform from '../components/ctaform/ctaform'
import Darkbutton from '../components/darkbutton/darkbutton'
import Goals from '../components/goals/goals'
import Latestcs from '../components/latestcs/latestcs'
import Mainheading from '../components/mainheading/mainheading'
import Process from '../components/process/process'
import Subhero from '../components/subhero/subhero'
import Testimonials from '../components/testimonials/testimonials'
import Trends from '../components/trends/trends'
import Features from '../components/features/features'
import Working from '../components/working/working'
import styles from './page.module.css'
import Image from 'next/image'
import divider from '../../../public/assets/divider-gradient-white.svg'
import image1 from '../../../public/assets/image1.png'
import b1 from '../../../public/assets/b1.png'
import b2 from '../../../public/assets/b2.png'
import b3 from '../../../public/assets/b3.png'
import b4 from '../../../public/assets/b4.png'
import b5 from '../../../public/assets/b5.png'
import Brands from '../components/brands/brands'

const Casestudies = () => {
  return (
    <>
      <Subhero/>
      <Brands/>
      <div className={styles.container}>
        <div className={styles.line}>
          <Image src={divider}/>
        </div>
        <div className={styles.main}>
          <div className={styles.header}>
            <p>“BigCommerce is particularly well suited for B2B companies looking for a value-priced, partner-centric, multi-tenant SaaS ecommerce solution to deliver complementary functionality.”</p>
            <span>ANDY HOAR CEO, PARADIGM B2B</span>
          </div>
          <div className={styles.images}>
            <Image src={b1} />
            <Image src={b2}/>
            <Image src={b3}/>
            <Image src={b4}/>
            <Image src={b5}/>
          </div>
        </div>
      </div>
      <Features/>
       <div className={styles.buttoncont}>
          <Mainheading
            titlecenter="Let’s talk about your next project"
            contentcenter="Learn how to create job ads that really work. Leverage winning strategies to best promote your ads. Find the perfect person faster."
          /> 
          <div>
             <Darkbutton title="Lets connect"/>
          </div>
            </div>
      <Trends/>
      <Process/>
      <Testimonials/>

      <div className={styles.ctacont}>
        <div className={styles.ctacontent}>
            <div className={styles.contentright}>
                <Image src={image1}/>
            </div>
            <div className={styles.contentleft}>
                <h2>Let’s talk about your  <br/> next project</h2>
                <p>Learn how to create job ads that really work. Leverage winning strategies to best promote your ads. Find the perfect person faster.</p>
                <div>
                  <a className={styles.button2}>
                      Lets connect
                  </a>
                </div>
            </div>
        </div>
    </div>

      <Working/>

      

      <Ctaform/>
    </>
  )
}

export default Casestudies