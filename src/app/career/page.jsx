import React from 'react'
import Mainheading from '../components/mainheading/mainheading'
import styles from './page.module.css'
import Subhero from '../components/subhero/subhero'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/career',
  }
}

const page = () => {
  return (
    <>
      <Subhero />
      <Mainheading
        titlecenter="Job Openings"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      />

      <div className={styles.container}>
        <div className={styles.jobs}>
          <div className={styles.row}>
            <div className={styles.description}>
              <h2>Product Designer</h2>
              <p>We are looking for an individual to come up with new product designs that meet the needs and wants of consumers.</p>
            </div>
            <div>
              <a className={styles.button}>
                Apply now
              </a>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.row}>
            <div className={styles.description}>
              <h2>Product Designer</h2>
              <p>We are looking for an individual to come up with new product designs that meet the needs and wants of consumers.</p>
            </div>
            <div>
              <a className={styles.button}>
                Apply now
              </a>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.row}>
            <div className={styles.description}>
              <h2>Product Designer</h2>
              <p>We are looking for an individual to come up with new product designs that meet the needs and wants of consumers.</p>
            </div>
            <div>
              <a className={styles.button}>
                Apply now
              </a>
            </div>

          </div>
          <div className={styles.line}></div>
          <div className={styles.row}>
            <div className={styles.description}>
              <h2>Product Designer</h2>
              <p>We are looking for an individual to come up with new product designs that meet the needs and wants of consumers.</p>
            </div>
            <div>
              <a className={styles.button}>
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page