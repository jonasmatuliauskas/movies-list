import React from 'react'
import { Container, Typography, AppBar, Toolbar, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HomePage from './pages/HomePage'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  containerSpace: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit">
            Movies list
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" className={classes.containerSpace}>
        <HomePage />
      </Container>
    </div>
  )
}

export default App;