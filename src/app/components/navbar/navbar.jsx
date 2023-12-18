'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import styles from './navbar.module.css'
import Image from 'next/image';
import Menu from '../menu/menu';
import Darkbutton from '../darkbutton/darkbutton';

const Navbar = () => {
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
                width={146}
                height={60}
                />
            </Link>
        </div>
        <div className={styles.header}>
            <div>
            <Link href="/ourstory" className={styles.link}>Our Story</Link>
            <div className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}>
                <Link href="#" className={styles.dropdownToggle} onClick={toggleDropdown}>
                Solutions  <span class="arrow">&#9660;</span>
                </Link>
                    <div className={styles.dropdownContent}>
                        {/* <Link href="/shopify">Shopify</Link> */}
                        <Menu setIsDropdownOpen={setIsDropdownOpen} />
                    </div>
            </div>
            <Link href="/casestudies" className={styles.link}>Case Studies</Link>
            </div>
                <div> 
                    <Darkbutton title="Lets connect" />
                </div>
        </div>
    </nav>
    <div className={styles.line}>
    </div>
    </>
  )
}

export default Navbar