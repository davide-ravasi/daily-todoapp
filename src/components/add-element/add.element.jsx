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
  selectField: {
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


export default function AddElement(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }
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
            <TextField 
                id="standard-name" 
                type="text" 
                name="links"
                label="links"
                className={classes.textField}
                value={props.links} 
                fullWidth
                onChange={(e) => props.onChangeValue(e)}  />
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={props.category} 
                className={classes.selectField}
                onChange={(e) => props.onChangeValue(e)}
                inputProps={{
                    name: 'category',
                    id: 'category',
                }}
            >
                {props.categories.map((value, index) => {
                    return <MenuItem value={value.name}>{value.name}</MenuItem>
                })}
            </Select>
            </FormControl>    
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Add</Button>
        </form>
    </div>)
    }
