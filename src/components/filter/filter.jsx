import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start', 
    marginTop: 20,
    marginBottom: 20  
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 20, 
  },
  box : {
      flex: '1 0 auto',
      position: 'relative',
      margin: '0 15px',
      padding: '15px'
  },
  closeBtn: {
      position: 'absolute',
      right: 10,
      top: 10
  },
  chip: {
      marginTop: 15,
      marginRight: 10
  },
  removeFilter: {
      marginTop: 15,
      marginRight: 10,
      backgroundColor: '#ef5350',
      color: '#fff'
  }   
}));

export default function Filter(props) {
    const classes = useStyles();
    const categoriesList = props.categories;
    let closeBtn;
    
    if(props.activeFilter) {
        closeBtn = <Chip label="X" onClick={(e) => {e.preventDefault(); props.removeFilter(); }} className={classes.removeFilter}/>     
    }
   
    return (
        <div className={classes.container}>
            {categoriesList.map((el, i)=>  {
                    const isActive = props.activeFilter===el.name ? 'active' : 'diocane';
                    return (
                      <Chip 
                        label={el.name} 
                        onClick={(e) => {e.preventDefault(); props.filterElement(el.name)}}
                        className={classes.chip +  ' ' + isActive}/>  
                    )
                }        
            )}
            {closeBtn}
        </div>
    )    
}
