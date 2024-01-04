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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };/* 
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

    return (
        <>
            {/* <div className={styles.container}>
        <div className=''>
            <Link href='/' className={styles.logo}>
            <img
                src="assets/logo.jpg"
                alt="Description of the image"
                width={146}
                height={60}
                />
            </Link>
        </div>
        <div className={styles.header}>
            <div>{links.map((link)=>(
                <Link key={link.id} href={link.url} className={styles.link}> 
                {link.title}</Link>
            ))
            }
            </div>
            <div> 
                <button onClick={()=>{console.log('logged out')}} className={styles.button}>
                        <div className={styles.enquire}>
                        Lets connect
                        </div>
                    </button>
            </div>
        </div>
    </div>
    <div className={styles.line}>
    </div> */}

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
                        <Link href="/casestudies" onClick={() => setSidebar(false)} className={styles.link}>Case Studies</Link>
                    </div>
                    <div style={{ paddingLeft: sidebar ? '20px' : '' }}>
                        <Darkbutton title="Lets connect" onClick={() => setSidebar(false)} />
                    </div>
                </div>
                <RiMenu3Fill className={styles.hamburger} onClick={() => setSidebar(true)} />
            </nav>
            <div className={styles.line}>
            </div>
        </>
    )
}

export default Navbar