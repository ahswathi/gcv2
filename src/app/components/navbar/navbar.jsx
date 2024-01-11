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

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [solution, setSolution] = useState(null)
    const [nestedSolution, setNestedSolution] = useState(null)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

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
                            src="assets/logo.png"
                            alt="Description of the image"
                            className={styles.gcv}
                        />
                    </Link>
                </div>
                <div className={sidebar ? `${styles.sidebar} ${styles.header}` : styles.header}>
                    <RxCross1 className={styles.exit} onClick={() => setSidebar(false)} />
                    <div>
                        <Link href="/ourstory" onClick={() => setSidebar(false)} className={styles.link}>Our Story</Link>
                        <div className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}>
                            {/* <Link href="#" className={styles.dropdownToggle} onClick={toggleDropdown}>
                                Solutions  <span class="arrow">&#9660;</span>
                            </Link> */}
                            <div className={styles.dropdownToggle} onClick={toggleDropdown}>
                                Solutions  <span class="arrow">&#9660;</span>
                            </div>
                            <div className={styles.dropdownContent}>
                                {/* <Link href="/shopify">Shopify</Link> */}
                                <Remenu />
                            </div>
                        </div>
                        <div className={styles.subHeader}>
                            <div className={styles.link} onClick={() => setSolution(1)}>Designs</div>
                            <div className={styles.link} onClick={() => setSolution(2)}>Development</div>
                            <div className={styles.link} onClick={() => setSolution(3)}>Integration</div>
                        </div>
                        <Link href="/casestudies" onClick={() => setSidebar(false)} className={styles.link}>Case Studies</Link>
                    </div>
                    <div style={{ paddingLeft: sidebar ? '20px' : '' }}>
                        <Darkbutton title="Lets connect" onClick={() => setSidebar(false)} />
                    </div>
                </div>
                <RiMenu3Fill className={styles.hamburger} onClick={() => setSidebar(true)} />


                {/* 
            --------------------- Sub header ---------------------
             */}
                <div className={solution === 1 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                    <p onClick={() => setSolution(null)}>Back</p>
                    <h2>Hii</h2>
                    <br />
                    <h2 onClick={() => setNestedSolution(2)}>Hii</h2>
                    <br />
                    <h2>Hii</h2>
                    <br />
                </div>
                <div className={nestedSolution === 1 ? `${styles.sidebar} ${styles.subHeaderActive}` : styles.subHeaderActive}>
                    <p onClick={() => setNestedSolution(null)}>Back</p>
                    <h2>Hii</h2>
                    <h2>Hii</h2>
                    <h2>Hii</h2>
                </div>
            </nav >
            <div className={styles.line}>
            </div>
        </>
    )
}

export default Navbar