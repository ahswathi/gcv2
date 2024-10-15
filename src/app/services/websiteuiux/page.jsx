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
// import Brands from '../components'

const Websiteuiux = () => {

  return (
    <>
      <Herosub
        subtitle="Design"
        title="Website UI/UX"
        content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        imageUrl='/assets/websiteuiux.png'
        bg='rgba(15, 204, 117, 0.46)'
      />
      <Brands />
      <Content
        imageUrl='/assets/websiteuiuxser.png'
        content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
      />
      <Verticalchooseus />
      <Process />
      <Newcasestudies />
      <Workon />
      <Website
        imageUrl='/assets/iso1.png'
        title='Build perfect e-commerce website with growCommerce' />
      <Ctaform />
      <Testimonials />
      <FAQAccordion />
    </>
  )
}

export default Websiteuiux
