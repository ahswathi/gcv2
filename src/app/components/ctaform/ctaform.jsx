'use client'
import React from 'react'
import styles from './ctaform.module.css'
import Mainheading from '../mainheading/mainheading'

const Ctaform = () => {
  return (
    <div className={styles.container}>

      <Mainheading
        titlecenter="Let's Talk"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      />
      <div className={styles.form}>
        <div className={styles.inputs}>
          <span>Hello! My name is</span> 
          <input type='text' className={styles.custominput} placeholder='enter your name here' />  <span>and I want to discuss a potential </span> <br />
          <span>project. You can email me at </span>  <input type='text' className={styles.custominput} placeholder='your@email.com ' />  <span>or reach me on</span>
          <input type='text' className={styles.custominput} placeholder=' #your phone' /> <br />
          <span>Here are some details about my project:</span> <br />
          <div className={styles.apptextarea}>
            <textarea
              placeholder="my project is about . . . "
              rows='6'
              required
              style={{fontFamily: `"Outfit", sans-serif`}}
            />
          </div>
          {/* <div><input type='text' className={styles.custominput} value='   my project is about . . . ' /></div><br /><br /> */}
          <span>I am interested in (select one or more)</span><br /><br />
        </div>
        <div className={styles.options}>
          <div className={styles.spanbtn}>Branding</div>
          <div className={styles.spanbtn}>Web / App Design</div>
          <div className={styles.spanbtnactive}>Graphic Design</div>
          <div className={styles.spanbtn}>Motion Design & Video</div>
          <div className={styles.spanbtn}>Copywriting</div>
          <div className={styles.spanbtn}>Illustration</div>
          <div className={styles.spanbtn}>Web Development</div>
          <div className={styles.spanbtn}>Copywriting</div>
          <div className={styles.spanbtn}>Illustration</div>
          <div className={styles.spanbtn}>Branding</div>
          <div className={styles.spanbtn}>Graphic Design</div>
        </div>
        <div className={styles.request}><button className={styles.requestbtn}>Send request</button></div>
      </div>
      <div className={styles.formmob}>
        <div className={styles.inputs}>
          <span>Hello! My name is</span>
          <input type='text' className={styles.custominput} placeholder='enter your name here' />
          <span>and I want to discuss a potential project. </span> <br />
          <span> You can email me at </span>
          <input type='text' className={styles.custominput} value='your@email.com ' />  <span>or reach me on</span>
          <input type='text' className={styles.custominput} value=' #your phone' /> <br />
          <span>Here are some details about my project:</span> <br />
          <div className={styles.apptextarea}>
            <textarea
              value="Description"
              rows='6'
              required
            />
          </div>
          <div>
            <input type='text' className={styles.custominput} value='   my project is about . . . ' /></div><br />
          <span>I am interested in (select one or more)</span><br />
        </div>
        <div className={styles.options}>
          <div className={styles.spanbtn}>Branding</div> <div className={styles.spanbtn}>Web / App Design</div>
          <div className={styles.spanbtnactive}>Graphic Design</div> <div className={styles.spanbtn}>Motion Design & Video</div>
          <div className={styles.spanbtn}>Copywriting</div>
          <div className={styles.spanbtn}>Illustration</div>
          <div className={styles.spanbtn}>Web Development</div>  <div className={styles.spanbtn}>Copywriting</div> <div className={styles.spanbtn}>Illustration</div>
          <div className={styles.spanbtn}>Branding</div> <div className={styles.spanbtn}>Graphic Design</div>
        </div>
        <div className={styles.request}><button className={styles.requestbtn}>Send request</button></div>
      </div>
    </div>
  )
}

export default Ctaform