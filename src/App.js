import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { auth } from './firebase/firebase';
import NavBar from './components/navbar/navbar-component';
import Content from './components/content/content.component';
import ContentCat from './components/content-cat/content-cat.component';
import LogIn from './pages/sign-in-out/sign-in-out.component';


class App extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
          currentUser: {
              id: '',
              name: ''
          }
      }
  } 
    
  componentDidMount() {
      auth.onAuthStateChanged(user => {
          if(user) {
              this.setState({
                  currentUser: {
                      id: auth.currentUser.uid,
                      name: auth.currentUser.displayName
                  }
              })
          } else {
              this.setState({
                  currentUser: auth.currentUser
              })
          }
      })
  } 
    
  render() {
        return (
            <div>
                <NavBar user={this.state.currentUser} />      
                <Route path="/" exact component={Content} />
                <Route path="/categories/" component={ContentCat} />
                <Route path="/signin/" component={LogIn} />
            </div>
        );
  } 
}

export default App;