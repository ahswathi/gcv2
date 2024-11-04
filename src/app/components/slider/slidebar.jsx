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
        <Slider {...settings}> <Slidercompo class="slides" head='Design'
          listItem1="User Research"
          listItem2="Low-fedility Wireframe designs"
          listItem3="High-fedility Wireframe designs"
          listItem4="Interaction designs"
          listItem5="UX writing"
          listItem6="User testing"
          title="Incorporate the best designs that blend well with user experience, customers experience & service experience. "
          bg='#46CB7E' bullet='#ffffff' clr='#ffffff' src='/assets/sidebar3.png' />

          <Slidercompo class="slides" head="Develop"
            listItem1="Android Apps"
            listItem2="IOS APPS"
            listItem3="Enterprise Software"
            listItem4="React Native Apps"
            listItem5="Web Apps"
            listItem6="Data Visualization"
            title="Build and operate applications at your convenience. Choose from the range of Operating Systems (OS)."
            bg="#0AA8E5" bullet='#ffffff' clr='#ffffff' src='/assets/sidebar1.png' />

          <Slidercompo class="slides" head='Integration'
            listItem1="Ship Rocket"
            listItem2="CC Avenue"
            listItem3="Paytm"
            listItem4="Razor Pay"
            listItem5="Phonepay"
            listItem6="Paypal"
            title="Converge and improvise, integrate applications to scale. Choose from the range of Operating Systems (OS)."
            bg='#212121' bullet='#ffffff' clr='#ffffff' src='/assets/image4.png' />
        </Slider>
      </div>
    </div>
  )
}

export default Slidebar
