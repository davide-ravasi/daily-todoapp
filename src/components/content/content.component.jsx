import React, { Component } from 'react';
import AddElement from '../add-element/add.element';
import TodoList from '../todo-list/todo-list';

import firebase from '../../firebase/firebase.js'; // <--- add this line

import Container from '@material-ui/core/Container';

class Content extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            categories: [],
            title: '',
            category: ''
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
                title: cats[cat].title,
                color: cats[cat].color
              });
         }
          
        this.setState({
            categories: newState
        })   
      })
        
        
        
//       const catsRef = firebase.database().ref('categories');  
        
//         catsRef.push({
//           title: "Udemy React",
//           color: "7986cb"  
//         });
        
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
          
        for (let item in items) {
          newState.push({
            id: item,  
            title: items[item].title,
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

        if(this.state.title != '' && this.state.category != '') {
            
            const itemsRef = firebase.database().ref('items');
            const item = {
                title: this.state.title,
                category: this.state.category
            }
            itemsRef.push(item);           
                        
            this.setState({
                title: '',
                category: ''
            })   
        }          
    }
    removeElement = (itemId) => {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }
    render() {
        return (
            <Container fixed>
                <AddElement onChangeValue={this.onChangeValue} 
                            addElement={this.addElement} 
                            title={this.state.title} 
                            categories={this.state.categories}
                            category={this.state.category}  />
                <TodoList list={this.state.list} removeElement={this.removeElement} />
            </Container>
        )
    }
}

export default Content;