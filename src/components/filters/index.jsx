import {  Button, Box } from '@mantine/core';
import AppContext from '../../appContext';
import { useContext } from 'react';
import { FiltersHeader } from './filterHeader/filtersHeader';
import { CategoriesSelector } from './categoriesSelector';
import axios from 'axios'
import styles from './filters.module.css';
import { clientId, clientSecret, login, password, proxyUrl, requestConfig } from '../../constants';
import { SalaryInputs } from './salaryInputs';
  
const getAccessKey = async () => {
  try {
    const response = await axios.get(`${proxyUrl}/2.0/oauth2/password/?login=${login}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}&hr=0`, requestConfig)
    const myAccessKey = `${response.data.token_type} ${response.data.access_token}`
    localStorage.setItem('myAccessKey', myAccessKey)
    return new Promise((resolve) => {
      resolve(myAccessKey)
    });
  }
  catch (error) {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
}

const Filters = () => {
  const myAccessKey = localStorage.getItem("myAccessKey");
  const context = useContext(AppContext);

  const getVacancies = async (accessKey) => {
    const url = `${proxyUrl}/2.0/vacancies/`;
    const requestConfigWithAuth = {
      ...requestConfig,
      headers: {
        ...requestConfig.headers,
        authorization : accessKey || myAccessKey,
        'X-Api-App-Id' : clientSecret
      },
      params: {
        catalogues:context.filterForm.catalogues,
        payment_from:+context.filterForm.paymentFrom,
        payment_to:+context.filterForm.paymentTo,
      }
    }
    const response = await axios.get(url, requestConfigWithAuth )

    console.log('response', response)
    context.setContext({
      ...context, 
      vacancies: response.data.objects
    })
  }

  const loadVacancies = () => {
    if(myAccessKey) {
      getVacancies()
    } else {
      getAccessKey().then((res) => {
          getVacancies(res)
        })
    }
  }

  return (
      <div className={styles.boxWrapper}>
        <Box maw={320} mx="auto">
            <FiltersHeader/>
            <CategoriesSelector/>
            <SalaryInputs/>
            <Button onClick={loadVacancies} className={styles.submit} type="submit" mt="sm">
              Применить
            </Button>
        </Box>
      </div>
  );
}

export default Filters