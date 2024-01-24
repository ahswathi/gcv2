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
      <Casestudies />
      <CTA />
      <Technologies
        subtitle="For CMS based development"
        title="Building CMS Based Ecommerce"
        content="we are helping to launch your ecommerce web & mobile application using cms frameworks"
        secondsubtitle="For custom development"
        secondtitle='Building Custom Ecommerce Solution'
        secondcontent="we are helping to launch your Custom  ecommerce web & mobile application using various technologies"
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
      <Testimonials />
      <Supports />
      <Website imgURL="/assets/clientbrands/image.png" />
      <Industries />
      <Business
        subtitle="FOR D2C SOLUTION"
        title="Direct To Customer (D2C)"
        content="Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence."
        imageUrl='assets/bm1.png'
        ssubtitle="FOR B2B SOLUTION"
        stitle="Bussiness To Bussiness (B2B) "
        scontent="Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence."
        simageUrl='assets/bm2.png'
      />
      {/* <Chooseus /> */}
      <Newchooseus />
      <Trends />
      <Ctaform />
      {/* <Ctaform /> */}

      {/* <FAQAccordion faqItems={faqItems} faqItem2={faqItems2} />  //////// */}
      <FAQAccordion />
      <Newintegration
        title="Grow with integration"
        content="Vestibulum dapibus nunc ac augue. Cras ultricies mi eu turpis hendrerit fringilla. Pellentesque posuere. Vestibulum dapibus nunc ac augue."

      />
      <Blogs />
    </>
  )
}