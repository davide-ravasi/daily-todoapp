import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  addElBox: {
      backgroundColor: '#eee',
      borderRadius: 5,
      paddingBottom: 15,
      marginTop: 20
  },  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    marginTop: 20,
    marginLeft: 20  
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 10,  
    width: 250,
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 20, 
  }
}));

const AddElement = (props) => {
    const classes = useStyles();
    return (<div className={classes.addElBox}>
        <form className={classes.container} onSubmit={props.addElement}>
            <TextField 
                id="standard-name" 
                type="text" 
                name="title"
                label="title"
                className={classes.textField}
                value={props.title} 
                fullWidth
                onChange={(e) => props.onChangeValue(e)}  />
            <TextField 
                id="standard-name" 
                type="text" 
                name="category"
                label="category"
                className={classes.textField}
                value={props.category} 
                fullWidth
                onChange={(e) => props.onChangeValue(e)} />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Add</Button>
        </form>
    </div>)
    }

export default AddElement;