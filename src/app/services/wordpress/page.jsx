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
import WebDesigns from '@/app/components/webdesigns/webdesigns'
import Subchoose from '../../components/subchoose/subchoose'
import Newcta from '@/app/components/newcta/newcta'
// import Brands from '../components'
const Wordpress = () => {
  return (
    <>
    <Herosub
     subtitle="Design"
     title="Wordpress  development"
     content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     imageUrl='/assets/wordpress.png'
     bg='rgba(232, 232, 232, 0.47)'
     />
     <Brands />
     <WebDesigns />
     <Content 
     imageUrl='/assets/abt5.png'
     content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
     />
     <Subchoose />
    <Process />
    <Casestudies />
    <Newcta />
    <Ctaform />
    <Testimonials />
    <FAQAccordion />
    </>
  )
}

export default Wordpress