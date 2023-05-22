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
      <SalaryInput data-elem='salary-from-input' valueType={'paymentFrom'} placeholder={'От'}/>
      <SalaryInput data-elem='salary-to-input' valueType={'paymentTo'} placeholder={'До'}/>
    </div>
  )
}
