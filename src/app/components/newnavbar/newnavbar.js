'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import styles from './newnavbar.module.css'
import Image from 'next/image';
import Menu from '../menu/menu';
import Darkbutton from '../darkbutton/darkbutton';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Remenu from '../remenu/remenu';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const Newnavbar = () => {
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
                        />
                    </Link>
                </div>
                <div className={sidebar ? `${styles.sidebar} ${styles.header}` : styles.header}>
                    <RxCross1 className={styles.exit} onClick={() => setSidebar(false)} />
                    <div style={{ display: !sidebar ? 'flex' : '' }}>
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
                                {/* <Remenu handleClose={handleClose} /> */}
                                <Menu />
                            </div>
                        </div>
                        <div className={styles.subHeader}>{/* 
                            <div className={styles.link} onClick={() => setSolution(1)}>Designs <SlArrowRight style={{ fontSize: '13px' }} /></div>
                            <div className={styles.link} onClick={() => setSolution(2)}>Development <SlArrowRight style={{ fontSize: '13px' }} /></div> */}

                            <div className={styles.link}>Designs </div>
                            <div className={styles.alignment}>
                                <p className={styles.links}><Link onClick={() => setNestedSolution(null)} href="/services/mobileuiux">Website ui and ux</Link></p>
                                <p className={styles.links}><Link onClick={() => setNestedSolution(null)} href="/services/websiteuiux">Mobile ui and ux</Link></p>
                            </div>
                            <div className={styles.link}>Development </div>
                            <div className={styles.alignment}>
                                <p className={styles.ptag}> <a onClick={() => setNestedSolution(null)} href="/services/cms">E commerce CMS based web development</a> {/* <SlArrowRight style={{ fontSize: '13px !important' }} /> */}</p>

                                <p className={styles.ptag}> <a onClick={() => setNestedSolution(null)} href="/services/custom-web-development">E-commerce Custom mobile app development</a> {/* <SlArrowRight style={{ fontSize: '13px !important' }} /> */}</p>
                            
                                <p className={styles.ptag}> <a onClick={() => setNestedSolution(null)} href="/services/custom-mobile-app-development">E-commerce Custom web development</a> {/* <SlArrowRight style={{ fontSize: '13px !important' }} /> */}</p>
                            </div>
                        </div>
                        {/*  <Link href="/casestudies" onClick={handleClose} className={styles.link}>Case Studies</Link> */}
                    </div>
                    <div className={styles.sidebarbutton} style={{ paddingLeft: sidebar ? '20px' : '' }}>
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
                        <p onClick={() => setNestedSolution(1)} href="/services/ecommerce" className={styles.ptag}>E-commerce UI/UX design services <SlArrowRight style={{ fontSize: '13px' }} /></p>
                        {/*  <p className={styles.links}><Link onClick={() => setNestedSolution(1)} href="/services/ecommerce" className={styles.ptag}>E-commerce UI/UX design services <SlArrowRight style={{ fontSize: '13px' }} /></Link></p>
                        <p className={styles.links}><Link onClick={() => setNestedSolution(null)} href="/services/mobileuiux">E-commerce UI/UX design services</Link></p> */}
                    </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
                </div>
                <div className={nestedSolution === 1 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                    <div className={styles.alignment}>
                        <p onClick={() => setNestedSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p><br /><br />
                        <p className={styles.links}><Link onClick={() => setNestedSolution(null)} href="/services/mobileuiux">Website ui and ux</Link></p>
                        <p className={styles.links}><Link onClick={() => setNestedSolution(null)} href="/services/websiteuiux">Mobile ui and ux</Link></p>
                    </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
                </div>

                {/* ----------- development ------------- */}
                <div className={solution === 2 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                    <div className={styles.alignment}>
                        <p onClick={() => setSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p>
                        <br /><br />
                        <p onClick={() => setNestedSolution(2)} href="/services/ecommerce" className={styles.ptag}>E commerce CMS based web development  <SlArrowRight style={{ fontSize: '13px !important' }} /></p>
                        <br />
                        <p className={styles.ptag}> <a onClick={() => setNestedSolution(null)} href="/services/custom-mobile-app-development">E-commerce Custom mobile app development</a> {/* <SlArrowRight style={{ fontSize: '13px !important' }} /> */}</p>
                        <br />
                        <p className={styles.ptag}> <a onClick={() => setNestedSolution(null)} href="/services/custom-web-development">E-commerce Custom web development</a> {/* <SlArrowRight style={{ fontSize: '13px !important' }} /> */}</p>
                    </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
                </div>

                <div className={nestedSolution === 2 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                    <div className={styles.alignment}>
                        <p onClick={() => setNestedSolution(null)} className={styles.exitBtn} ><SlArrowLeft />Back</p><br /><br />
                        <p className={styles.links}><a onClick={() => setNestedSolution(null)} href="/services/wordpress">Wordpress  development </a></p>
                    </div>
                    <RxCross1 className={styles.exit} onClick={handleCloseAll} />
                </div>





            </nav >
            <div className={styles.line}>
            </div>
        </>
    )
}

export default Newnavbar