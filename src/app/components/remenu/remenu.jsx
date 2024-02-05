import React, { useState } from 'react'
import styles from './remenu.module.css'
import Development from './development'
import Integration from './integration'
import Design from './design'
const remenu = ({handleClose}) => {
    const [menuList, setMenuList] = useState(1)
    const focus = (id) => {
        setMenuList(id)
    }
  return (
    <div className={styles.container}>
    {/*   <div className={styles.title}>Building Strong Capabilities to Empower Your Brand</div> */}
      <div className={styles.menu}>
        <h2 className={menuList === 1 ? `${styles.active}` : ''} onClick={() =>focus(1)}>Design</h2>
        <h2 className={menuList === 2 ? `${styles.active}` : ''} onClick={() =>focus(2)}>Development</h2>
        <h2 className={menuList === 3 ? `${styles.active}` : ''} onClick={() =>focus(3)}>Integraton</h2>
      </div>
      <div className={styles.list}>
        {menuList === 1 ? <Design handleClose={handleClose} /> : menuList === 2 ? <Development handleClose={handleClose} /> : <Integration handleClose={handleClose} />}
      </div>
    </div>
  )
}

export default remenu
