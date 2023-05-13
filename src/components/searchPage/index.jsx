import Filters from "../filters";
import { Vacations } from "../vacations";
import styles from './searchPage.module.css';


const SearchPage = () => {

  return (
    <div className={styles.container}>
      <Filters/>
      <Vacations/>
    </div>
  );
}

export default SearchPage