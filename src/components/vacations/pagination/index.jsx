import React, { useContext } from 'react'
import { Pagination } from '@mantine/core';
import getVacancies from '../../../functions/getVacancies';
import AppContext from '../../../appContext';


export const PaginationItem = () => {
  const context = useContext(AppContext);
  const changePage = (e) => {
    getVacancies({context, page : e - 1})
  }
  if(context.totalPages) {
    return <Pagination onChange={changePage} total={context.totalPages} size="sm" />
  } 
    return null
}
