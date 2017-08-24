import React, { Component } from 'react';
import RecipeList from '../containers/recipe-list';
import AddRecipeButton from '../containers/add-recipe-button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <RecipeList />        
        <AddRecipeButton />
      </div>
    );
  }
}

export default App;
