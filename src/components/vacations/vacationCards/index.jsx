import React, { useContext} from 'react'
import { VacationCard } from './vacationCard';
import AppContext from '../../../appContext';
import styles from './vacationCards.module.css';


export const VacationCards = () => {

  const context = useContext(AppContext);
  return (
    <>
      {context.vacancies.map(vacancy => <VacationCard  vacancy={vacancy} key={vacancy.id}/>)}
    </>
  )
}
