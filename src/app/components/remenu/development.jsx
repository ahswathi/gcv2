import React from 'react'
import styles from './remenu.module.css'
import Link from 'next/link'

const development = ({handleClose}) => {
  return (
    <div className={styles.header}>
        <div className={styles.heading}>
        <p className={styles.ptag}><a onClick={() =>handleClose()} href="/services/cms">E commerce CMS based web development</a></p> 
    <p className={styles.links}><a onClick={() =>handleClose()} href="#">Shopify web development</a></p>
    <p className={styles.sublinks}><a onClick={() =>handleClose()} href="#">Shopify theme customization </a></p>    
    <p className={styles.sublinks}><a onClick={() =>handleClose()} href="#">Shopify custom theme development</a></p>
    <p className={styles.sublinks}><a onClick={() =>handleClose()} href="#">Shopify Maintenance and Support</a></p>
    <p className={styles.gap}></p>
    <p className={styles.links}><a onClick={() =>handleClose()} href="#">Shopify plus development</a></p>
    <p className={styles.sublinks}><a href="#">Shopify plus development Maintenance and Support</a></p> 
    <p className={styles.gap}></p>
    <p className={styles.sublinks}><a onClick={() =>handleClose()} href="/services/wordpress">Wordpress  development </a></p>
    <p className={styles.sublinks}><a href="#">WooCommerce Development </a></p>    
    <p className={styles.sublinks}><a href="#">WooCommerce Maintenance and Support</a></p>
    <p className={styles.gap}></p>
    <p className={styles.links}><a href="#">Webflow e-commerce development</a></p>
    <p className={styles.sublinks}><a href="#"> Webflow  ecommerce Maintenance and Support</a></p> 
    <p className={styles.gap}></p>
    <p className={styles.links}><a href="#">Bigcommerce development</a></p>
    <p className={styles.sublinks}><a href="#"> Bigcommerce  ecommerce Maintenance and Support</a></p> 
    </div>
    <div className={styles.vl}></div>
    <div className={styles.heading}>
    <p className={styles.ptag}><a onClick={() =>handleClose()} href="/services/custom-web-development"> E-commerce Custom web development </a></p>
    <p className={styles.links}><a href="#">Flutter E-commerce mobile app development</a></p>
    <p className={styles.sublinks}><a href="#">Flutter E-commerce mobile app Maintenance and Support </a></p>
    <p className={styles.links}><a href="#">React Native E-commerce mobile and development</a></p>
    <p className={styles.sublinks}><a href="#">React Native E-commerce mobile and Maintenance and Support </a></p>
    <p className={styles.links}><a href="#">IOS E-commerce mobile and development</a></p>
    <p className={styles.sublinks}><a href="#">IOS E-commerce mobile app Maintenance and Support </a></p>
    <p className={styles.links}><a href="#">E-commerce web  Maintenance and Support </a></p>
    </div>
    <div className={styles.vl}></div>
    <div className={styles.heading}>
    <p className={styles.ptag}><a onClick={() =>handleClose()} href="/services/custom-mobile-app-development"> E-commerce custom mobile app development </a></p>
    <p className={styles.links}><a href="#">E-commerce web  Maintenance and Support </a></p>
    </div>
</div>
  )
}

export default development
