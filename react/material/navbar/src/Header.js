import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  withTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './components/MainMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    // },
  },
}));

function Header({ theme }) {
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  console.log(isMobile);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Photos
          </Typography>
          {isMobile ? (
              <MainMenu/>
          ) : (
            'Not Mobile'
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withTheme(Header);
