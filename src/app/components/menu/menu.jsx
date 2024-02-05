import React from 'react'
import Link from 'next/link'
import styles from './menu.module.css'

const Menu = ({setIsDropdownOpen, setSidebar}) => {
    const handleclick = () => {
        setIsDropdownOpen(false)
        setSidebar(false)
    }
  return (
    <>
        <div className={styles.container}>
        {/*  <div className={styles.innersection}> */}
            <div className={styles.title} style={{width: "18%"}}>Building Strong Capabilities to Empower Your Brand</div>
            <div className={styles.main}>
                <div className={styles.businesscat} >
                        <div className={styles.subcatmain}>
                        <h2>Design</h2>
                        <div className={styles.subcat}>
                                <Link href="/services/ecommerceuiux" onClick={handleclick}>
                                        <h3>E-commerce UI/UX design services</h3>
                                </Link>
                                <div className={styles.row}>       
                                <Link href="/services/websiteuiux" onClick={handleclick}>
                                        <h3>Website ui and ux</h3>
                                </Link>   
                                <Link href="/services/mobileuiux" onClick={handleclick}>
                                        <h3>Mobile ui and ux</h3>
                                </Link>
                                </div>
                        </div>
                        </div>
                        <div className={styles.subcatmain}>
                        <h2>Integration</h2>
                        <div className={styles.subcat}>
                                <Link href="#" onClick={handleclick}>
                                        <h3>Platform</h3>
                                </Link>
                                <div className={styles.row}>  
                                <Link href="#" onClick={handleclick}>
                                        <h3>Shipping</h3>
                                </Link>     
                                <Link href="#" onClick={handleclick}>
                                        <h3>Chatbotx</h3>
                                </Link>   
                                <Link href="#" onClick={handleclick}>
                                        <h3>CRM</h3>
                                </Link>
                                </div>
                        </div>
                        </div>
                </div> 

                <div className={styles.businesscat} >
                        <div className={styles.subcatmain}>
                        <h2>Development</h2>
                        <div className={styles.subcatmain2} >
                        <div className={styles.subcat2} >
                                <Link href="/services/cms" onClick={handleclick}>
                                        <h3>E commerce CMS based web development</h3>
                                </Link>
                                <div className={styles.row}>       
                                <Link href="#" onClick={handleclick} >
                                        <h3>Shopify web development</h3>
                                </Link>   
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>Shopify theme customization</h3>
                                </Link> 
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>Shopify custom theme development</h3>
                                </Link> 
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>Shopify Maintenance and Support</h3>
                                </Link> 
                                <Link href="#" onClick={handleclick}>
                                        <h3>Shopify plus development</h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>Shopify plus development Maintenance and Support</h3>
                                </Link>
                                <Link href="/services/wordpress" onClick={handleclick}>
                                        <h3>Wordpress  development</h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>WooCommerce Development </h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>WooCommerce Maintenance and Support</h3>
                                </Link>
                                <Link href="#" onClick={handleclick}>
                                        <h3>Webflow e-commerce development</h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>Webflow  ecommerce Maintenance and Support</h3>
                                </Link>
                                <Link href="#" onClick={handleclick}>
                                        <h3>Bigcommerce development</h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>Bigcommerce  ecommerce Maintenance and Support</h3>
                                </Link>
                                </div>
                        </div>

                        <div className={styles.subcat2} >
                                <Link href="/services/custom-web-app-development" onClick={handleclick}>
                                        <h3>E-commerce Custom web development </h3>
                                </Link>
                                <div className={styles.row}>  
                                <Link href="#" onClick={handleclick}>
                                        <h3>E-commerce mobile app Maintenance and Support</h3>
                                </Link>
                                </div>
                                <Link href="/services/custom-mobile-app-development" onClick={handleclick}>
                                        <h3>E-commerce Custom Mobile app development </h3>
                                </Link>
                                <div className={styles.row}>  
                                <Link href="#" onClick={handleclick}>
                                        <h3>Flutter E-commerce mobile app development</h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>Flutter E-commerce mobile app Maintenance and Support </h3>
                                </Link>
                                <Link href="#" onClick={handleclick}>
                                        <h3>React Native E-commerce mobile and development</h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>React Native E-commerce mobile and Maintenance and Support</h3>
                                </Link>
                                <Link href="#" onClick={handleclick}>
                                        <h3>IOS E-commerce mobile and development</h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3>IOS E-commerce mobile app Maintenance and Support</h3>
                                </Link>
                                <Link href="#" onClick={handleclick}>
                                        <h3>E-commerce web  Maintenance and Support</h3>
                                </Link>
                                <Link href="#" onClick={handleclick} style={{paddingLeft:"16px"}}>
                                        <h3></h3>
                                </Link>
                                </div>
                        </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
       {/*  </div> */}
    </>
  )
}

export default Menu