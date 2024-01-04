"use client"
import React, { useState } from 'react';
import styles from './blog.module.css'
//import { article, insights, tools } from './menu';
import { Insights, Article, Tools } from './menu';

const blogs = () => {
  const [menu, setMenu] = useState(0)

  const handleClick = (i) => {
    setMenu(i)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.head}>
    <div className={styles.tabs}>
        <button className={menu===0 ? `${styles.menu} ${styles.active}` : styles.menu} onClick={()=>handleClick(0)}>Article</button>
        <button className={menu===1 ? `${styles.menu} ${styles.active}` : styles.menu} onClick={()=>handleClick(1)}>Tools</button>
        <button className={menu===2 ? `${styles.menu} ${styles.active}` : styles.menu} onClick={()=>handleClick(2)}>Insights</button>
        </div>
        <button className={styles.view}><p>View all</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
  <g clip-path="url(#clip0_1126_1732)">
    <path d="M11.313 22.1921L8.84144 19.7418L15.3294 13.2539H0.126953V9.65305H15.3294L8.84144 3.17578L11.313 0.714844L22.0517 11.4535L11.313 22.1921Z" fill="#1D212C"/>
  </g>
  <defs>
    <clipPath id="clip0_1126_1732">
      <rect width="23" height="23" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </button>
      </div>
      {menu===0 && <Article />}
      {menu===1 && <Tools />}
      {menu===2 && <Insights />}
    </div>
  )
}

export default blogs
