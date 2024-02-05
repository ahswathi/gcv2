import React from 'react'
import Link from 'next/link'
import styles from './menu.module.css'

const Menu = ({setIsDropdownOpen, setSidebar}) => {
    const handleclick = () => {
        setIsDropdownOpen(false)
        setSidebar(false)
    }
  return (
    <>
        <div className={styles.container}>
            <div className={styles.businesscat}>
                <h2>BUSINESS MODEL</h2>
                <div className={styles.subcat}>
                    <div className={styles.row}>
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                    <div className={styles.row}>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                    <div className={styles.row}>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div  className={styles.buttonmain}> 
                <button  className={styles.button}>
                    <div className={styles.enquire}>
                        See All 
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                        <path d="M13.8125 14.625L21.9375 9L13.8125 3.375" stroke="#464646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.3125 9L4.0625 9" stroke="#090909" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                </div>
            </div> 
             <div className={styles.businesscat}>
                <h2>INDUSTRY</h2>
                <div className={styles.subcat}>
                    <div className={styles.row}>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                    <div className={styles.row}>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                    <div className={styles.row}>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div  className={styles.buttonmain}> 
                <button  className={styles.button}>
                    <div className={styles.enquire}>
                        See All 
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                        <path d="M13.8125 14.625L21.9375 9L13.8125 3.375" stroke="#464646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.3125 9L4.0625 9" stroke="#090909" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                </div>
            </div>
            <div className={styles.stage}>
                
                <h2>STAGE</h2>
                <div className={styles.subcat}>
                    <div className={styles.stagerow}>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                    <div className={styles.stagerow}>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                    <div className={styles.stagerow}>
                        
                    <Link href="/shopify" onClick={handleclick}> 
                        <div className={styles.business}>
                            <h3>Shopify</h3>
                            <p>Streamline workflow to <br/> increase business efficiency.</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div  className={styles.buttonmain}> 
                <button  className={styles.button}>
                    <div className={styles.enquire}>
                        See All 
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                        <path d="M13.8125 14.625L21.9375 9L13.8125 3.375" stroke="#464646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.3125 9L4.0625 9" stroke="#090909" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu