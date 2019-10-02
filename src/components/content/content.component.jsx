import React, { Component } from 'react';
import AddElement from '../add-element/add.element';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TodoList from '../todo-list/todo-list';

import firebase from '../../firebase/firebase.js'; // <--- add this line

import Container from '@material-ui/core/Container';
import Filter from '../filter/filter';

class Content extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            categories: [],
            title: '',
            category: '',
            activeFilter: '',
            activeFormAdd: false
        }
    }
    componentDidMount() {
      const itemsRef = firebase.database().ref('items');
      const catsRef = firebase.database().ref('categories');
        
      catsRef.on('value', (snapshot) => {
          let cats = snapshot.val();
          let newState = [];
          
         for (let cat in cats) {
              newState.push({ 
                name: cats[cat].name,
                color: cats[cat].color
              });
         }
          
        this.setState({
            categories: newState
        })   
      })
        
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
          
        for (let item in items) {
          newState.push({
            id: item,  
            title: items[item].title,
            links : items[item].links,  
            category: items[item].category
          });
        }
          
        this.setState({
            list: newState
        })   
      });
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

        if(this.state.title !== '' && this.state.links !== '' && this.state.category !== '') {
            
            const itemsRef = firebase.database().ref('items');
            const item = {
                title: this.state.title,
                links: this.state.links,
                category: this.state.category
            }
            itemsRef.push(item);           
                        
            this.setState({
                title: '',
                links: '',
                category: '',
                activeFormAdd: ''
            })   
        }          
    }
    removeElement = (itemId) => {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }
    filterElement = (catName) => {
            this.setState({
                activeFilter: catName
            })   
    }
    removeFilter = () => {
        this.setState({
            activeFilter: ''
        })
    }
    showAddForm = (e) => {
        e.preventDefault();
        this.setState({
            activeFormAdd: true
        })
    }    
    render() {
        return (
            <Container fixed>
                { this.state.activeFormAdd && <AddElement onChangeValue={this.onChangeValue} 
                            addElement={this.addElement} 
                            title={this.state.title} 
                            categories={this.state.categories}
                            category={this.state.category}  />
                }    
                <Filter  categories={this.state.categories} activeFilter={this.state.activeFilter} filterElement={this.filterElement} removeFilter={this.removeFilter} />
                <Fab size="small" color="primary" aria-label="add" className="showAddForm" onClick={(e) => this.showAddForm(e)}><AddIcon /></Fab>
                <TodoList list={this.state.list} categories={this.state.categories} activeFilter={this.state.activeFilter} removeElement={this.removeElement} />
            </Container>
        )
    }
}

export default Content;