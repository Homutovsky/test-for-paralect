import React, { useContext, useEffect } from 'react'
import { VacationCard } from '../vacations/vacationCards/vacationCard';
import AppContext from '../../appContext';
import getVacanciesById from '../../functions/getVacanciesById';
import { FavoriteDefaultPage } from './favoriteDefaultPage';
import styles from './favorite.module.css'


export const Favorite = () => {
  const context = useContext(AppContext);
  const favoriteVacancyIdsArr = context.favoriteVacancyIds

  useEffect(() => {
    getVacanciesById(context)
  }, [])
  

  return (
    <div className={styles.vacationWrapper}>
      {favoriteVacancyIdsArr.length ? context.favoriteVacancies.map(vacancy => {
        if(favoriteVacancyIdsArr.includes(vacancy.id.toString())) {
          return <VacationCard vacancy={vacancy}/>
        } else {
          return null
        }
      }
      ) : <FavoriteDefaultPage/>}
      
    </div>
  )
}
