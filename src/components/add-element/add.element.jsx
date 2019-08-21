import React from 'react';

import TextField from '@material-ui/core/TextField';

const AddElement = (props) => (
    <div className="AddElement">
        <form onSubmit={props.addElement}>
            <TextField 
                id="newElement" 
                type="text" 
                name="title" 
                value={props.title} 
                fullWidth
                onChange={(e) => props.onChangeValue(e)} 
                placeholder="Insert new element" />
            <TextField 
                id="newCategory" 
                type="text" 
                name="category" 
                value={props.category} 
                fullWidth
                onChange={(e) => props.onChangeValue(e)} 
                placeholder="Insert new category" />
            <button type="submit">Add</button>
        </form>
    </div>
)

export default AddElement;