import { createContext } from 'react';

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
  keyword:''
}

const AppContext = createContext({})

export default AppContext
