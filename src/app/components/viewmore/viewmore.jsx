import Link from 'next/link'
import React from 'react'
import styles from './viewmore.module.css'

const Viewmore = () => {
  return (
    <div className={styles.read}>
                 <Link href='#'>   View more 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M17.1446 8.20808C17.5351 7.81756 17.5351 7.18439 17.1446 6.79387L10.7806 0.429909C10.3901 0.0393844 9.75696 0.0393844 9.36643 0.429909C8.97591 0.820433 8.97591 1.4536 9.36643 1.84412L15.0233 7.50098L9.36643 13.1578C8.97591 13.5484 8.97591 14.1815 9.36643 14.572C9.75696 14.9626 10.3901 14.9626 10.7806 14.572L17.1446 8.20808ZM0.4375 8.50098H16.4375V6.50098H0.4375V8.50098Z" fill="#1E222B"/>
</svg></Link>
                </div> 
  )
}

export default Viewmore