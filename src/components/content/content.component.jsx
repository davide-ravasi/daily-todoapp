import React, { Component } from 'react';
import AddElement from '../add-element/add.element';
import TodoList from '../todo-list/todo-list';

import Container from '@material-ui/core/Container';

class Content extends Component {
    constructor() {
        super();

        this.state = {
            list: [
                {
                    title: 'ex_1',
                    category: 'cnam'
                },
                {
                    title: 'video 2',
                    category: 'udemy node'
                },
                {
                    title: 'video 3',
                    category: 'udemy react'
                }
            ],
            title: '',
            category: ''
        }
    }
    onChangeValue = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    addElement = (event) => {
        event.preventDefault();
        console.log("submit");

         this.setState({
            list: this.state.list.concat({title: this.state.title, category: this.state.category}),
            title: '',
            category: ''
        }) 
    }
    removeElement = (title) => {
        this.setState({
            list: this.state.list.filter((element) => {
                return element.title != title
            })
        })
    }
    render() {
        return (
            <Container fixed>
                <AddElement onChangeValue={this.onChangeValue} 
                            addElement={this.addElement} 
                            title={this.state.title} 
                            category={this.state.category}  />
                <TodoList list={this.state.list} removeElement={this.removeElement} />
            </Container>
        )
    }
}

export default Content;