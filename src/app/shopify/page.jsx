import React from 'react'
import Mainheadingdark from '../components/mainheadingdark/mainheadingdark'
import styles from './page.module.css'
import Subhero from '../components/subhero/subhero'
import Latestcs from '../components/latestcs/latestcs'
import Process from '../components/process/process'
import Testimonials from '../components/testimonials/testimonials'
import Portfolio from '../components/portfolio/portfolio'
import Ctaform from '../components/ctaform/ctaform'
import Models from '../components/models/models'
import Subservices from '../components/subservices/subservices'
import Content from '../components/content/content'
import Contacting from '../components/contacting/contacting'
const page = () => {
  return (
    <>
    <Subservices
     subtitle="Web Hosting"
     title="E-commerce UI/UX Design"
     content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     imageUrl='assets/subservicehero.png'
     />
     <Content 
     imageUrl='assets/content.png'
     content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
     />
    <div className={styles.container}>

    <Models/>
    <Latestcs/>
    </div>
        <Contacting />
        <Process/>
        <Portfolio/>
        <Testimonials/>
        <Ctaform/>
    </>
  )
}

export default page