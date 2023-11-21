'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image';

const Navbar = () => {
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
    ]
  return (
    <>
    <div className={styles.container}>
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
    </div>
    </>
  )
}

export default Navbar