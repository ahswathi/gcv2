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
import Newcta from '@/app/components/newcta/newcta'
import Subchoosetype2 from '@/app/components/subchoosetype2/subchoosetype2'
import Newcasestudies from '@/app/components/newcasestudies/newcasestudies'
import Mainheading from '@/app/components/mainheading/mainheading'
// import Brands from '../components'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/services/wordpress',
  }
}
const Wordpress = () => {
  return (
    <>
      <Herosub
        subtitle="Development"
        title="Wordpress  development"
        content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        imageUrl='/assets/wordpress.png'
        bg='rgba(232, 232, 232, 0.47)'
      />
      <Brands />
      <WebDesigns />
      <Mainheading
        titlecenter="More About Service"
        contentcenter=""
      />
      <Content
        imageUrl='/assets/Wordpressdevelopmentserv.png'
        content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
      />
      <Subchoosetype2 />
      <Process />
      <Newcasestudies />
      <Newcta />
      <Ctaform />
      {/*  <Testimonials /> */}
      <FAQAccordion />
    </>
  )
}

export default Wordpress