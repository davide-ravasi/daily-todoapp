import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import blueGrey from '@material-ui/core/colors/blueGrey';

const blueg = blueGrey[900];
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  navContainer: {
      display:  'flex',
      justifyContent: 'space-between'
  },
  link: {
    color: blueg
  }   
});


export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Container fixed>
            <Toolbar className={classes.navContainer}>
            <div className="linkContainer HomeLogo">    
                <Typography variant="h6" color="inherit">
                    <Link to="/" className={classes.link} >
                        Todo List
                    </Link>    
                </Typography>
            </div>    
            <div className="linkContainer">
                <Link to="/categories" >
                    Categories
                </Link>    
            </div>    
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}