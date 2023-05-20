import {  Button, Box} from '@mantine/core';
import AppContext from '../../appContext';
import { useContext } from 'react';
import { FiltersHeader } from './filterHeader/filtersHeader';
import { CategoriesSelector } from './categoriesSelector';
import { SalaryInputs } from './salaryInputs';
import loadVacancies from '../../functions/loadVacancies';
import styles from './filters.module.css';

const Filters = () => {
  const context = useContext(AppContext);
  
  return (
      <div className={styles.boxWrapper}>
        <Box maw={320} mx="auto">
            <FiltersHeader/>
            <CategoriesSelector/>
            <SalaryInputs/>
            <Button onClick={()=> loadVacancies(context)} className={styles.submit} type="submit" mt="sm">
              Применить
            </Button>
        </Box>
      </div>
  );
}

export default Filters
