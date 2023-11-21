import Image from 'next/image'
import Brands from './components/brands/brands'
import Business from './components/business/business'
import Chooseus from './components/chooseus/chooseus'
import CTA from './components/CTA/cta'
import Ctaform from './components/ctaform/ctaform'
import Hero from './components/hero/hero'
import Industries from './components/industries/industries'
import Partner from './components/partner/partner'
import Testimonials from './components/testimonials/testimonials'
import Trends from './components/trends/trends'
import Integration from './components/integration/integration'
import Slider from './components/slider/slider'
import Process from './components/process/process'
import FAQAccordion from './components/faq/faq'
import Portfolio from './components/portfolio/portfolio'
import Menu from './components/menu/menu'
import Casestudies from './components/casestudies/casestudies'
import Technologies from './components/technologies/technologies'
import Newintegration from './components/newintegration/newintegration'
import Newchooseus from './components/newchooseus/newchooseus'
import Herosub from './components/herosub/herosub'
/* 
const faqItems = [
  { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },
  
  { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },
  
  { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },
  
];
const faqItems2 = [
  { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },
  
  { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },
  
  { question: 'What services do you offer in online marketing?', answer: 'We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.' },
  
]; */

export default function Home() {

  return (
    <>
    {/* <Menu/> */}
      <Hero/>
      <Herosub/>
      <Brands/>
      <Slider/>
      <Technologies 
        subtitle="For CMS based development"
        title="Expert Search Engine Optimization"
        content="the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog"
        imageUrl='assets/image.png'
      />
      <Casestudies/>
      <Industries/>
      <Business
        subtitle="For CMS based development"
        title="Expert Search Engine Optimization"
        content="Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence."
        imageUrl='assets/imagenew.png'
      />
      <CTA/>
      <Testimonials/>
      <Process/>
      <Chooseus/>
      <Newchooseus/>
      <Trends/>
      
      <Partner/>
      <Ctaform/>
      
        {/* <FAQAccordion faqItems={faqItems} faqItem2={faqItems2} /> */}
      <Integration 
        title="Grow with integration"
        content="Vestibulum dapibus nunc ac augue. Cras ultricies mi eu turpis hendrerit fringilla. Pellentesque posuere. Vestibulum dapibus nunc ac augue."
        imageUrl='assets/image3.png'
      />
      <Newintegration 
        title="Grow with integration"
        content="Vestibulum dapibus nunc ac augue. Cras ultricies mi eu turpis hendrerit fringilla. Pellentesque posuere. Vestibulum dapibus nunc ac augue."
       
      />

    </>
  )
}
