import React from 'react'
import { SalaryInput } from './salaryInput'
import styles from './seleryInputs.module.css'

export const SalaryInputs = () => {
  return (
    <div className={styles.wrapper}>
      <SalaryInput valueType={'paymentFrom'} placeholder={'От'}/>
      <SalaryInput valueType={'paymentTo'} placeholder={'До'}/>
    </div>
  )
}
