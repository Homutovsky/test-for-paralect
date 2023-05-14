import React from 'react'
import { SalaryInput } from './salaryInput'
import { Text } from '@mantine/core'
import styles from './seleryInputs.module.css'

export const SalaryInputs = () => {
  return (
    <div className={styles.wrapper}>
      <Text
        fw={700}
        size="md">
        Оклад
      </Text>
      <SalaryInput valueType={'paymentFrom'} placeholder={'От'}/>
      <SalaryInput valueType={'paymentTo'} placeholder={'До'}/>
    </div>
  )
}
