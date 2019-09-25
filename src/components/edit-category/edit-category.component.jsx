import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

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
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },  
}));


export default function EditCat(props) {
  const classes = useStyles();

//     const inputLabel = React.useRef(null);
//     const [labelWidth, setLabelWidth] = React.useState(0);
//     React.useEffect(() => {
//         setLabelWidth(inputLabel.current.offsetWidth);
//     }, []);
    return (<div className={classes.addElBox}>
        <form className={classes.container} onSubmit={props.addElement}>
            <FormControl className={classes.formControl}>
                <TextField 
                    id="standard-name" 
                    type="text" 
                    name="name"
                    label="name"
                    className={classes.textField}
                    value={props.name} 
                    fullWidth
                    onChange={(e) => props.onChangeValue(e)} />
            </FormControl>    
            <FormControl className={classes.formControl}>
              <TextField 
                id="standard-name" 
                type="text" 
                name="color"
                label="color"
                className={classes.textField}
                value={props.color}
                fullWidth
                onChange={(e) => props.onChangeValue(e)}  />
            </FormControl>    
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Add</Button>
        </form>
    </div>)
    }
