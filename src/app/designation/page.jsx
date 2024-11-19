import React from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'Explo Commerce',
  description: 'We build digital commerce that perform faster.',
  metadata: new URL("https://www.explocommerce.com"),
  alternates: {
    canonical: 'https://www.explocommerce.com/designation',
  }
}
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.designation}>
          <h2>Product Designer</h2>
          <p>Bangalore india</p>
        </div>
        <div className={styles.description}>
          <h2>Description</h2>
          <p>We are looking for an individual to come up with new product designs that meet the needs and wants of consumers.</p>
        </div>
        <div className={styles.qualification}>
          <h2>Qualification</h2>
          <div className={styles.col}>
            <div className={styles.bullet}>
              <div>
                <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909" />
                </svg>
              </div>
              <div>
                <p>We are looking for an individual to come up with new product designs that meet the needs and wants of consumers.</p>
              </div>
            </div>
            <div className={styles.bullet}>
              <div>
                <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909" />
                </svg>
              </div>
              <div>
                <p>5+ years of relevant work experience preferred in a startup ecosystem.</p>
              </div>
            </div>
            <div className={styles.bullet}>
              <div>
                <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909" />
                </svg>
              </div>
              <div>
                <p>Leadership skills- Ability to influence and inspire your team while steering your products in the best directions possible.</p>
              </div>
            </div>
            <div className={styles.bullet}>
              <div>
                <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909" />
                </svg>
              </div>
              <div>
                <p>Strong ability to build a product vision and communicate that vision.</p>
              </div>
            </div>
            <div className={styles.bullet}>
              <div>
                <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0989 0.000102093C17.7011 0.000110658 19 1.29897 19 2.9012V15.7445C19 18.3593 15.8126 19.6396 14.0039 17.7513L1.70129 4.90794C-0.0658543 3.06312 1.24168 2.26738e-05 3.79633 3.63296e-05L16.0989 0.000102093Z" fill="#090909" />
                </svg>
              </div>
              <div>
                <p>A hustler mindset.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.application}>
        <form>
          <input
            type="text"
            value="Your Name "
            className={styles.appinput}
            required
          />
          <br />
          <input
            type="tel"
            value="Your Mobile  "
            className={styles.appinput}
            required
          />
          <br />
          <input
            type="email"
            value="Your Email "
            className={styles.appinput}
            required
          />
          <br />
          <textarea
            value="Message"
            className={styles.apptextarea}
            rows='6'
            required
          />
          <br />
          <div className={styles.customfile}>
            <input type="file" id="fileInput" value="Upload cv" accept=".jpg, .png, .pdf" className={styles.inputfile} />
            <label htmlFor="fileInput">Upload cv</label>
          </div>
          <button className={styles.button}>

            Apply now
          </button>

        </form>

      </div>




    </div>
  )
}

export default page