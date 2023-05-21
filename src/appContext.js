import { createContext } from 'react';

const getVacancyIds = () => {
  const favoriteVacancyIds = localStorage.getItem('favoriteVacancyIds')
  return (favoriteVacancyIds ? favoriteVacancyIds.split(',') : [])
}

export const defaultContext = {
  catalogues:[],
  vacancies: [],
  filterForm:{
    catalogues:null,
    paymentFrom:'',
    paymentTo:''
  },
  totalPages:0,
  isLoading:false,
  keyword:'',
  vacationWrapper:null,
  favoriteVacancyIds: getVacancyIds(),
  favoriteVacancies:[]
}

const AppContext = createContext({})

export default AppContext
