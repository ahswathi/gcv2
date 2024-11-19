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
import Mainheading from '@/app/components/mainheading/mainheading'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/services/cms',
  }
}
const Cms = () => {
  return (
    <>

      <Herosub
        subtitle="Development"
        title="E-commerce CMS based web development"
        content="Explo Commerce presents Content Managed System (CMS) based websites that help seamlessly manage the overall content from a single dashboard. The applications enable the process in a simplistic manner and aid smooth operations and management of the content.  "
        imageUrl='/assets/custom.png'
        bg='#E0E3E3'
      />
      <Brands />
      <Subservices />
      <Mainheading
        titlecenter="More About Service"
        contentcenter="Enhance the overall efficiency of the website with the right kind of platform and manage content seamlessly."
      />
      <Content
        imageUrl='/assets/abt4.png'
        content='Web Development process and applications are simplified to the core, and the development and construction of the website are reduced to minuscule efforts. Online stores and businesses can leverage the applications to build scalable online stores; the applications for these online stores come with attractive features that empower thoroughly. The likes of Shopify, Big Commerce, WooCommerce, and Webflow enable online stores to develop and scale websites at an unimaginable pace. Knowing how to leverage these platforms and applications becomes critical in the current scenario, as these platforms and applications deliver cutting-edge solutions that help in scaling the business. Online stores should leverage these platforms holistically, understanding the features that become significant before deploying them. The deployment of the applications renders great business advantage and catapults the online stores to greater levels of growth. In a competitive landscape, leveraging on an advantage becomes critical, and this advantage gives the online store the much-needed impetus.'
      />
      {/*   <Subchoosetype2 chooseImg="/assets/choose1.png" /> */}
      <Process />
      {/* <Newcasestudies /> */}
      <Newcta />
      <Ctaform />
      {/* <Testimonials /> */}
      {/* <FAQAccordion /> */}
    </>
  )
}

export default Cms;