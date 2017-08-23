import React, { Component } from 'react';
import RecipeList from '../containers/recipe-list';
import RecipeDetail from '../containers/recipe-detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <RecipeList />
        <RecipeDetail />
      </div>
    );
  }
}

export default App;
