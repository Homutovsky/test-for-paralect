import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Routes, Route} from 'react-router-dom'
import { Favorite } from './components/favorite';

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
  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Header links={PAGES_LIST}/>
          <Routes>
          </Routes>
      </MantineProvider>
  );
}

export default App;
