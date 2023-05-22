import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { clientSecret, proxyUrl, requestConfig } from '../../constants'
import axios from 'axios'
import { Text, Paper, TypographyStylesProvider } from '@mantine/core';
import { VacationCard } from '../vacations/vacationCards/vacationCard'
import styles from './singleVacancy.module.css';
import AppContext from '../../appContext';


export const SingleVacancy = () => {
  const [vacancy, setVacancy] = useState({})
  const params = useParams()
  const requestConfigWithAuth = {
    ...requestConfig,
    headers: {
      ...requestConfig.headers,
      'X-Api-App-Id' : clientSecret
    }
  }
  const context = useContext(AppContext);


  const getVacancy = async () => {
    try {
    context.setContext({...context, isLoading:true});
    const res = await axios.get(`${proxyUrl}/2.0/vacancies/${params.vacancyId}`, requestConfigWithAuth)
    setVacancy(res.data)
    context.setContext({...context, isLoading:false});
    }
    catch(error) {

    }
  }

  useEffect(() => {
    getVacancy()
  },[params.vacancyId])


  return (
    <div className={styles.vacationsWrapper}>
        <VacationCard newClassName={styles} vacancy={vacancy}/>
        <Paper shadow="xs" p="md">
          <Text className={styles.text}>Обязанности</Text>
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
            </TypographyStylesProvider>
        </Paper>
    </div>
    
  )
}
