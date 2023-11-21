'use client'
import React from 'react'
import Estimate from '../estimate/estimate'
import Letstalk from '../letstalk/letstalk'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import styles from './landinghero.module.css'

const Landinghero = () => {
  return (
  <>
    
      <div className={styles.container}>
        <div className={styles.service}>
            <div className={styles.mainLeft}>
                <h6>Design</h6>
                <h2>We build digital commerce that perform.</h2>
                <p>Vestibulum dapibus nunc ac augue. Cras ultricies mi eu turpis hendrerit fringilla. Pellentesque posuere. Vestibulum dapibus nunc ac augue. </p>
                <div className={styles.read}>
                    <Letstalk/>
                    <Estimate/>
                </div>
            </div>
            <div className={styles.mainRight}>
                <div className={styles.application}>
                    <form>
                  <span>grow commerce</span>
                  <div className='line'></div>
                      <div className={styles.row}>
                        <div className={styles.col1}>
                              <input
                                type="text"
                                value=" Name "
                                className={styles.appinput}
                                required
                              />
                            <br />
                            <input
                                type="text"
                                value="Email "
                                className={styles.appinput}
                                required
                              />
                            <br />
                        </div>
                        <div className={styles.col2}>
                              
                              <input
                                type="tel"
                                value="Phone Mobile  "
                                className={styles.appinput}
                                required
                              />
                            <br />
                          
                              <input
                                type="tel"
                                value="Location "
                                className={styles.appinput}
                                required
                              />
                            <br />
                            
                        </div>
                      </div>
                      <div className={styles.row2}>
                            <div  className={styles.apptextarea}>
                                    <textarea
                                      value="Message"
                                      rows='6'
                                      required
                                    />
                            </div>
                        </div>
                      
                        <div className={styles.row3}>
                          <div className={styles.ellipse}>
                            <img src='assets/Ellipse.png' />
                            <p>
                            Arrange a chat with sales team
                            </p>
                          </div>
                          <div>
                            <button onClick={()=>{console.log('logged out')}} className={styles.button}>
                                  <div className={styles.enquire}>
                                  Book a time
                                  </div>
                            </button> 
                            </div>
                    </div>
                    </form>
                    
                    
                  </div>
             </div>
        </div>
      
</div>
 </>
  )
}

export default Landinghero