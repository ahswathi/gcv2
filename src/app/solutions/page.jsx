import Link from 'next/link'
import React from 'react'
import Ctaform from '../components/ctaform/ctaform'
import Latestcs from '../components/latestcs/latestcs'
import Mainheading from '../components/mainheading/mainheading'
import Models from '../components/models/models'
import Portfolio from '../components/portfolio/portfolio'
import Process from '../components/process/process'
import Slider from '../components/slider/slider'
import Subhero from '../components/subhero/subhero'
import Testimonials from '../components/testimonials/testimonials'
import styles from './page.module.css'

const Solutions = () => {
  return (
    <div>
      <Subhero/>
        <Slider/>
        <Process/>
        <Portfolio/>
        <Testimonials/>
        <Ctaform/>
    </div>
  )
}

export default Solutions