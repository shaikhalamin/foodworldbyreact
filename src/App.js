import React, { Component } from 'react';

import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = 'dce45e2f224825a54a069ee5c8c0f5f4';

class App extends Component {

  state = {
    recipes:[]
  }

  getRecipe = async (e) =>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    this.setState({
      recipes:data.recipes
    });
  
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
