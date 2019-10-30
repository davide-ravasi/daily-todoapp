import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { auth } from '../../firebase/firebase';

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
    color: blueg,
    marginRight: 15  
  },
  userData: {
      color: '#222',
      marginRight: 15
  }  
});


export default function SimpleAppBar({user}) {
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
                <Typography variant="p" color="inherit" className={classes.userData}>
                { user ? `Benvenuto ${user.name}` : 'Non sei connesso' }
                </Typography>    
                <Link to="/categories" className={classes.link} >
                    Categories
                </Link>   
                { user ? 
                        <Link to="/signin" className={classes.link} onClick={() => auth.signOut()} >
                            Sign Out
                        </Link> :
                    <Link to="/signin" className={classes.link} >
                        Sign In
                    </Link>
                }  
            </div>    
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}