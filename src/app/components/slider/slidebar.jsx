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
        contentcenter="Experience convenience, professionalism, and quality with a range of Explo Commerce services."
      />
      <div className={styles.container}>
        <Slider {...settings}>
          <Slidercompo class="slides" head="Develop"
            title="Build and operate applications at your convenience. Choose from the range of Operating Systems (OS)."
            bg="#0AA8E5" bullet='#ffffff' clr='#ffffff' src='/assets/sidebar1.png' />
          <Slidercompo class="slides" head='Design'
            title="Incorporate the best designs that blend well with customers. Choose from the range of Operating Systems (OS)."
            bg='#46CB7E' bullet='#ffffff' clr='#ffffff' src='/assets/sidebar3.png' />
          <Slidercompo class="slides" head='Integration'
            title="Converge and improvise, integrate applications to scale. Choose from the range of Operating Systems (OS)."
            bg='#212121' bullet='#ffffff' clr='#ffffff' src='/assets/image4.png' />
        </Slider>
      </div>
    </div>
  )
}

export default Slidebar
