import { Card, Text, ActionIcon } from '@mantine/core';
import {ReactComponent as ButtonIcon} from '../../../../img/starIcon.svg';
import {ReactComponent as DirectionIcon} from '../../../../img/directionIcon.svg';
import styles from './vacationCard.module.css';


export const VacationCard = ({vacancy = {}}) => {
  const {profession, payment_from, payment_to, currency, type_of_work = {}, town = {}} = vacancy;

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

  return (
    <Card withBorder radius="md" className={styles.card}>
        <div className={styles.profession}>
          <Text c="blue" size="xl" fw={600}>{profession}</Text>
          <ActionIcon component="a" href="" size="1.375rem">
          <ButtonIcon/>
        </ActionIcon>
        </div>
        
        <div className={styles.description}>
          <Text className={styles.payment} size="md" fw={600}>{getPayment()}</Text>
          <Text size="md" fw={400}>{type_of_work.title}</Text>
        </div>

        <div className={styles.location}>
          <DirectionIcon/>
          <Text size="md" fw={400}>{town.title}</Text>
        </div>
    </Card>
  );
}