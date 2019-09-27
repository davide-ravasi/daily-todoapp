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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    marginTop: 20
  },
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
  },
  counter: {
      backgroundColor: '#26a69a',
      color: '#fff'
  },  
  mainTitle: {
      marginTop: 20,
      color: '#055090'
  },
  links: {
      color: '#333',
      textDecoration: 'none',
      fontSize: 14,
      marginTop: 5
  }  
}));

const TodoList = (props) => {
    const classes = useStyles();
    const elList = (props.activeFilter == '') ? props.list : props.list.filter((el) => { return el.category == props.activeFilter });
    return (
        <div>
            {props.categories.map((ele, z) => {
                let elements = elList.filter((el) => el.category === ele.name);
                let count = elements.length;
                return (
                    <div>
                          {elements.map((el,i) => {
                            return(
                                <div>
                                    { count > 0 && i === 0 && 
                                         <Typography variant="h5" component="h2" className={classes.mainTitle}>
                                            {ele.name} <Chip label={count} className={classes.counter} />
                                        </Typography>
                                    }
                                    <Paper key={i} className={classes.box}>
                                        <Typography variant="h5" component="h2">
                                            {el.title}
                                        </Typography>
                                        { el.links && 
                                            <Typography variant="subtitle1" component="p" className={classes.links}>
                                                <i className="material-icons md-18">link</i>
                                                <a href={el.links} target="_blank">{el.links}</a>
                                            </Typography>
                                        }
                                        <Chip label={el.category} className={classes.chip} />  
                                        <IconButton aria-label="delete" className={classes.closeBtn} onClick={ () => props.removeElement(el.id) }>
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Paper>
                                </div>    
                            )
                          })}
                    </div>    
                )
            })}
        </div>
    )    
}

export default TodoList;