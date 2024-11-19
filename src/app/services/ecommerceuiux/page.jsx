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
import Ecommerceslider from '@/app/components/slider/ecommerceslider'
import Newcasestudies from '@/app/components/newcasestudies/newcasestudies'
import Mainheading from '@/app/components/mainheading/mainheading'
import Chooseustype3 from '@/app/components/chooseustype3/chooseustype3'
import Subchoosetype2 from '@/app/components/subchoosetype2/subchoosetype2'
// import Brands from '../components'


export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/services/ecommerceuiux',
  }
}

const Ecommerce = () => {
  return (
    <>
      <Herosub
        subtitle="Design"
        title="E-commerce UI/UX Design"
        content="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        imageUrl='/assets/ecommerce.png'
        bg='rgba(232, 232, 232, 0.47)'
      />
      <Brands />
      <Ecommerceslider />
      <Mainheading
        titlecenter="More About Service"
        contentcenter=""
      />
      <Content
        imageUrl='/assets/abt3.png'
        content='What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.What is the best way to overcome complexity in designing the intricate details of your ecommerce ecosystem? We believe having a BigCommerce Solutions Architect at your side is the best approach.'
      />
      <Subchoosetype2 chooseImg="/assets/choose1.png" />
      <Process />
      {/*  <Newcasestudies /> */}
      {/*  <Workon /> */}
      <Website
        imageUrl='/assets/iso1.png'
        title='Build perfect e-commerce website with  Explo Commerce' />
      <Ctaform />
      {/*  <Testimonials /> */}
      {/*   <FAQAccordion /> */}
    </>
  )
}

export default Ecommerce