import React from 'react'
import { Input, Button} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import styles from './searchInput.module.css';


export const SearchInput = () => {
  return (
    <div className={styles.searchInputWrapper}>
      <Input
          className={styles.searchInput}
          icon={<IconSearch size={18} />}
          placeholder="Введите название вакансии"
          radius="md"
          size="lg"
        />
        <Button 
        className={styles.searchButton}
        size="xs" radius="md">
          Поиск
        </Button>
    </div>
  )
}
