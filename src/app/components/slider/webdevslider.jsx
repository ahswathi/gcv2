"use client"
import React from 'react';
import Slidercompo from './slider'
import Mainheading from '../mainheading/mainheading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css'

const Webdevslider = () => {
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
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        />
        <div className={styles.container}>
          <Slider {...settings}>
          <Slidercompo class="slides" head="E commerce web  Maintenance and Support" bg="#0AA8E5" bullet='#ffffff' clr='#ffffff' src='/assets/ECustomwebdevelopmentser.png' />
          {/* <Slidercompo class="slides"  head='React Native E-commerce mobile application development' bg='#E4FFF3' bullet='#ffffff' clr='#ffffff' src='/assets/reactjs.png' />
          <Slidercompo class="slides" head="E commerce custom mobile app Maintenance and Support" bg="#0FCC75" bullet='#ffffff' clr='#ffffff' src='/assets/mobilesupport.png' />
           */}</Slider>
      </div>
    </div>
  )
}

export default Webdevslider
