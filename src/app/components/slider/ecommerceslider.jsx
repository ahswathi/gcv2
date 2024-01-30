"use client"
import React from 'react';
import Slidercompo from './slider'
import Mainheading from '../mainheading/mainheading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css'

const Ecommerceslider = () => {
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
          <Slidercompo class="slides" head="Website ui and ux" bg="#0AA8E5" bullet='#fff' clr='#ffffff' src='/assets/uiuxservice1.png' />
          <Slidercompo class="slides"  head='Mobile ui and ux' bg='#46CB7E' bullet='#fff' clr='#ffffff' src='/assets/uiuxservice2.png' />
          </Slider>
      </div>
    </div>
  )
}

export default Ecommerceslider
