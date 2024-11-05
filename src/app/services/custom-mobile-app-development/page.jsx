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
import Mobileappdevslider from '@/app/components/slider/mobileappdevslider'
import Chooseustype3 from '@/app/components/chooseustype3/chooseustype3'
import Websitedark from '@/app/components/websitedark/websitedark'
import Newcasestudies from '@/app/components/newcasestudies/newcasestudies'
import Mainheading from '@/app/components/mainheading/mainheading'
import Subchoosetype2 from '@/app/components/subchoosetype2/subchoosetype2'
// import Brands from '../components'
const Customecomm = () => {
  return (
    <>
    <Herosub
     subtitle="Development"
     title="E-commerce custom mobile application development"
     content="The dynamics of mobile commerce is a complex subject, with exponential growth opportunities and large customer acceptance, the mobile application development industry is poised for greater challenges.   "
     imageUrl='/assets/custommobile appdevelopment.png'
     bg='rgba(232, 232, 232, 0.47)'
     />
     <Brands />
     <Mobileappdevslider/>
    <Mainheading
        titlecenter="More About Service"
        contentcenter="Construct mobile applications that deliver great experiences, deliver genuine sense of design and information."
        />
     <Content 
     imageUrl='/assets/mobileappdevser.png'
     content='Mobile applications are typically used by every individual who possesses a smartphone; the rampant usage of smartphones and mobile applications has created a sense of need and urgency to develop mobile applications that engage positively. Positive engagement is achieved by delivering a great experience to the user on his mobile phone through operational UI/UX. The aesthetic principles of design school suggest that good designs engage positively and convey genuineness to the user. With authenticity, the customer develops a genuine relationship with the company, qualities of UI/UX not only connote authenticity, but they bring the company closer to the customer in every sense. With numerous mobile applications in the marketplace, a genuine app is considered to possess quality UI/UX, customers unequivocally prefer to interact and conduct business transactions with such companies. Developing a mobile app with quality UI/UX becomes inevitable for companies in the current age of digital era. The technological trends of the digital world demand every company interact and transact with customers digitally and deploy mobile applications with quality UI/UX functionalities. '
     />
     <Subchoosetype2 chooseImg="/assets/choose1.png" />
    <Process />
    {/* <Newcasestudies /> */}
    <Websitedark
    imageUrl='/assets/iso1.png' 
    title='Build perfect e-commerce website with Explo Commerce'  />
    <Ctaform />
    {/* <Testimonials /> */}
    <FAQAccordion />
    </>
  )
}

export default Customecomm;