import React, { Component } from 'react';

import firebase from '../../firebase/firebase.js'; // <--- add this line

import Container from '@material-ui/core/Container';
import EditCat from '../edit-category/edit-category.component';
import CatList from '../cat-list/cat-list.component';

class ContentCat extends Component {
    constructor() {
        super();
        
        this.state = {
            categories: [],
            name: '',
            color: ''
        }
    }
    componentDidMount() {
      const catsRef = firebase.database().ref('categories');
      
      catsRef.on('value', (snapshot) => {
          let cats = snapshot.val();
          let newState = [];
          
         for (let cat in cats) {
              newState.push({ 
                id: cat,  
                name: cats[cat].name,
                color: cats[cat].color
              });
         }
          
        this.setState({
            categories: newState
        })   
      })  
        
    }
    onChangeValue = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    addElement = (e) => {
        e.preventDefault();

        if(this.state.name != '' && this.state.color != '') {
            
            const itemsRef = firebase.database().ref('categories');
            const category = {
                name: this.state.name,
                color: this.state.color
            }
            itemsRef.push(category);           
                        
            this.setState({
                name: '',
                color: ''
            })   
        }     
    }
    removeElement = (catId) => {
        const catRef = firebase.database().ref(`/categories/${catId}`);
        catRef.remove();
    }
    render() {
        return (
            <Container fixed>
                <EditCat 
                    onChangeValue={this.onChangeValue} 
                    name={this.state.name}
                    color={this.state.color}
                    addElement={this.addElement} />
                <CatList  
                    categories={this.state.categories}
                    removeElement={this.removeElement} />
            </Container>
        )
    }
}

export default ContentCat;

