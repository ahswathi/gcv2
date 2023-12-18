"use client"
import React from 'react';
import Slidercompo from './slider'
import Mainheading from '../mainheading/mainheading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css'

const Slidebar = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false
  };
  return (
    <div className={styles.containermain}>
    <Mainheading
        titlecenter="Our Sevices"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        />
        <div className={styles.container}>
      <Slider {...settings}>
      <Slidercompo head="Develop" bg="#0AA8E5" />
      <Slidercompo head='Design' bg='#46CB7E' />
      <Slidercompo head='Integration' bg='#EF8D8D' />
      </Slider>
      </div>
    </div>
  )
}

export default Slidebar
