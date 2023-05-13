import { createContext } from 'react';

export const defaultContext = {
  catalogues:[],
  vacancies: [],
  filterForm:{
    catalogues:null,
    paymentFrom:'',
    paymentTo:''
  }
}

const AppContext = createContext({})

export default AppContext