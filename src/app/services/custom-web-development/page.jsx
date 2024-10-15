import React from 'react'
import Brands from '../../components/brands/brands'
import Herosub from '../../components/herosub/herosub'
import Casestudies from '../../components/casestudies/casestudies'
import FAQAccordion from '../../components/faq/faq'
import Process from '../../components/process/process'
import Testimonials from '../../components/testimonials/testimonials'
import Content from '../../components/content/content'
import Ctaform from '../../components/ctaform/ctaform'
import Chooseustype3 from '@/app/components/chooseustype3/chooseustype3'
import Webdevslider from '@/app/components/slider/webdevslider'
import Websitedark from '@/app/components/websitedark/websitedark'
import Newcasestudies from '@/app/components/newcasestudies/newcasestudies'
// import Brands from '../components'
const Customweb = () => {
  return (
    <>
    <Herosub
     subtitle="Development"
     title="E-commerce Custom web development"
     content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     imageUrl='/assets/customweb.png'
     bg='rgba(15, 204, 117, 0.46)'
     />
     <Brands />
     <Webdevslider/>
     <Content 
     imageUrl='/assets/abt6.png'
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

export default Customweb;