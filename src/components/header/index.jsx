import { useState } from 'react';
import { createStyles, Header as HeaderMantine, Container, Group,  rem } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../../img/logo.svg';
import styles from './header.module.css'

const useStyles = createStyles((theme) => ({
  
}));


const Header = ({ links }) => {
  const [active, setActive] = useState(links[0]?.link);
  const { cx } = useStyles();

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={`/${link.link}`}
      className={cx(styles.link, { [styles.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <HeaderMantine className={styles.container} height={60} mb={40}>
      <Container className={styles.header}>
        <Group spacing={5} className={styles.links}>
          <ReactLogo className={styles.logo}/>
          {items}
        </Group>
      </Container>
    </HeaderMantine>
  );
}

export default Header