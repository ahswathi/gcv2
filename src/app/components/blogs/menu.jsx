"use client"
import React from 'react';
import styles from './blog.module.css'

export const Article = () => {
  return (
    <div className={styles.tabcontainer}>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
          <img src="assets/article.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog </div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
        <img src="assets/tool.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog</div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
          <img src="assets/insight.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog</div>
      </div>
    </div>
  )
}

export const Tools = () => {
  return (
    <div className={styles.tabcontainer}>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
        <img src="assets/article.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog </div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
        <img src="assets/tool.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog</div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
          <img src="assets/insight.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog</div>
      </div>
    </div>
  )
}

export const Insights = () => {
  return (
    <div className={styles.tabcontainer}>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
        <img src="assets/article.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog </div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
        <img src="assets/tool.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog</div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.bgImg}>
          <img src="assets/insight.png" className={styles.blog} />
        </div>
        <div className={styles.blogtext}>the quick fox jumps over the lazy dog</div>
      </div>
    </div>
  )
}
