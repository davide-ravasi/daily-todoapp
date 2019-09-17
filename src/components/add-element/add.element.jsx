import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
  selectField: {
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


export default function AddElement(props) {
    const classes = useStyles();
//     const inputLabel = React.useRef(null);
//     const [labelWidth, setLabelWidth] = React.useState(0);
//     React.useEffect(() => {
//         setLabelWidth(inputLabel.current.offsetWidth);
//     }, []);
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
            <InputLabel htmlFor="category">category</InputLabel>
            <Select
              value={props.category} 
              className={classes.selectField}
              onChange={(e) => props.onChangeValue(e)}
              inputProps={{
                name: 'category',
                id: 'category',
              }}
            >
                {props.categories.map((value, index) => {
                    return <MenuItem value={value.title}>{value.title}</MenuItem>
                })}
            </Select>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Add</Button>
        </form>
    </div>)
    }
