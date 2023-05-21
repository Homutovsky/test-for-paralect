import React, { useContext, useState } from 'react'
import { Pagination } from '@mantine/core';
import getVacancies from '../../../functions/getVacancies';
import AppContext from '../../../appContext';
import styles from './pagination.module.css'

export const PaginationItem = () => {
  const context = useContext(AppContext);

  const [page, setPage] = useState(0);


  const changePage = (e) => {
    if(page !== e-1) {
      getVacancies({context, page : e - 1})
      setPage(e - 1)
    }
  }

  if(context.totalPages > 1) {
    return <Pagination
            className={styles.pagination}
            onChange={changePage} 
            total={context.totalPages} 
            size="sm" 
            />
  } 
    return null
}
