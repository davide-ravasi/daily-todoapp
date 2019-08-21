import React from 'react';
import Card from '@material-ui/core/Card';

const TodoList = (props) => (
    <div className="list">
        {props.list.map((el, i)=> 
            <li key={i}>
                <h2>{el.title}</h2>
                <p>{el.category}</p>
                <button type="button" onClick={ () => props.removeElement(el.title) }>X</button>
            </li>
        )}
    </div>
)

export default TodoList;