import React from 'react'
import { SearchInput } from './searchInput'
import { VacationCards } from './vacationCards';
import { PaginationItem } from './pagination';
import styles from './vacations.module.css';


export const Vacations = () => {
  return (
    <div className={styles.vacationsWrapper}>
        <SearchInput />
        <VacationCards/>
        <PaginationItem/>
    </div>
  )
}
