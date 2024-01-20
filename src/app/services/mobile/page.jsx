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
import Workon from '../../components/workon/workon'
import Website from '../../components/website/website'
// import Brands from '../components'
const Mobile = () => {
  return (
    <>
    <Herosub
     subtitle="Design"
     title="Mobile UI/UX"
     content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
     imageUrl='/assets/mobile.png'
     bg='rgba(10, 168, 229, 0.46)'
     />
     <Brands />
     <Content 
     imageUrl='/assets/abt2.png'
     content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
     />
     <Newchooseus />
    <Process />
    <Casestudies />
    <Workon />
    <Website imgURL='/assets/iso1.png' />
    <Ctaform />
    <Testimonials />
    <FAQAccordion />
    </>
  )
}

export default Mobile
