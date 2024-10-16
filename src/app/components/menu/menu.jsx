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
            
            <div className={styles.main}>
                <div className={styles.businesscat} >
                        <div className={styles.subcatmain}>
                        <h2>Design</h2>
                        <div className={styles.subcat}>
                                <Link /* href="/services/ecommerceuiux" */ href='#' onClick={handleclick}>
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
                         
                                <Link href="/services/wordpress" onClick={handleclick}>
                                        <h3>Wordpress  development</h3>
                                </Link>
                                </div>
                        </div>

                        <div className={styles.subcat2} >
                                <Link href="/services/custom-web-app-development" onClick={handleclick}>
                                        <h3>E-commerce Custom web development </h3>
                                </Link>
                                <Link href="/services/custom-mobile-app-development" onClick={handleclick}>
                                        <h3>E-commerce Custom Mobile app development </h3>
                                </Link>
                              
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