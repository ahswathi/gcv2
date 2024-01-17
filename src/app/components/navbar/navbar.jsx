'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import styles from './navbar.module.css'
import Image from 'next/image';
import Menu from '../menu/menu';
import Darkbutton from '../darkbutton/darkbutton';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Remenu from './../remenu/remenu';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [solution, setSolution] = useState(null)
    const [nestedSolution, setNestedSolution] = useState(null)
    const [development, setDevelopment] = useState(null)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleClose = () => {
        setSidebar(false)
        setIsDropdownOpen(false)
    }
    const handleCloseAll = () => {
        setSidebar(false);
        setSolution(null)
        setNestedSolution(null)
        setDevelopment(null)
    }
    console.log(nestedSolution);
    /* 
    const links = [
        {
            id: 1,
            title: 'Our story',
            url: '/ourstory',
        },
        {
            id: 2,
            title: 'Solutions',
            url: '/solutions',
        },
        {
            id: 3,
            title: 'Case studies',
            url: '/casestudies',
        },
    ] */
    console.log(solution)
    return (
        <>
            <nav className={styles.navbar}>
                <div className=''>
                    <Link href='/' className={styles.logo}>
                        <img
                            src="/assets/logo.png"
                            alt="Description of the image"
                            className={styles.gcv}
                        />
                    </Link>
                </div>
                <div className={sidebar ? `${styles.sidebar} ${styles.header}` : styles.header}>
                    <RxCross1 className={styles.exit} onClick={() => setSidebar(false)} />
                    <div style={{display: !sidebar ? 'flex' : ''}}>
                        <Link href="/ourstory" onClick={handleClose} className={styles.link}>Our Story</Link>
                        <div className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}>
                            {/* <Link href="#" className={styles.dropdownToggle} onClick={toggleDropdown}>
                                Solutions  <span class="arrow">&#9660;</span>
                            </Link> */}
                            <div className={styles.dropdownToggle} onClick={toggleDropdown}>
                                Solutions  <span class="arrow">&#9660;</span>
                            </div>
                            <div className={styles.dropdownContent}>
                                {/* <Link href="/shopify">Shopify</Link> */}
                                <Remenu handleClose={handleClose} />
                            </div>
                        </div>
                        <div className={styles.subHeader}>
                            <div className={styles.link} onClick={() => setSolution(1)}>Designs <SlArrowRight style={{fontSize: '13px'}} /></div>
                            <div className={styles.link} onClick={() => setSolution(2)}>Development <SlArrowRight style={{fontSize: '13px'}} /></div>
                            <div className={styles.link} onClick={() => setSolution(3)}>Integration <SlArrowRight style={{fontSize: '13px'}} /></div>
                        </div>
                        <Link href="/casestudies" onClick={handleClose} className={styles.link}>Case Studies</Link>
                    </div>
                    <div style={{ paddingLeft: sidebar ? '20px' : '' }}>
                        <Darkbutton title="Lets connect" onClick={handleClose} />
                    </div>
                </div>
                <RiMenu3Fill className={styles.hamburger} onClick={() => setSidebar(true)} />


                {/* 
            --------------------- Sub header ---------------------
             */}
             {/* ------------------design-------------- */}
                <div className={solution === 1 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                    <div className={styles.alignment}>
                    <p onClick={() => setSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p>
                    <br /><br />
                    <p onClick={() => setNestedSolution(1)} className={styles.ptag}>E-commerce UI/UX design services <SlArrowRight style={{fontSize: '13px'}} /></p>
                    </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
                </div>
                <div className={nestedSolution === 1 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                <div className={styles.alignment}>
                    <p onClick={() => setNestedSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p><br /><br />
                    <p className={styles.links}><Link onClick ={() =>setNestedSolution(null)}  href="/shopify">Website ui and ux</Link></p>
                    <p className={styles.links}><Link onClick ={() =>setNestedSolution(null)} href="/services/mobile">Mobile ui and ux</Link></p>
                </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
                </div>

                {/* ----------- development ------------- */}
                <div className={solution === 2 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
             <div className={styles.alignment}>
                <p onClick={() => setSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p>
                <br /><br />
                <p onClick={() => setNestedSolution(2)} className={styles.ptag}>E-commerce UI/UX design services <SlArrowRight style={{fontSize: '13px !important'}} /></p>
                <br />
                <p onClick={() => setNestedSolution(3)} className={styles.ptag}>E-commerce Custom web development <SlArrowRight style={{fontSize: '13px !important'}} /></p>
                <br />
                <p onClick={() => setNestedSolution(4)} className={styles.ptag}>E-commerce custom mobile app development <SlArrowRight style={{fontSize: '13px !important'}} /></p>
                </div>
             <RxCross1 className={styles.exit} onClick={handleCloseAll} />
            </div>

            <div className={nestedSolution === 2 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
            <div className={styles.alignment}>
                    <p onClick={() => setNestedSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p><br /><br />
                    <p className={styles.links}><a href="#">Shopify web development</a></p>
                    <p className={styles.sublink}><a href="#">Shopify theme customization</a></p>
                    <p className={styles.sublink}><a href="#">Shopify custom theme development</a></p>
                    <p className={styles.sublink}><a href="#">Shopify Maintenance and Support</a></p>
                    <br />
                    <p className={styles.links}><a href="#">Shopify plus development</a></p>
                    <p className={styles.sublink}><a href="#">Shopify plus development Maintenance and Support</a></p>
                    <br />
                    <p className={styles.links}><a href="#">Wordpress  development</a></p>
                    <p className={styles.sublink}><a href="#">WooCommerce Development</a></p>
                    <p className={styles.sublink}><a href="#">WooCommerce Maintenance and Support</a></p>
                    <br />
                    <p className={styles.links}><a href='#'>Webflow e-commerce development</a></p>
                    <p className={styles.sublink}><a href='#'>Webflow  ecommerce Maintenance and Support</a></p>
                    <br />
                    <p className={styles.links}><a href='#'>Bigcommerce development</a></p>
                    <p className={styles.sublink}><a href='#'>Bigcommerce  ecommerce Maintenance and Support</a></p>
                </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
            </div>
            
            <div className={nestedSolution === 3 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
            <div className={styles.alignment}>
            <p onClick={() => setNestedSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p><br /><br />
            <p className={styles.links}><a href="#">Flutter E-commerce mobile app development</a></p>
                    <p className={styles.sublink}><a href="#">Flutter E-commerce mobile app Maintenance and Support</a></p>
                    <br />
                    <p className={styles.links}><a href="#">React Native E-commerce mobile and development</a></p>
                    <p className={styles.sublink}><a href="#">React Native E-commerce mobile and Maintenance and Support</a></p>
                    <br />
                    <p className={styles.links}><a href="#">IOS E-commerce mobile and development</a></p>
                    <p className={styles.sublink}><a href="#">IOS E-commerce mobile app Maintenance and Support</a></p>
                    <br />
                    <p className={styles.links}><a href='#'>E-commerce web  Maintenance and Support </a></p>
                    <br />
            </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
            </div>
            <div className={nestedSolution === 4 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
            <div className={styles.alignment}>
            <p onClick={() => setNestedSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p><br /><br />
            <p className={styles.links}><a href="#">E-commerce web  Maintenance and Support </a></p>
            </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
            </div>

            {/* ----------------integration ------------- */}
            <div className={solution === 3 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                <div className={styles.alignment}>
                <div onClick={() =>setSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</div>
                <br /><br />
                <p onClick={() =>setNestedSolution(5)} className={styles.ptag}>Payment gateway <SlArrowRight style={{fontSize: '13px'}} /></p>
                </div>
             <RxCross1 className={styles.exit} onClick={handleCloseAll} />
            </div>

            <div className={nestedSolution === 5 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                <div className={styles.alignment}>
                <div onClick={() =>setNestedSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</div>
                <br /><br />
                    <p className={styles.links}><a href="#">Shipping</a></p>
                    <p className={styles.links}><a href="#">Chatbot</a></p>
                    <p className={styles.links}><a href="#">CRM</a></p>
                </div>
             <RxCross1 className={styles.exit} onClick={handleCloseAll} />
            </div>
            </nav >
            <div className={styles.line}>
            </div>
        </>
    )
}

export default Navbar