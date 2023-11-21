import React from 'react'
import Mainheading from '../mainheading/mainheading'
import styles from './features.module.css'

const Features = () => {
  return (
  <>
  <Mainheading
 titlecenter="Built-in features for everything wholesale"
 contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
 /> 
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/Fashion.png' width='48px' height='48px' />
                    <h2>Company profiles</h2>
                    <p>Represent multiple buyers and locations with unique payment terms and user permissions.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-automotive-96.png' width='48px' height='48px' />
                    <h2>Customer-specific product</h2>
                    <p>Offer a curated buying experience with product catalogs assigned to a specific buyer or location.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-health-96.png' width='48px' height='48px' />
                    <h2>Personalized B2B store</h2>
                    <p>Create a unique buying experience for each customer with Liquid support for store themes, email templates, and branding.</p>
                    
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-kawaii-soda-96.png' width='48px' height='48px' />
                    <h2>Quantity rules</h2>
                    <p>Create conditional rules for products and variants, including minimums and maximums, case packs, and increments.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-manufacturing-96.png' width='48px' height='48px' />
                    <h2>Price lists</h2>
                    <p>Set customer-specific prices and assign them right to the company profile without the use of tags or apps.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-oil-industry-96.png' width='48px' height='48px' />
                    <h2>Net payment terms</h2>
                    <p>Automatically assign payment terms while tracking and collecting on orders as they become due in the admin.</p>
                    
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-kawaii-soda-96.png' width='48px' height='48px' />
                    <h2>Company metafields</h2>
                    <p>Represent multiple buyers and locations with unique payment terms and user permissions.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-manufacturing-96.png' width='48px' height='48px' />
                    <h2>Easy reordering</h2>
                    <p>Offer a curated buying experience with product catalogs assigned to a specific buyer or location.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-oil-industry-96.png' width='48px' height='48px' />
                    <h2>Flexibility getting paid</h2>
                    <p>Create a unique buying experience for each customer with Liquid support for store themes, email templates, and branding.</p>
                    
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-kawaii-soda-96.png' width='48px' height='48px' />
                    <h2>Self-serve purchasing</h2>
                    <p>Create conditional rules for products and variants, including minimums and maximums, case packs, and increments.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-manufacturing-96.png' width='48px' height='48px' />
                    <h2>Vaulted credit cards</h2>
                    <p>Set customer-specific prices and assign them right to the company profile without the use of tags or apps.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-oil-industry-96.png' width='48px' height='48px' />
                    <h2>Customizable B2B logic</h2>
                    <p>Automatically assign payment terms while tracking and collecting on orders as they become due in the admin.</p>
                    
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-kawaii-soda-96.png' width='48px' height='48px' />
                    <h2>Self-serve purchasing</h2>
                    <p>Create conditional rules for products and variants, including minimums and maximums, case packs, and increments.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-manufacturing-96.png' width='48px' height='48px' />
                    <h2>Global expansion</h2>
                    <p>Set customer-specific prices and assign them right to the company profile without the use of tags or apps.</p>
                    
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <img src='assets/icons8-oil-industry-96.png' width='48px' height='48px' />
                    <h2>Custom B2B solutions</h2>
                    <p>Automatically assign payment terms while tracking and collecting on orders as they become due in the admin.</p>
                    
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Features