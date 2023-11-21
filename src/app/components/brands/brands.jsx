import React from 'react'
import styles from './brands.module.css'

const Brands = () => {
  return (
  <>
 {/*    <div className={styles.container}>
        <div>
            <img src='assets/clientbrands/cb1.png'/>
        </div>
        <div>
            <img src='assets/clientbrands/cb2.png'/>
        </div>
        <div>
            <img src='assets/clientbrands/cb3.png'/>
        </div>
        <div>
            <img src='assets/clientbrands/cb4.png'/>
        </div>
        <div>
            <img src='assets/clientbrands/cb5.png'/>
        </div>
        <div>
            <img src='assets/clientbrands/cb6.png'/>
        </div>
    </div> */}
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
</>
  )
}

export default Brands