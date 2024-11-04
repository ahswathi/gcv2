import React from 'react'
import Brands from '../../components/brands/brands'
import Herosub from '../../components/herosub/herosub'
import Verticalchooseus from '../../components/verticalchooseus/verticalchooseus'
import Casestudies from '../../components/casestudies/casestudies'
import FAQAccordion from '../../components/faq/faq'
import Process from '../../components/process/process'
import Testimonials from '../../components/testimonials/testimonials'
import Content from '../../components/content/content'
import Ctaform from '../../components/ctaform/ctaform'
import Workon from '../../components/workon/workon'
import Website from '../../components/website/website'
import Newcasestudies from '@/app/components/newcasestudies/newcasestudies'
import Mainheading from '@/app/components/mainheading/mainheading'
import Subchoosetype2 from '@/app/components/subchoosetype2/subchoosetype2'
// import Brands from '../components'
const Mobile = () => {
  return (
    <>
    <Herosub
     subtitle="Design"
     title="Mobile UI/UX"
     content="Enhance user engagement through its efficient UI/UX design principles, increase app usage and download, and build rapport with the customer. An efficient mobile UI/UX design increases customer retention delivers superior customer advantage and enhances the usage of the application. The ease of use is the most prominent feature and the design construct should thoroughly aid the process.  "
     imageUrl='/assets/mobile.png'
     bg='rgba(10, 168, 229, 0.46)'
     />
     <Brands />
    <Mainheading
        titlecenter="More About Service"
        contentcenter="Foster innovation with superior technological applications"
        />
     <Content 
     imageUrl='/assets/abt2.png'
     content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
     />
     <Subchoosetype2 />
    <Process />
    <Newcasestudies />
    {/* <Workon /> */}
    <Website 
    imageUrl='/assets/iso1.png' 
    title='Build perfect e-commerce website with growCommerce'  />
    <Ctaform />
   {/*  <Testimonials /> */}
    <FAQAccordion />
    </>
  )
}

export default Mobile
