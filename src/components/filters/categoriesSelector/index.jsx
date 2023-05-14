import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import styles from './categoriesSelector.module.css';
import { Select } from '@mantine/core';
import AppContext from '../../../appContext';
import { proxyUrl, requestConfig } from '../../../constants';


export const CategoriesSelector = () => {

  const context = useContext(AppContext);
  const {catalogues, setContext, filterForm} = context;

  useEffect(() =>{
    const localCatalogues = localStorage.getItem('localCatalogues');
    if(localCatalogues) {
      setContext({...context, catalogues:JSON.parse(localCatalogues)})
    } else {
      getCatalogues()
    }
  }, [])
  
  const getCatalogues = async () => {
    try {
      const response = await axios.get(`${proxyUrl}/2.0/catalogues/`, requestConfig)
      setContext({...context, catalogues:response.data})
      localStorage.setItem('localCatalogues', JSON.stringify(response.data))
    }
    catch (error) {
      console.error(error)
    }
  }

  const onChange = (e) => {
    setContext({
      ...context,
      filterForm: {
        ...context.filterForm,
        catalogues:e
      }
    })
  }
  
  const data = catalogues.map(catalog => ({
    value:catalog?.key,
    label:catalog?.title_rus
  }) )

  return (
    <Select
      data={data} 
      onChange={onChange}
      value={filterForm.catalogues}
      className={styles.selectLabel}
      sx={{
        '.mantine-Select-dropdown': {
          width: 'inherit !important',
        },
      }}
      size="sm"
      label="Отрасль"
      placeholder="Выберете отрасль"
      searchable
      nothingFound="No options"
      />
  )
}
