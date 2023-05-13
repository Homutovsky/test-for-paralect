import './App.css';
import { MantineProvider } from '@mantine/core';
import Header from './components/header';
import { Routes, Route, Navigate} from 'react-router-dom'
import { Favorite } from './components/favorite';
import SearchPage from './components/searchPage';
import AppContext, { defaultContext } from './appContext';
import { useState } from 'react';

const PAGES_LIST = [
  {
    label:'Поиск Вакансий',
    link:'search'
  },
  {
    label:'Избранное',
    link:'favorite'
  }
];


export default function App() {
  const [context, setContext] = useState({...defaultContext})

  return (
    <AppContext.Provider value={{...context, setContext}} >
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Header links={PAGES_LIST}/>
          <Routes>
            <Route path={`/${PAGES_LIST[0].link}`} element={<SearchPage/>}/>
            <Route path={`/${PAGES_LIST[1].link}`} element={<Favorite/>}/>
            <Route path="*" element={<Navigate to={`/${PAGES_LIST[0].link}`} replace />} />
          </Routes>
      </MantineProvider>
    </AppContext.Provider>
    
  );
}
