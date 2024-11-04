"use client"
import React from 'react';
import Slidercompo from './mobileslider'
import Mainheading from '../mainheading/mainheading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css'

const Mobileappdevslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false
  };
  return (
    <div className={styles.containermain}>
      <Mainheading
        titlecenter=" Services"
        contentcenter="Deliver unparalleled mobile user interface experience to customers, enlighten them with requisite information and design sense. "
      />
      <div className={styles.container}>
        <Slider {...settings}>
          <Slidercompo class="slides" head="Flutter E-commerce mobile application development"
            listItem1="Interaction Development"
            listItem2="Integrations"
            listItem3="Deployment"
            listItem4="Playstore & App Store Hosting "
            listItem5="Optimization"
            bg="#0AA8E5" bullet='#ffffff' clr='#ffffff' src='/assets/mobilesupport.png' />
          <Slidercompo class="slides" head='React Native E-commerce mobile application development'
            listItem1="Interaction Development"
            listItem2="Integrations"
            listItem3="Deployment"
            listItem4="Playstore & App Store Hosting "
            listItem5="Optimization"
            bg='#46CB7E' bullet='#ffffff' clr='#ffffff' src='/assets/reactjs.png' />
          <Slidercompo class="slides" head="E commerce custom mobile app Maintenance and Support"
            listItem1="Interaction Development"
            listItem2="Integrations"
            listItem3="Deployment"
            listItem4="Playstore & App Store Hosting "
            listItem5="Optimization"
            bg="#212121" bullet='#ffffff' clr='#ffffff' src='/assets/Flutter1.png' />
        </Slider>
      </div>
    </div>
  )
}

export default Mobileappdevslider
