import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './partner.module.css'

const Partner = () => {
  return (
    <>
        <Mainheading 
        titlecenter="Our Partners"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
        /> 
         <div className={styles.wrapper}>
	<div className={styles.slider}>
		<div className={styles.slidetrack}>
		
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb1.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb2.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb3.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb4.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb5.png'/>
			</div>
			
			<div className={styles.slide}>
			<img src='assets/clientbrands/cb6.png'/>
			</div>
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb1.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb2.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb3.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb4.png'/>
			</div>
			
			<div className={styles.slide}>
            <img src='assets/clientbrands/cb5.png'/>
			</div>
			
			<div className={styles.slide}>
			<img src='assets/clientbrands/cb6.png'/>
			</div>
			
		</div>
	</div>
</div>
        {/* <div className={styles.mobcontainer}>
            <div  className={styles.mob}>
                <img src='assets/clientbrands/cb1.png'/>
                <img src='assets/clientbrands/cb2.png'/>
            </div>
            <div className={styles.mob}>
                <img src='assets/clientbrands/cb3.png'/>
                <img src='assets/clientbrands/cb4.png'/>
            </div>
            <div className={styles.mob}>
                <img src='assets/clientbrands/cb5.png'/>
                <img src='assets/clientbrands/cb6.png'/>
            </div>
        </div> */}
    </>
  )
}

export default Partner