import React from 'react'
import Mainheadingdark from '../components/mainheadingdark/mainheadingdark'
import styles from './page.module.css'
import Latestcs from '../components/latestcs/latestcs'
import Process from '../components/process/process'
import Testimonials from '../components/testimonials/testimonials'
import Portfolio from '../components/portfolio/portfolio'
import Ctaform from '../components/ctaform/ctaform'
import Models from '../components/models/models'
import Subservices from '../components/subservices/subservices'
import Slidebar from '../components/slider/slidebar'
import Content from '../components/content/content'
import Contacting from '../components/contacting/contacting'
import Brands from '../components/brands/brands'
import Herosub from '../components/herosub/herosub'
import Newchooseus from '../components/newchooseus/newchooseus'
import Casestudies from '../components/casestudies/casestudies'
import FAQAccordion from '../components/faq/faq'
import Workon from '../components/workon/workon'
import Website from '../components/website/website'

const page = () => {
  return (
    <>
    <Herosub
     subtitle="Design"
     title="Website UI/UX"
     content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     imageUrl='assets/web.png'
     bg='rgba(15, 204, 117, 0.46)'
     />
     <Brands />
     <Content 
     imageUrl='/assets/abt.png'
     content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
     />
    {/* <div className={styles.container}>

    <Models/>
    <Latestcs/>
    </div> */}
    <Newchooseus />
    <Process />
    <Casestudies />
    <Workon />
    <Website imgURL='/assets/iso1.png' />
    <Ctaform />
    <Testimonials />
    <FAQAccordion />
        {/* <Contacting /> 
        <Process/>
        <Portfolio/>
        <Testimonials/>
        <Ctaform/> */}
    </>
  )
}

export default page