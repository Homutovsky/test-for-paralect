import React, { useContext} from 'react'
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import AppContext from '../../../appContext';
import loadVacancies from '../../../functions/loadVacancies';
import styles from './searchInput.module.css';




export const SearchInput = () => {
  const context = useContext(AppContext);


  const localCatalogues = localStorage.getItem('localCatalogues');

  const onChange = (event) => {
    context.setContext({...context, keyword:event.target.value})
  }

  const setRequestInfo = (event) => {
    if (event.code === "Enter" && context.keyword.length > 1) {
    loadVacancies(context)
      
  }
}

const onSearch = () => {
  loadVacancies(context)
}

  return (
      <Input
          onChange={onChange}
          className={styles.searchInput}
          icon={<IconSearch size={18} />}
          onKeyDown={setRequestInfo}
          placeholder="Введите название вакансии"
          radius="md"
          size="lg"
          rightSection={
            <Button
              className={styles.searchButton}
              onClick={onSearch}
              size="sm" radius="md">
              Поиск
            </Button>}
          rightSectionWidth={95}
        />
  )}

