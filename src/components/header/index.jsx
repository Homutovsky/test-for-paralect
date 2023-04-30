import { useState } from 'react';
import { createStyles, Header as HeaderMantine, Container, Group,  rem } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../../img/logo.svg';

const useStyles = createStyles((theme) => ({
  container: {
    position:'relative'
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position:'relative',
    maxWidth:`${rem(1120)}`
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(30)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  logo: {
    position:'absolute',
    left:'0',
  }
}));


const Header = ({ links }) => {
  const [active, setActive] = useState(links[0]?.link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={`/${link.link}`}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <HeaderMantine className={classes.container} height={60} mb={40}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          <ReactLogo className={classes.logo}/>
          {items}
        </Group>
      </Container>
    </HeaderMantine>
  );
}

export default Header