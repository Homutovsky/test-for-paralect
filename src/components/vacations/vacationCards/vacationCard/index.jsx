import { Card, Text, Button } from '@mantine/core';
import {ReactComponent as UnSelectedStar } from '../../../../img/starIcon.svg';
import {ReactComponent as SelectedStar } from '../../../../img/starIconBlue.svg';
import {ReactComponent as DirectionIcon} from '../../../../img/directionIcon.svg';
import { useContext } from 'react';
import AppContext from '../../../../appContext';
import { useNavigate } from 'react-router-dom';
import styles from './vacationCard.module.css';


export const VacationCard = ({vacancy = {}, newClassName = {}}) => {
  const context = useContext(AppContext);

  const {profession, payment_from, payment_to, currency, type_of_work = {}, town = {}, id} = vacancy;
  const getPayment = () => {
    if(payment_from && payment_to) {
      return `з/п ${payment_from} - ${payment_to} ${currency}`
    }
    if(payment_from) {
      return `з/п от ${payment_from} ${currency}`
    }
    if(payment_to) {
      return `з/п ${payment_to} ${currency}`
    }
    return `з/п не указана`
  }
  const isFavoriteVacancy = context.favoriteVacancyIds.includes(id?.toString())
  
  const toggleFavorite = () => {
    let newFavoriteVacancyIds

    if(isFavoriteVacancy) {
      newFavoriteVacancyIds = context.favoriteVacancyIds.filter(favoriteId => favoriteId !== id.toString())
    } else {
      newFavoriteVacancyIds = context.favoriteVacancyIds? [...context.favoriteVacancyIds, id.toString()] : [id.toString()]
    }

    context.setContext({...context, favoriteVacancyIds:[...newFavoriteVacancyIds]})
    
    localStorage.setItem('favoriteVacancyIds', newFavoriteVacancyIds.join())
  }

  const navigate = useNavigate();

  const {textPointer, payment, location, description, professionWrapper} = styles
  const {singleTextPointer, singleDescription, singlePayment} = newClassName

  return (
    <Card withBorder radius="md" className={styles.card}>
        <div className={professionWrapper}>
        <Text className={`${textPointer} ${singleTextPointer}`} onClick={() => { navigate(`/search/${id}`)}} c="blue" size="xl" fw={600}>{profession}</Text>
          <Button onClick={toggleFavorite} variant="subtle">
            {isFavoriteVacancy ?  <SelectedStar/> : <UnSelectedStar/> }
          </Button>
        </div>
        
        <div className={`${description} ${singleDescription}`}>
          <Text className={`${payment} ${singlePayment}`} size="md" fw={600}>{getPayment()}</Text>
          <Text size="md" fw={400}>{type_of_work.title}</Text>
        </div>

        <div className={location}>
          <DirectionIcon/>
          <Text size="md" fw={400}>{town.title}</Text>
        </div>
    </Card>
  );
}