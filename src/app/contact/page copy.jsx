'use client'
import React from 'react'
import styles from './page.module.css'
import Mainheading from '../components/mainheading/mainheading'
import Subhero from '../components/subhero/subhero'
import Brands from '../components/brands/brands'

const page = () => {
  return (
    <>
    <Subhero/>
      <Mainheading
        titlecenter="Lets Talk !"
      /> 
    <div className={styles.container}>
        <div className={styles.application}>
            <div className={styles.form}>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.appinput}>
                    <input
                    type="text"
                    value="Your Name "
                    required
                  />
                  </div>
                <br />
                  <div className={styles.appinput}>
                  <input
                    type="tel"
                    value="Your Mobile  "
                    
                    required
                  />
                  </div>
                <br />

                {/* <label for="mySelect">Select an option:</label> */}
            <select className={styles.mySelect} name="mySelect">
              <option value="option1">Company Stage</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <br />
            <select className={styles.mySelect} name="mySelect">
              <option value="option1">Company Stage</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
                    
                    <br />
                </div>
                <div className={styles.col}>
                  <div className={styles.appinput}>
                    <input
                    type="text"
                    value="Your Organization / Company Name  "
                    required
                  />
                  </div>
                <br />
                  <div className={styles.appinput}>
                  <input
                    type="tel"
                    value="Your Mobile  "
                    
                    required
                  />
                  </div>
                <br />
                <select className={styles.mySelect} name="mySelect">
              <option value="option1">Company Stage</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <br />
            <select className={styles.mySelect} name="mySelect">
              <option value="option1">Company Stage</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
                  <br />
                </div>
              </div>  

              <div className={styles.row2}>
                <div  className={styles.apptextarea}>
                        <textarea
                          value="Description"
                          rows='6'
                          required
                        />
                </div>
                <br /> 
                    <button onClick={()=>{console.log('logged out')}} className={styles.button}>
                          <div className={styles.enquire}>
                          Apply now
                          </div>
                      </button>
              </div>
            </div>
        </div>
    </div>
    <div className={styles.cardrow}>
            <div className={styles.cardcol}>
                <div className={styles.card}>
                    <img src='assets/contact1.png' width='48px' height='48px' />
                    <h2>Contact Us</h2>
                    <p>info@magnetoitsolutions.com</p>
                    
                </div>
            </div>
            <div className={styles.cardcol}>
                <div className={styles.card}>
                    <img src='assets/contact2.png' width='48px' height='48px' />
                    <h2>Address</h2>
                    <p>347 Fifth Ave, Suite 1402-182,<br/>
                    New York, NY 10016</p>
                    
                </div>
            </div>
            <div className={styles.cardcol}>
                <div className={styles.card}>
                    <img src='assets/contact3.png' width='48px' height='48px' />
                    <h2>Call Us</h2>
                    <p>+1-646-205-8151</p>
                    
                </div>
            </div>
        </div>
        <div className={styles.spacing}></div>
        <Mainheading
            titlecenter="Our Partner"
            contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
            /> 
        <Brands/>
        <div className={styles.spacing}></div>
    </>
  )
}

export default page