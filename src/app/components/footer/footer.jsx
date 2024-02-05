
'use client'
import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <p>Want to start <br/>a project?</p>
          {/* <Lightbutton title=" Lets Talk" /> */}
          <div className={styles.read}>
                 <Link href='/contact'>  Let's talk
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
        <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#ffffff"/>
      </svg></Link>
          <div>
          </div>
          </div>
          <img src="/assets/footer.png" className={styles.gap} />
        </div>
        <div className={styles.footerRight}>
          <div>
            <p>Duis aute irure dolor in reprehenderit in met voluptate velit esse cillum dolore eu fugiat dolore eu fugiat nulla pariatur ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui.</p>
          </div>
          <div className={styles.line}></div>

          <div className={styles.footerNav}>
            <div>
              <h2>Design</h2>
              <ul>
              <Link href="/services/ecommerceuiux"><li>E-commerce UI/UX design services</li></Link>
              <Link href="/services/websiteuiux"><li style={{ paddingLeft: '10px' }}>Website ui and ux</li></Link>
              <Link href="/services/mobileuiux"><li style={{ paddingLeft: '10px' }}>Mobile ui and ux</li></Link>
                {/*<li>Baby & kids</li>
                <li>Media</li>
                 <li>Clothing</li>
                <li>Electronics</li>
                <li>Food & drink</li>
                <li>Hardware & automotive</li>
                <li>Health & beauty</li>
                <li>Home & decor</li>
                <li>Jewelry & accessories</li>
                <li>Outdoor & garden</li>
                <li>Pet supplies</li>
                <li>Restaurants</li>
                <li>Sports & recreation</li>
                <li>Toys & games</li> */}
              </ul>
            </div>
            <div>
              <h2>Integration</h2>
                <ul>
                  <li>Shipping  </li>
                  <li>Chatbotx</li>
                  <li>CRM </li>
                </ul>
              {/* <h2>STAGES</h2>
                <ul>
                  <li>Early </li>
                  <li>Funded </li>
                  <li>Estabalished</li>
                </ul> */}
            </div>
          </div>
          <div className={styles.footerNav}>
            <div>
            <h2>Development</h2>
              <ul>
              <Link href="/services/cms"><li>E commerce CMS based web development</li></Link>
                <Link href="/services/wordpress"><li style={{ paddingLeft: '10px' }}>Wordpress  development </li></Link>
              <Link href="/services/custom-web-development"><li>E-commerce Custom web development</li></Link>
              <Link href="/services/custom-mobile-app-development"><li>E-commerce Custom Mobile app development</li></Link>
                {/* <li>Design & Photography</li>
                <li>Education & Science</li>
                <li>Entertainment</li>
                <li>Fashion</li>
                <li>Design & Photography</li>
                <li>Education & Science</li>
                <li>Entertainment</li>
                <li>Fashion</li>
                <li>Design & Photography</li>
                <li>Education & Science</li>
                <li>Entertainment</li>
                <li>Fashion</li> */}
              </ul>
            </div>
          </div>
          <div className={styles.footerNavmob}>
            <div>
              <h2>INDUSTRY</h2>
              <ul>
              <Link href="/artcrafts"><li>Arts & crafts</li></Link>
                <li>Baby and kids</li>
                <li>Books, music, and video</li>
                <li>Clothing</li>
                <li>Electronics</li>
                <li>Food and drink</li>
                <li>Hardware and automotive</li>
                <li>Health and beauty</li>
                <li>Home and decor</li>
                <li>Jewelry and accessories</li>
                <li>Outdoor and garden</li>
                <li>Pet supplies</li>
                <li>Restaurants</li>
                <li>Sports and recreation</li>
                <li>Toys and games</li>
              </ul>
              <h2>USEFULL LINKS</h2>
                <ul>
                  <li>Case studies </li>
                  <li>Industries</li>
                  <li>Contact us </li>
                  <li>Blog</li>
                  <li>Career</li>
                </ul>
            </div>
            <div>
            <h2>BUSINESS MODEL</h2>
              <ul>
                <li>Design & Photography</li>
                <li>Education & Science</li>
                <li>Entertainment</li>
                <li>Fashion</li>
                <li>Design & Photography</li>
                <li>Education & Science</li>
                <li>Entertainment</li>
                <li>Fashion</li>
                <li>Design & Photography</li>
                <li>Education & Science</li>
                <li>Entertainment</li>
                <li>Fashion</li>
              </ul>
              <h2>STAGES</h2>
                <ul>
                  <li>Early </li>
                  <li>Funded </li>
                  <li>Estabalished</li>
                </ul>
            </div>
            
          </div>
        </div>
      </div>
      <div className={styles.footerfoot}>
          
      <div className={styles.line}></div>
          <div className={styles.copywrite}>
            <p>
              Copyright © Explo Commerce |  Powered by Oracle
            </p>
            <div className={styles.footerimg}>
              <div className={styles.footersvg}>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 3.5C11.3389 3.5 3.5 11.3389 3.5 21C3.5 30.661 11.3389 38.5 21 38.5C30.6421 38.5 38.5 30.661 38.5 21C38.5 11.3389 30.6421 3.5 21 3.5ZM32.5591 11.5667C34.647 14.1101 35.8997 17.3558 35.9376 20.8671C35.4441 20.7722 30.5092 19.7663 25.5363 20.3926C25.4225 20.1459 25.3275 19.8801 25.2137 19.6144C24.91 18.8932 24.5683 18.1529 24.2267 17.4507C29.731 15.211 32.2364 11.9843 32.5591 11.5667ZM21 6.08134C24.7961 6.08134 28.2695 7.50488 30.9078 9.83948C30.6421 10.2191 28.3834 13.237 23.0689 15.2299C20.6204 10.7316 17.9062 7.04935 17.4886 6.47993C18.6084 6.21421 19.7853 6.08134 21 6.08134ZM14.6416 7.4859C15.0401 8.01734 17.6974 11.7186 20.1838 16.122C13.199 17.9821 7.03038 17.9441 6.36605 17.9441C7.33404 13.3129 10.4658 9.45987 14.6416 7.4859ZM6.04338 21.019C6.04338 20.8671 6.04338 20.7153 6.04338 20.5634C6.68872 20.5824 13.9393 20.6773 21.3986 18.4376C21.8351 19.2728 22.2337 20.1269 22.6133 20.981C22.4235 21.038 22.2147 21.0949 22.0249 21.1518C14.3189 23.6383 10.2191 30.4333 9.87745 31.0027C7.50488 28.3644 6.04338 24.853 6.04338 21.019ZM21 35.9566C17.5456 35.9566 14.3568 34.7798 11.8324 32.8059C12.0982 32.2554 15.135 26.4094 23.5623 23.4675C23.6003 23.4485 23.6193 23.4485 23.6573 23.4295C25.7641 28.8769 26.6182 33.4512 26.846 34.7608C25.0428 35.539 23.0689 35.9566 21 35.9566ZM29.3324 33.3943C29.1806 32.4832 28.3834 28.1177 26.4284 22.7462C31.1166 22.006 35.2164 23.2207 35.7288 23.3916C35.0835 27.5483 32.692 31.1356 29.3324 33.3943Z" fill="white"/>
                </svg>
              </div>
              <div className={styles.footersvg}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="2" fill="white"/>
                <path d="M29.3333 16.0807C29.3333 8.67184 23.3644 2.6665 16 2.6665C8.63552 2.6665 2.66663 8.67184 2.66663 16.0807C2.66663 22.7776 7.54129 28.327 13.9164 29.3332V19.959H10.5315V16.0798H13.9164V13.1252C13.9164 9.76339 15.9066 7.90562 18.9529 7.90562C20.4106 7.90562 21.9377 8.16784 21.9377 8.16784V11.4692H20.2551C18.5991 11.4692 18.0835 12.5038 18.0835 13.5652V16.0807H21.7813L21.1902 19.9581H18.0835V29.3332C24.4586 28.327 29.3333 22.7776 29.3333 16.0807Z" fill="#090909"/>
                </svg>
              </div> 
                <div className={styles.footersvg}>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.75 7.56618V34.4338C36.75 35.0481 36.506 35.6372 36.0716 36.0716C35.6372 36.506 35.0481 36.75 34.4338 36.75H7.56618C6.95189 36.75 6.36276 36.506 5.92839 36.0716C5.49403 35.6372 5.25 35.0481 5.25 34.4338V7.56618C5.25 6.95189 5.49403 6.36276 5.92839 5.92839C6.36276 5.49403 6.95189 5.25 7.56618 5.25H34.4338C35.0481 5.25 35.6372 5.49403 36.0716 5.92839C36.506 6.36276 36.75 6.95189 36.75 7.56618ZM14.5147 17.2941H9.88235V32.1176H14.5147V17.2941ZM14.9316 12.1985C14.9341 11.8481 14.8675 11.5007 14.7356 11.176C14.6038 10.8514 14.4093 10.5558 14.1632 10.3064C13.9172 10.0569 13.6244 9.85828 13.3016 9.72195C12.9788 9.58561 12.6323 9.51419 12.2819 9.51176H12.1985C11.486 9.51176 10.8026 9.79483 10.2987 10.2987C9.79483 10.8026 9.51176 11.486 9.51176 12.1985C9.51176 12.9111 9.79483 13.5945 10.2987 14.0984C10.8026 14.6022 11.486 14.8853 12.1985 14.8853C12.549 14.8939 12.8976 14.8334 13.2247 14.7072C13.5517 14.581 13.8507 14.3916 14.1045 14.1499C14.3583 13.9081 14.562 13.6187 14.7039 13.2982C14.8458 12.9777 14.9232 12.6323 14.9316 12.2819V12.1985ZM32.1176 23.1124C32.1176 18.656 29.2826 16.9235 26.4662 16.9235C25.544 16.8774 24.6258 17.0738 23.8033 17.4932C22.9807 17.9126 22.2825 18.5403 21.7782 19.3138H21.6485V17.2941H17.2941V32.1176H21.9265V24.2334C21.8595 23.4259 22.1139 22.6246 22.6343 22.0036C23.1547 21.3825 23.8991 20.9919 24.7059 20.9166H24.8819C26.355 20.9166 27.4482 21.8431 27.4482 24.1778V32.1176H32.0806L32.1176 23.1124Z" fill="white"/>
                </svg>
              </div> 
              <div className={styles.footersvg}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="2" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C12.7408 4 12.3328 4.0136 11.0528 4.072C9.7752 4.1304 8.9024 4.3336 8.1392 4.6304C7.3392 4.9312 6.6136 5.4032 6.0136 6.0144C5.40338 6.61371 4.93109 7.3388 4.6296 8.1392C4.3344 8.9024 4.1304 9.776 4.072 11.0536C4.0144 12.3328 4 12.74 4 16C4 19.26 4.0136 19.6672 4.072 20.9472C4.1304 22.2248 4.3336 23.0976 4.6304 23.8608C4.9312 24.6608 5.4032 25.3864 6.0144 25.9864C6.61372 26.5966 7.33881 27.0689 8.1392 27.3704C8.9024 27.6664 9.7752 27.8696 11.0528 27.928C12.3328 27.9864 12.7408 28 16 28C19.2592 28 19.6672 27.9864 20.9472 27.928C22.2248 27.8696 23.0976 27.6664 23.8608 27.3696C24.6608 27.0688 25.3864 26.5968 25.9864 25.9856C26.5966 25.3863 27.0689 24.6612 27.3704 23.8608C27.6664 23.0976 27.8696 22.2248 27.928 20.9472C27.9864 19.6672 28 19.2592 28 16C28 12.7408 27.9864 12.3328 27.928 11.0528C27.8696 9.7752 27.6664 8.9024 27.3696 8.1392C27.0683 7.33845 26.596 6.61306 25.9856 6.0136C25.3863 5.40338 24.6612 4.93109 23.8608 4.6296C23.0976 4.3344 22.224 4.1304 20.9464 4.072C19.6672 4.0144 19.26 4 16 4ZM16 6.1624C19.204 6.1624 19.584 6.1744 20.8496 6.232C22.0192 6.2856 22.6544 6.48 23.0776 6.6456C23.6376 6.8624 24.0376 7.1232 24.4576 7.5424C24.8776 7.9624 25.1376 8.3624 25.3544 8.9224C25.5192 9.3456 25.7144 9.9808 25.768 11.1504C25.8256 12.416 25.8376 12.796 25.8376 16C25.8376 19.204 25.8256 19.584 25.768 20.8496C25.7144 22.0192 25.52 22.6544 25.3544 23.0776C25.1623 23.5988 24.8559 24.0704 24.4576 24.4576C24.0705 24.856 23.5989 25.1624 23.0776 25.3544C22.6544 25.5192 22.0192 25.7144 20.8496 25.768C19.584 25.8256 19.2048 25.8376 16 25.8376C12.7952 25.8376 12.416 25.8256 11.1504 25.768C9.9808 25.7144 9.3456 25.52 8.9224 25.3544C8.40116 25.1623 7.92961 24.8559 7.5424 24.4576C7.14414 24.0704 6.8377 23.5988 6.6456 23.0776C6.4808 22.6544 6.2856 22.0192 6.232 20.8496C6.1744 19.584 6.1624 19.204 6.1624 16C6.1624 12.796 6.1744 12.416 6.232 11.1504C6.2856 9.9808 6.48 9.3456 6.6456 8.9224C6.8624 8.3624 7.1232 7.9624 7.5424 7.5424C7.92955 7.14404 8.40113 6.83758 8.9224 6.6456C9.3456 6.4808 9.9808 6.2856 11.1504 6.232C12.416 6.1744 12.796 6.1624 16 6.1624V6.1624Z" fill="#090909"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 20.0042C15.4742 20.0042 14.9536 19.9006 14.4678 19.6994C13.982 19.4982 13.5406 19.2033 13.1688 18.8315C12.797 18.4597 12.502 18.0183 12.3008 17.5325C12.0996 17.0467 11.996 16.526 11.996 16.0002C11.996 15.4744 12.0996 14.9537 12.3008 14.4679C12.502 13.9822 12.797 13.5408 13.1688 13.169C13.5406 12.7971 13.982 12.5022 14.4678 12.301C14.9536 12.0998 15.4742 11.9962 16 11.9962C17.062 11.9962 18.0804 12.4181 18.8313 13.169C19.5822 13.9198 20.004 14.9383 20.004 16.0002C20.004 17.0621 19.5822 18.0806 18.8313 18.8315C18.0804 19.5824 17.062 20.0042 16 20.0042V20.0042ZM16 9.83221C14.3642 9.83221 12.7953 10.482 11.6386 11.6388C10.4819 12.7955 9.83203 14.3644 9.83203 16.0002C9.83203 17.6361 10.4819 19.2049 11.6386 20.3616C12.7953 21.5184 14.3642 22.1682 16 22.1682C17.6359 22.1682 19.2047 21.5184 20.3615 20.3616C21.5182 19.2049 22.168 17.6361 22.168 16.0002C22.168 14.3644 21.5182 12.7955 20.3615 11.6388C19.2047 10.482 17.6359 9.83221 16 9.83221V9.83221ZM23.9624 9.72021C23.9624 10.1069 23.8088 10.4777 23.5354 10.7512C23.262 11.0246 22.8911 11.1782 22.5044 11.1782C22.1177 11.1782 21.7469 11.0246 21.4735 10.7512C21.2 10.4777 21.0464 10.1069 21.0464 9.72021C21.0464 9.33352 21.2 8.96267 21.4735 8.68925C21.7469 8.41582 22.1177 8.26221 22.5044 8.26221C22.8911 8.26221 23.262 8.41582 23.5354 8.68925C23.8088 8.96267 23.9624 9.33352 23.9624 9.72021" fill="#090909"/>
                </svg>

              </div> 

            </div>
          </div >
      </div>
    </div>
  )
}

export default Footer