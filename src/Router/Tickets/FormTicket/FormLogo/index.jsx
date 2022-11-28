import React from 'react'
import logo1Path from './logo1.svg'
import styles from './styles.module.css'

export function FormLogo() {
  return (
    <div>
      <div className={styles.type}>
        <label className={styles.text}>Невозвратный</label>
      </div>
      <div className={styles.logo}>
        <img className={styles.icon} src={logo1Path} />
        <label className={styles.name}> S7 Airlines</label>
      </div>
    </div>
  )
}
