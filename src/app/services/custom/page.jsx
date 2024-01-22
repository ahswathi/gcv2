import React from 'react'
import Brands from '../../components/brands/brands'
import Herosub from '../../components/herosub/herosub'
import Casestudies from '../../components/casestudies/casestudies'
import FAQAccordion from '../../components/faq/faq'
import Process from '../../components/process/process'
import Testimonials from '../../components/testimonials/testimonials'
import Content from '../../components/content/content'
import Ctaform from '../../components/ctaform/ctaform'
import Slidebar from '@/app/components/slider/slidebar'
// import Brands from '../components'
import CustomChoose from './../../components/customchoose/customchoose';
import Website from '../../components/website/website'

const Custom = () => {
  return (
    <>
    <Herosub
     subtitle="Development"
     title="E-commerce Custom web development"
     content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     imageUrl='/assets/customweb.png'
     bg='rgba(10, 168, 229, 0.46)'
     />
     <Brands />
     <Slidebar />
     <Content 
     imageUrl='/assets/abt6.png'
     content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
     />
     <CustomChoose />
    <Process />
    <Casestudies />
    <Website imgURL='/assets/iso1.png' 
    bg='#2c2c2c'
    color='#fff'
    heading='Build perfect e-commerce website with growCommerce' 
    />
    <Ctaform />
    <Testimonials />
    <FAQAccordion />
    </>
  )
}

export default Custom;