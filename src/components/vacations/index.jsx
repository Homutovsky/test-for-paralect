import React from 'react'
import { SearchInput } from './searchInput'
import styles from './vacations.module.css';
import { VacationCards } from './vacationCards';


export const Vacations = () => {
  return (
    <div className={styles.vacationsWrapper}>
        <SearchInput />
        <VacationCards/>
    </div>
  )
}
