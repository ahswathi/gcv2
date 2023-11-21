import Link from 'next/link'
import React from 'react'
import Casestudies from '../components/casestudies/casestudies'
import Ctaform from '../components/ctaform/ctaform'
import Herosub from '../components/herosub/herosub'
import Landinghero from '../components/landinghero/landinghero'
import Latestcs from '../components/latestcs/latestcs'
import Mainheading from '../components/mainheading/mainheading'
import Models from '../components/models/models'
import Newchooseus from '../components/newchooseus/newchooseus'
import Newintegration from '../components/newintegration/newintegration'
import Process from '../components/process/process'
import Subhero from '../components/subhero/subhero'
import Testimonials from '../components/testimonials/testimonials'
import styles from './page.module.css'

const Landingpage = () => {
  return (
    <div>
      <Landinghero/> 
     <Casestudies/>
     <Newchooseus/>
        <Testimonials/>
        <Process/>
        <Newintegration 
        title="Grow with integration"
        content="Vestibulum dapibus nunc ac augue. Cras ultricies mi eu turpis hendrerit fringilla. Pellentesque posuere. Vestibulum dapibus nunc ac augue."
       
      />
    </div>
  )
}

export default Landingpage