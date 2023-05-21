import React, { useContext, useEffect } from 'react'
import { Select } from '@mantine/core';
import AppContext from '../../../appContext';
import getCatalogues from '../../../functions/getCatalogues'
import styles from './categoriesSelector.module.css';


export const CategoriesSelector = () => {

  const context = useContext(AppContext);
  const {catalogues, setContext, filterForm} = context;

  useEffect(() => {
    const localCatalogues = localStorage.getItem('localCatalogues');
    if(localCatalogues) {
      setContext({...context, catalogues:JSON.parse(localCatalogues)})
    } else {
      getCatalogues(context)
    }
  }, [])
  
  

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

