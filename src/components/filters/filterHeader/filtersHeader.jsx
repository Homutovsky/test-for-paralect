import React, { useContext } from 'react'
import { Text } from '@mantine/core';
import { CloseButton, Group } from '@mantine/core';
import AppContext, { defaultContext } from '../../../appContext';
import styles from './filtersHeader.module.css';


export const FiltersHeader = () => {

  const context = useContext(AppContext);
  const {setContext} = context;

  const removeFilterValue = () => {
    setContext({...context, filterForm : defaultContext.filterForm})
  }

  return (
    <div className={styles.filterWrapper}>
              <Text className={styles.text}>
                Фильтры
              </Text>
              <Group position="center">
                <label className={styles.label} htmlFor="throwOff">
                <Text className={styles.buttonText} c="dimmed">
                  Сбросить все
                </Text>
                </label>
                <CloseButton onClick={removeFilterValue} id="throwOff" title="Close popover" size="sm" iconSize={16}/>
              </Group>
            </div>
  )
}
