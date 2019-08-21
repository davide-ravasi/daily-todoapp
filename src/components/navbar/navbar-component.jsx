import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Container fixed>
            <Toolbar>
            <Typography variant="h6" color="inherit">
                Todo List
            </Typography>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}