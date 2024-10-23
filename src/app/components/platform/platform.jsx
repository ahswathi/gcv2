'use client'
import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './platform.module.css'
import Link from 'next/link'


const Platform = () => {
    return (
        <div className={styles.container}>
            <img src="/assets/building.png" className={styles.platform} />
            <div className={styles.maincontainer}>
                <div className={styles.outercontainer}>
                    <div className={styles.main}>
                        <div className={styles.mainleft}>Vission</div>
                        <div className={styles.mainright}>
                            To build robust and next-generation e-commerce platforms for companies and empower them to scale at the market pace, deliver applications that endure the test of time, and elevate the company toward the growth phase.
                        </div>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.mainleft}>Mission</div>
                        <div className={styles.mainright}>
                            Develop applications related to e-commerce functions and build scalable systems that enhance value to the end customer, intend to create a happy and satisfied customer base with quick deliveries across various categories.
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <p>Bespoke websites and applications have become the order of the day.</p>
                    </div>
                    <div className={styles.para}>
                    New-age websites have multiple objectives and functions; custom websites are customer-centric and extend complete support. Websites and applications tailored to meet the demands of the customers must deliver value with products. The bespoke websites enhance greater value in terms of manoeuvrability, operations, and functionality, and deliver optimum value to the company. Entrepreneurs and businessmen who are first-timers in the digital marketplace and those who intend to develop websites can leverage on the applications to build great websites. Scalability is an important feature that delivers support and assistance to the company, growth becomes a natural phenomenon with custom-based website applications.
                       {/*  <br /> <br /> */}
                    </div>
                </div>
                {/* <Mainheading
                    titlecenter="Succeed online with the right creation platform"
                    contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
                /> <br />
                <div className={styles.content2}>
                    <div className={styles.story}>
                        <img src="/assets/rectangle.png" />
                        <h3 className={styles.title}>
                            U2 Fashion Store| Fashion App | UI/UX design
                        </h3>
                        <p>The go-to creation platform complete with a full suite of built-in tools for anyone looking to build, manage and grow their online presence.</p>
                        <div className={styles.read}>
                            <Link href='#'>Dribble <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B" />
                            </svg></Link>
                        </div>
                    </div>
                    <div className={styles.story}>
                        <img src="/assets/rectangle2.png" />
                        <h3 className={styles.title}>
                            Food Recipe & Ingredients Concept Recipe App
                        </h3>
                        <p>The go-to creation platform complete with a full suite of built-in tools for anyone looking to build, manage and grow their online presence.</p>
                        <div className={styles.read}>
                            <Link href='#'> Dribble <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B" />
                            </svg></Link>
                        </div>
                    </div>
                </div> */}
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <p>Technology that deeply impacts deploys changes from the core. </p></div>
                    <div className={styles.para}>
                        <p> Agile technology builds a collaborative platform for the customers and the online company, the products and services offered by the company must be built to scale consistently. Building a professional e-commerce website with efficient features is now simple to the core. Open SDK renders design capabilities that make a world of difference to e-commerce websites and create ecosystems that are unique in style and purpose. Big advantage for Developers, Web Designers, and Online professionals as they can market their apps and services to a global audience through Wix. Freelancers and agencies are thoroughly empowered to deliver quality work to their clients with our new platform on Wix Studio. 
                        </p>
                        {/* <p>Our global user base, open SDK, and unparalleled design capabilities create a unique ecosystem. Developers, web designers, and online professionals can effectively market their apps and services to millions through Wix. For agencies and freelancers, our new platform, Wix Studio, allows them to deliver exceptional client work at scale.</p>
                    */} </div>
                </div>
            </div>
        </div>
    )
}
export default Platform;