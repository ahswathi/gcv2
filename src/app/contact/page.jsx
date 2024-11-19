'use client'
import React from 'react'
import styles from './page.module.css'
import Mainheading from '../components/mainheading/mainheading'
import Contacthero from '../components/contacthero/contacthero'
import Brands from '../components/brands/brands'
import Image from 'next/image'
import contact1 from '../../../public/assets/contact1.png'
import contact2 from '../../../public/assets/contact2.png'
import contact3 from '../../../public/assets/contact3.png'
import Link from 'next/link'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/contact',
  }
}
const page = () => {
  return (
    <>
      <div className={styles.quicknav}>
        <Link href="/" className={styles.main}>
          Home
        </Link>
        <span>/</span>
        <Link href="/ourstory" className={styles.sub}>
          Contact Us
        </Link>
      </div>
      <Contacthero title='Explo Commerce delivers bespoke e-commerce applications and solutions that impact the sales process holistically.'
        heading='Agility supports e-commerce companies in catapulting them into the league of successful companies. ' />
      {/*  <Brands/> */}
      <div className={styles.cardrow}>
        <div className={styles.cardcol}>
          <div className={styles.card}>
            <Image src={contact1} width='48px' height='48px' />
            <h2>Contact Us</h2>
            <p>shivkumar@explocommerce.com</p>

          </div>
        </div>
        <div className={styles.cardcol}>
          <div className={styles.card}>
            <Image src={contact2} width='48px' height='48px' />
            <h2>Address</h2>
            <p>Mahaganapathi Nagar, 6th phase 1st stage, Rajaji Nagar Industrial Town, Rajajinagar, Bengaluru, Karnataka 560010</p>

          </div>
        </div>
        <div className={styles.cardcol}>
          <div className={styles.card}>
            <Image src={contact3} width='48px' height='48px' />
            <h2>Call Us</h2>
            <p>+91 97399 69166</p>

          </div>
        </div>
      </div>

      <Mainheading
        titlecenter="Lets Talk !"
      />
      <div className={styles.container}>
        <div className={styles.application}>
          <form >
            <div className={styles.row}>
              <div className={styles.col1}>
                <input
                  type="text"
                  placeholder="Your Name "
                  className={styles.appinput}
                  required
                />
                <br />
                <input
                  type="tel"
                  placeholder="Your Mobile  "
                  className={styles.appinput}
                  required
                />
                <br />
                <select className={styles.mySelect} name="mySelect">
                  <option value="option1">Company Stage</option>
                  <option value="option2">Small (Early Stage)</option>
                  <option value="option3">Medium (After Market Fit)</option>
                  <option value="option4">Large (Enterprises)</option>
                </select>
                <br />
                <select className={styles.mySelect} name="mySelect">
                  <option value="option1">Company Type</option>
                  <option value="option2">Proprietorship</option>
                  <option value="option3">Private Limited</option>
                  <option value="option4">Public Limited</option>
                </select>
              </div>
              <div className={styles.col2}>
                <input
                  type="text"
                  placeholder="Your Organization / Company Name  "
                  className={styles.appinput}
                  required
                />
                <br />
                <input
                  type="tel"
                  placeholder="Your Email "
                  className={styles.appinput}
                  required
                />
                <br />
                <select className={styles.mySelect} name="mySelect">
                  <option value="option1">Industry Type</option>
                  <option value="option2">Fashion & Apparel </option>
                  <option value="option3">Health & Beauty </option>
                  <option value="option4">Food & Beverage </option>
                  <option value="option4">Manufacturing </option>
                  <option value="option4">Automotive </option>
                  <option value="option4">Real-estate</option>
                </select>
                <br />
                <select className={styles.mySelect} name="mySelect">
                  <option value="option1">Services </option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.apptextarea}>
                <textarea
                  placeholder="Description"
                  rows='6'
                  required
                />
              </div>
              <button onClick={() => { console.log('logged out') }} className={styles.button}>
                <div className={styles.enquire}>
                  Enquire now
                </div>
              </button>
            </div>

          </form>

        </div>
      </div>

      <div className={styles.spacing}></div>
      {/* <Mainheading

        titlecenter="Our Partner"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      /> */}
      {/*    <Brands /> */}
      <div className={styles.spacing}></div>
    </>
  )
}

export default page