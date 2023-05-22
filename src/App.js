import { LoadingOverlay, MantineProvider } from '@mantine/core';
import Header from './components/header';
import { Routes, Route, Navigate} from 'react-router-dom'
import { Favorite } from './components/favorite';
import SearchPage from './components/searchPage';
import AppContext, { defaultContext } from './appContext';
import { useState } from 'react';
import { SingleVacancy } from './components/singleVacancy';
import styles from './app.module.css'


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
        <div className={styles.app}>
          <Header links={PAGES_LIST}/>
          <div className={styles.appBody}>
            <Routes>
                <Route path={`/${PAGES_LIST[0].link}`} element={<SearchPage/>}/>
                <Route path={`/${PAGES_LIST[1].link}`} element={<Favorite/>}/>
                <Route path={`/${PAGES_LIST[0].link}/:vacancyId`} element={<SingleVacancy/>} />
                <Route path="*" element={<Navigate to={`/${PAGES_LIST[0].link}`} replace />} />
            </Routes>
          </div>
          <LoadingOverlay className={styles.appOverlay} visible={context.isLoading} overlayOpacity={0.3}/>
        </div>
      </MantineProvider>
    </AppContext.Provider>
    
  );
}
