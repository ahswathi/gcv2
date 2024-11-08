import React from 'react'
import Brands from '../../components/brands/brands'
import Herosub from '../../components/herosub/herosub'
import Casestudies from '../../components/casestudies/casestudies'
import FAQAccordion from '../../components/faq/faq'
import Process from '../../components/process/process'
import Testimonials from '../../components/testimonials/testimonials'
import Content from '../../components/content/content'
import Ctaform from '../../components/ctaform/ctaform'
import Chooseustype3 from '@/app/components/chooseustype3/chooseustype3'
import Webdevslider from '@/app/components/slider/webdevslider'
import Websitedark from '@/app/components/websitedark/websitedark'
import Newcasestudies from '@/app/components/newcasestudies/newcasestudies'
import Mainheading from '@/app/components/mainheading/mainheading'
import Subchoosetype2 from '@/app/components/subchoosetype2/subchoosetype2'
// import Brands from '../components'
const Customweb = () => {
  return (
    <>
    <Herosub
     subtitle="Development"
     title="E-commerce Custom web development"
     content="Explo Commerce delivers the most outstanding e-commerce custom web development applications. Design at your will and make the website thematic to suit the product and service offerings. Customize the shopping cart with features suitable to the theme and make every feature deliver through its design."
     imageUrl='/assets/customweb.png'
     bg='rgba(15, 204, 117, 0.46)'
     />
     <Brands />
     {/* <Webdevslider/> */}
    <Mainheading
        titlecenter="More About Service"
        contentcenter="Build websites that understand the customer needs and requirements and make every experience of the customer count."
        />
     <Content 
     imageUrl='/assets/abt6.png'
     content='The custom development advantage in an e-commerce website is a game-changing one, with numerous websites jostling for eyeballs and engagement, a unique custom theme-based website that suits the brand and the company creates the differentiation. The differentiation in every aspect of the product presentation and feature delivers an unmatchable experience to customers and enhances their browsing experience. The custom website delivers a holistic and comprehensive experience to the customer and engages him thoroughly; with high levels of engagement the chances of buying the product are higher. Thematic websites not only offer uniqueness and great presentation, they elevate the overall experience of the customer and register the name of the company in their minds. Optimization of the website at every stage and level is a given advantage; the online store can utilize every available feature for customer retention, lead generation, optimizing the search engine, and customizing the shopping cart periodically to suit the product offerings. '
     />
    {/*  <Subchoosetype2 chooseImg="/assets/choose2.JPG" /> */}
    <Process />
  {/*   <Newcasestudies /> */}
    <Websitedark
    imageUrl='/assets/iso1.png' 
    title='Build perfect e-commerce website with Explo Commerce'  />
    <Ctaform />
  {/*   <Testimonials /> */}
    {/* <FAQAccordion /> */}
    </>
  )
}

export default Customweb;