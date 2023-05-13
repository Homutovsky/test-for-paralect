import { Card, Text, createStyles, Center, rem, ActionIcon } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import {ReactComponent as ButtonIcon} from '../../../../img/starIcon.svg';
import {ReactComponent as DirectionIcon} from '../../../../img/directionIcon.svg';
import styles from './vacationCard.module.css';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    marginBottom: rem(16)
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

export const VacationCard = ({vacancy = {}}) => {
  const {profession, payment_from, type_of_work = {}, town = {}} = vacancy
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
        <div className={styles.wrapper}>
          <Text c="blue" size="xl" fw={600}>{profession}</Text>
          <ActionIcon component="a" href="" size="1.375rem">
          <ButtonIcon/>
        </ActionIcon>
        </div>
        
      <div className={styles.textWrapper}>
        <Text className={styles.salaryText} size="md" fw={600}>з/п{payment_from}</Text>
        <Text size="md" fw={400}>{type_of_work.title}</Text>
      </div>

      <div className={styles.direction}>
        <DirectionIcon/>
        <Text size="md" fw={400}>{town.title}</Text>
      </div>
    </Card>
  );
}