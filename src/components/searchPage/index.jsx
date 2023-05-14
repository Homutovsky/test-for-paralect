import Filters from "../filters";
import { Vacations } from "../vacations";
import styles from './searchPage.module.css';


const SearchPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <Filters/>
      </div>
      <Vacations/>
    </div>
  );
}

export default SearchPage