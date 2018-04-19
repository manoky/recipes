import React, { Component } from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`).then(res => res.json())
      .then(recipes => this.setState({ recipes }));
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`).then(res => res.json())
      .then(recipe => this.setState({ currentRecipe: recipe }));
  }

  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div>
        <Header />
        <main className="px4 flex">

          <RecipeList
            recipes={recipes}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
          />

          <RecipeDetail
            className="ml4"
            recipe={currentRecipe}
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

export default App;
