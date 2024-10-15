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
// import Brands from '../../components'
import Subservices from './../../components/subservices/subservices';
import Subchoose from '../../components/subchoose/subchoose'
import Newcta from '@/app/components/newcta/newcta'
import Subchoosetype2 from '@/app/components/subchoosetype2/subchoosetype2'
import Newcasestudies from '@/app/components/newcasestudies/newcasestudies'
const Cms = () => {
  return (
    <>
    
    <Herosub
     subtitle="Development"
     title="E-commerce CMS based web development"
     content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     imageUrl='/assets/custom.png'
     bg='#E0E3E3'
     />
     <Brands />
     <Subservices />
     <Content 
     imageUrl='/assets/abt4.png'
     content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
     />
      <Subchoosetype2 />
    <Process />
    <Newcasestudies />
    <Newcta />
    <Ctaform />
    <Testimonials />
    <FAQAccordion />
    </>
  )
}

export default Cms;