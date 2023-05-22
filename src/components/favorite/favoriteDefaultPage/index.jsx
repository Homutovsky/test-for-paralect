import React from 'react'
import { Image, Title, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import styles from './favoriteDefaultPage.module.css'
import emptyPageImage from '../../../img/defaultFavoritePageIcon.svg'

export const FavoriteDefaultPage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <Image maw={240} mx="auto" radius="md" src={emptyPageImage} alt="Random image" />
      <Title size="24px">Упс, здесь еще ничего нет!</Title>
      <Button onClick={() => navigate(`/search`)} className={styles.button}>Поиск Вакансий</Button>
    </div>
  )
}
