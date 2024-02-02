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

const page = () => {
  return (
    <>
    <Contacthero title='Visionsharp is a Web Design Agency in Manchester specialising in specific platforms.Visionsharp is a Web Design Agency in Manchester specialising in specific platforms.'
      heading='We build digital commerce that perform faster.'/>
   {/*  <Brands/> */}
    <div className={styles.cardrow}>
            <div className={styles.cardcol}>
                <div className={styles.card}>
                    <Image src={contact1} width='48px' height='48px' />
                    <h2>Contact Us</h2>
                    <p>info@magnetoitsolutions.com</p>
                    
                </div>
            </div>
            <div className={styles.cardcol}>
                <div className={styles.card}>
                    <Image src={contact2} width='48px' height='48px' />
                    <h2>Address</h2>
                    <p>347 Fifth Ave, Suite 1402-182,<br/>
                    New York, NY 10016</p>
                    
                </div>
            </div>
            <div className={styles.cardcol}>
                <div className={styles.card}>
                    <Image src={contact3} width='48px' height='48px' />
                    <h2>Call Us</h2>
                    <p>+1-646-205-8151</p>
                    
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
                      value="Your Name "
                      className={styles.appinput}
                      required
                    />
                  <br />
                    <input
                      type="tel"
                      value="Your Mobile  "
                      className={styles.appinput}
                      required
                    />
                  <br />
                  <select className={styles.mySelect} name="mySelect">
                  <option value="option1">Company Stage</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  </select>
                  <br />
                  <select className={styles.mySelect} name="mySelect">
                    <option value="option1">Company Type</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>
              </div>
              <div className={styles.col2}>
                    <input
                      type="text"
                      value="Your Organization / Company Name  "
                      className={styles.appinput}
                      required
                    />
                  <br />
                    <input
                      type="tel"
                      value="Your Email "
                      className={styles.appinput}
                      required
                    />
                  <br />
                  <select className={styles.mySelect} name="mySelect">
                  <option value="option1">Industry Type</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
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
                  <div  className={styles.apptextarea}>
                          <textarea
                            value="Description"
                            rows='6'
                            required
                          />
                  </div>
                <button onClick={()=>{console.log('logged out')}} className={styles.button}>
                      <div className={styles.enquire}>
                      Apply now
                      </div>
                </button> 
              </div>
            
          </form>
          
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