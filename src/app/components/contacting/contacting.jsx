import React from 'react'
import styles from './contacting.module.css'
import Calling from './calling'

const contacting = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                {/* <div className={styles.tabs}>
                    <button className={article ? `${styles.menu} ${styles.active}` : styles.menu} onClick={handleArticle}>Article</button>
                    <button className={tool ? `${styles.menu} ${styles.active}` : styles.menu} onClick={handleTool}>Tools</button>
                    <button className={insight ? `${styles.menu} ${styles.active}` : styles.menu} onClick={handleInsight}>Insights</button>
                </div> */}
                <button className={styles.tabs}>Calling</button>
                <button className={styles.tabs}>Meetings</button>
                <button className={styles.tabs}>Events</button>
                <button className={styles.tabs}>Webinars</button>
                <button className={styles.tabs}>Polling</button>
            </div>
            <Calling />
        </div>
    )
}

export default contacting
