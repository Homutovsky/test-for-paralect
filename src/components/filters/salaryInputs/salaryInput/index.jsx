import { useContext, useState } from 'react';
import { NumberInput } from '@mantine/core';
import AppContext from '../../../../appContext';
import styles from './salaryInput.module.css';

export const SalaryInput = ({valueType, placeholder, ...props}) => {
  const context = useContext(AppContext);
  const {catalogues, setContext, filterForm} = context;

  const onChange = (e) => {

    setContext({
      ...context,
      filterForm: {
        ...context.filterForm,
        [valueType] : e
      }
    })
  }

  return (
      <NumberInput
          className={styles.numberInput}
          placeholder={placeholder}
          value={filterForm[valueType]}
          onChange={onChange}
          step={100}
          min={0}
          {...props}
        />
  );
}