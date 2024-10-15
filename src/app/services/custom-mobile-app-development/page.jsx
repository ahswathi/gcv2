import React from 'react'
import Brands from '../../components/brands/brands'
import Herosub from '../../components/herosub/herosub'
import Newchooseus from '../../components/newchooseus/newchooseus'
import Casestudies from '../../components/casestudies/casestudies'
import FAQAccordion from '../../components/faq/faq'
import Process from '../../components/process/process'
import Testimonials from '../../components/testimonials/testimonials'
import Content from '../../components/content/content'
import Ctaform from '../../components/ctaform/ctaform'
import Mobileappdevslider from '@/app/components/slider/mobileappdevslider'
import Chooseustype3 from '@/app/components/chooseustype3/chooseustype3'
import Websitedark from '@/app/components/websitedark/websitedark'
import Newcasestudies from '@/app/components/newcasestudies/newcasestudies'
// import Brands from '../components'
const Customecomm = () => {
  return (
    <>
    <Herosub
     subtitle="Development"
     title="E-commerce custom mobile application development"
     content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     imageUrl='/assets/custommobile appdevelopment.png'
     bg='rgba(232, 232, 232, 0.47)'
     />
     <Brands />
     <Mobileappdevslider/>
     <Content 
     imageUrl='/assets/mobileappdevser.png'
     content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
     />
     <Chooseustype3 />
    <Process />
    <Newcasestudies />
    <Websitedark
    imageUrl='/assets/iso1.png' 
    title='Build perfect e-commerce website with growCommerce'  />
    <Ctaform />
    <Testimonials />
    <FAQAccordion />
    </>
  )
}

export default Customecomm;