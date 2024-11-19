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
import Chooseustype3 from '@/app/components/chooseustype3/chooseustype3'
import Subchoosetype2 from '@/app/components/subchoosetype2/subchoosetype2'
// import Brands from '../components'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/services/websiteuiux',
  }
}

const Websiteuiux = () => {

  return (
    <>
      <Herosub
        subtitle="Design"
        title="Website UI/UX"
        content="Engaging the visitor thoroughly with its design principles and aesthetics is the purpose of a competent website UI/UX design service. The website provides sufficient space provision to spread the design across and make it attractive and efficient. The purpose of an efficient UI/UX design is to support and assist in every functionality of the website and make the browsing experience smooth and seamless."
        imageUrl='/assets/websiteuiux.png'
        bg='rgba(15, 204, 117, 0.46)'
      />
      <Brands />
      <Mainheading
        titlecenter="More About Service"
        contentcenter="Foster innovation with superior technological applications"
      />
      <Content
        imageUrl='/assets/websiteuiuxser.png'
        content='Responsive designs that captivate the audience with brilliant UI/UX designs elevate the company’s image manifold. The purpose of developing and creating UI/UX designs that enthral audiences is to make them consider the proposition. Companies have varied propositions in an e-commerce business model, the propositions change based on the categories they represent. A product company has its business model, the discounts and offers on the products vary across the year, if it is well-accepted by the customers, the offers and proposition get embedded in the business model. Similarly, for the services offered, the company finds the right kind of proposition that fits its customers. The UI/UX and the unique designs become a part of the proposition, as it gets acclimatized with customers and the company, therefore getting a unique UI/UX that is integral to a company is significant in the evolving e-commerce landscape, as competition is increasing in the digital world, the unique UI/UX designs differentiates and retains the company’s and brand’s identity in the form of designs.  '
      />
      {/* <Subchoosetype2 chooseImg="/assets/choose2.JPG" /> */}
      <Process />
      {/* <Newcasestudies /> */}
      {/* <Workon /> */}
      <Website
        imageUrl='/assets/iso1.png'
        title='Build perfect e-commerce website with Explo Commerce' />
      <Ctaform />
      {/*  <Testimonials /> */}
      {/*   <FAQAccordion /> */}
    </>
  )
}

export default Websiteuiux
