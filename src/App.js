import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar-component';
import Content from './components/content/content.component';
import ContentCat from './components/content-cat/content-cat.component';

function App() {
  return (
    <div>
      <NavBar />      
      <Route path="/" exact component={Content} />
      <Route path="/categories/" component={ContentCat} />
    </div>
  );
}

export default App;