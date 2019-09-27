import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(theme => ({  
  button: {
    margin: theme.spacing(1),
    marginTop: 20, 
  },
  box : {
      flex: '1 0 auto',
      position: 'relative',
      margin: '15px',
      padding: '15px'
  },
  closeBtn: {
      position: 'absolute',
      right: 10,
      top: 10
  },
  chip: {
      marginTop: 15
  }
}));

/*
    1 -- edit category
    2 -- add menu links
    3 -- overlay to update state (cat added, cat modified..etc)
    4 -- possibles links in list (as hyperlink)
    5 -- search engine
*/

const CatList = (props) => {
    const classes = useStyles();
    return (
        <div>
            {props.categories.map((el,i) => {
                return (
                     <Paper key={i} className={classes.box}>
                        <Typography variant="h5" component="h2">
                            {el.name} - {el.id}
                        </Typography>  
                        <IconButton aria-label="delete" className={classes.closeBtn} onClick={ () => props.removeElement(el.id) }>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Paper>  
                )
            })}
        </div>
    )    
}

export default CatList;