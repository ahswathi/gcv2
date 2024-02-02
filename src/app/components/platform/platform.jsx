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
                    Offer every client global coverage, reduced latency and a smooth user experience. Sites auto-scale with traffic and transaction spikes. Wix Studio runs on a combo of AWS, GCP and our own data centers—backed by over 200 CDN nodes. Offer every client global coverage, reduced latency and a smooth user experience. Sites auto-scale with traffic and transaction spikes. Wix Studio runs on a combo of AWS, GCP and our own data centers—backed by over 200 CDN nodes.
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.mainleft}>Mission</div>
                    <div className={styles.mainright}>
                    Offer every client global coverage, reduced latency and a smooth user experience. Sites auto-scale with traffic and transaction spikes. Wix Studio runs on a combo of AWS, GCP and our own data centers—backed by over 200 CDN nodes. Offer every client global coverage, reduced latency and a smooth user experience. Sites auto-scale with traffic and transaction spikes. Wix Studio runs on a combo of AWS, GCP and our own data centers—backed by over 200 CDN nodes.
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <p>Create your own professional web presence—exactly the way you want.</p></div>
                <div className={styles.para}>
                Our powerful technology allows everyone to get online with a personalized, professional web presence. Whether it's your first time creating or you're a long time expert, you'll find the features and solutions you need to build a professional website with total creative freedom.
                <br /> <br />
                Our global user base, open SDK, and unparalleled design capabilities create a unique ecosystem. Developers, web designers, and online professionals can effectively market their apps and services to millions through Wix. For agencies and freelancers, our new platform, Wix Studio, allows them to deliver exceptional client work at scale.
                </div>
            </div>
            <Mainheading 
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
  <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B"/>
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
  <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B"/>
</svg></Link>
                </div>
        </div>
        </div>
        <div className={styles.content}>
                <div className={styles.heading}>
                    <p>Create your own professional web presence—exactly the way you want.</p></div>
                <div className={styles.para}>
               <p> Our powerful technology allows everyone to get online with a personalized, professional web presence. Whether it's your first time creating or you're a long time expert, you'll find the features and solutions you need to build a professional website with total creative freedom.
               </p>
               <p>Our global user base, open SDK, and unparalleled design capabilities create a unique ecosystem. Developers, web designers, and online professionals can effectively market their apps and services to millions through Wix. For agencies and freelancers, our new platform, Wix Studio, allows them to deliver exceptional client work at scale.</p>
                </div>
        </div>
        </div>
    </div>
    )
}
export default Platform;