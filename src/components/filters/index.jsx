import {  Button, Box} from '@mantine/core';
import AppContext from '../../appContext';
import { useContext } from 'react';
import { FiltersHeader } from './filterHeader/filtersHeader';
import { CategoriesSelector } from './categoriesSelector';
import axios from 'axios'
import styles from './filters.module.css';
import { clientId, clientSecret, login, password, proxyUrl, requestConfig } from '../../constants';
import { SalaryInputs } from './salaryInputs';
import getVacancies from '../../functions/getVacancies';
  
const getAccessKey = async (context) => {
  try {
    const response = await axios.get(`${proxyUrl}/2.0/oauth2/password/?login=${login}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}&hr=0`, requestConfig)
    const myAccessKey = `${response.data.token_type} ${response.data.access_token}`
    localStorage.setItem('myAccessKey', myAccessKey)
    getVacancies({context, accessKey:myAccessKey})
  }
  catch (error) {
    console.error(error)
  }
}

const Filters = () => {
  const myAccessKey = localStorage.getItem("myAccessKey");
  const context = useContext(AppContext);

  const loadVacancies = () => {
    if(myAccessKey) {
      getVacancies({context})
    } else {
      getAccessKey(context);
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