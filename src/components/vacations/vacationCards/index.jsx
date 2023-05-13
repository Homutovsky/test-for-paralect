import React, { useContext } from 'react'
import { VacationCard } from './vacationCard';
import styles from './vacationCards.module.css';
import AppContext from '../../../appContext';


export const VacationCards = () => {

  const context = useContext(AppContext);

  console.log('context', context)
  return (
    <>
      {context.vacancies.map(vacancy => <VacationCard vacancy={vacancy} />)}
    </>
  )
}
