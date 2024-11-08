import Image from 'next/image'
import Brands from './components/brands/brands'
import Business from './components/business/business'
// import Chooseus from './components/chooseus/chooseus'
import CTA from './components/CTA/cta'
import Ctaform from './components/ctaform/ctaform'
import Hero from './components/hero/hero'
import Industries from './components/industries/industries'
import Partner from './components/partner/partner'
import Testimonials from './components/testimonials/testimonials'
import Trends from './components/trends/trends'
import Website from './components/website/website'
import Slidebar from './components/slider/slidebar'
import Process from './components/process/process'
import FAQAccordion from './components/faq/faq'
import Portfolio from './components/portfolio/portfolio'
import Menu from './components/menu/menu'
import Casestudies from './components/casestudies/casestudies'
import Technologies from './components/technologies/technologies'
import Newintegration from './components/newintegration/newintegration'
import Newchooseus from './components/newchooseus/newchooseus'
import Herosub from './components/herosub/herosub'
import Blogs from './components/blogs/blogs'
import Supports from './components/supports/supports'
import Newcasestudies from './components/newcasestudies/newcasestudies'
// const faqItems = [
//   { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },

//   { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },

//   { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },

// ];
// const faqItems2 = [
//   { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },

//   { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },

//   { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },

// ]; 

export default function Home() {

  return (
    <>
      {/* <Menu/> */}
      <Hero />
      {/* <Herosub /> */}
      <Brands />
      <Slidebar />
      <Newcasestudies />
      <CTA />
      <Technologies
        subtitle="For CMS based development"
        title="Intend to build CMS Based E-commerce website"
        content="Launch your e-commerce web & mobile application using CMS frameworks"
        secondsubtitle="For custom development"
        secondtitle='Intend to build Custom E-commerce Solutions.'
        secondcontent="Launch your Custom e-commerce web & mobile application using various technologies."
        ishopify='assets/ishopify.png'
        imegento='assets/imegento.png'
        iwebflow='assets/iwebflow.png'
        iwoocom='assets/iwoocom.png'
        inextjs='assets/inextjs.png'
        inodejs='assets/inodejs.png'
        ireactjs='assets/ireactjs.png'
        ilaravel='assets/ilaravel.png'

      />
      <Process />
   {/*    <Testimonials /> */}
      <Supports />
      <Website 
        content="Explo Commerce initiates applications that blend well with the company’s ecosystem and assist in quick scalability."
        title="Perfect e-commerce websites create a vigorous ecosystem"
        imageUrl="/assets/clientbrands/image.png" />
      <Industries />
      <Business
        subtitle="FOR D2C SOLUTION"
        title="Direct To Customer (D2C)"
        content="While addressing customers directly on an e-commerce platform, certain distinctions and subtleties should be considered seriously. To engage with the customer directly, the platform should entice and generate interest through its design and product placement, the overall experience should be superior to make him consider. The challenge for the e-commerce application is to efficiently address the entire chain of events in a D2C business model and win over the customer."
        imageUrl='assets/bm1.png'
        ssubtitle="FOR B2B SOLUTION"
        stitle="Bussiness To Bussiness (B2B) "
        scontent="Businesses engaging businesses should display simplicity in their complex offerings, when a business intends to initiate a business transaction with another business; it looks for some trust factor and commitment. The e-commerce application should effectively convey the same through the communications spread across the platform. The overall design and process should make the business consider and compel it to collaborate. Business association and collaboration happen when trust and confidence are exhibited. "
        simageUrl='assets/bm2.png'
      />
      {/* <Chooseus /> */}
      {/* <Newchooseus /> */}
      <Trends />
      <Ctaform />
      {/* <Ctaform /> */}

      {/* <FAQAccordion faqItems={faqItems} faqItem2={faqItems2} />  //////// */}
    {/*   <FAQAccordion /> */}
      <Newintegration
        title="Grow with integration"
        content="Easily connect with leading shipping, payment, and service providers. Streamline your operations, enhance customer satisfaction, and watch your business thrive."
      
        growi='assets/growi.png'
        growi2='assets/growi2.png'
        growi3='assets/growi3.png'
        growi4='assets/growi4.png'
        growi5='assets/growi5.png'
        growi6='assets/growi6.png'
      />
     {/*  <Blogs /> */}
    </>
  )
}