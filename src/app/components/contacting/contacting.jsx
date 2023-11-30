"use client"
import React, { useState } from 'react'
import styles from './contacting.module.css'
import Calling from './calling'
import Meeting from './meeting';
import Event from './event'
import Webinar from './webinar';
import Polling from './polling';

const contacting = () => {
    const [opentab, setOpentab] = useState(0)
    const handleClick = (id)=>{
        setOpentab(id)
    }
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                {/* <div className={opentab===2? `${styles.tabs} ${styles.active}` : styles.tabs}>
                    <button className={article ? `${styles.menu} ${styles.active}` : styles.menu} onClick={handleArticle}>Article</button>
                    <button className={tool ? `${styles.menu} ${styles.active}` : styles.menu} onClick={handleTool}>Tools</button>
                    <button className={insight ? `${styles.menu} ${styles.active}` : styles.menu} onClick={handleInsight}>Insights</button>
                </div> */}
                <button className={opentab===0? `${styles.tabs} ${styles.active}` : styles.tabs} onClick={() =>handleClick(0)}>Calling</button>
                <button className={opentab===1? `${styles.tabs} ${styles.active}` : styles.tabs} onClick={() =>handleClick(1)}>Meetings</button>
                <button className={opentab===2? `${styles.tabs} ${styles.active}` : styles.tabs} onClick={() =>handleClick(2)}>Events</button>
                <button className={opentab===3? `${styles.tabs} ${styles.active}` : styles.tabs} onClick={() =>handleClick(3)}>Webinars</button>
                <button className={opentab===4? `${styles.tabs} ${styles.active}` : styles.tabs} onClick={() =>handleClick(4)}>Polling</button>
            </div>
            {opentab===0 && <Calling />}
            {opentab===1 && <Meeting />}
            {opentab===2 && <Event />}
            {opentab===3 && <Webinar />}
            {opentab===4 && <Polling />}
        </div>
    )
}

export default contacting
