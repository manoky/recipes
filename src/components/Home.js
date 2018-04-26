import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import { toggleFavorite } from '../actions/favorites';
import { loadRecipe } from '../actions/recipes';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    this.props.loadRecipe(id).then(action => {
      this.setState({ currentRecipe: action.data });
    });
  };

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites, onToggleFavorite } = this.props;
    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              onFavorited={onToggleFavorite}
            />
          </div>
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

Home.propTypes = {
  recipes: PropTypes.array,
  loadRecipe: PropTypes.func,
  favorites: PropTypes.array,
  onToggleFavorite: PropTypes.func,
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  favorites: state.favorites,
});

const mapDispatchToProp = {
  loadRecipe,
  onToggleFavorite: toggleFavorite,
};

export default connect(mapStateToProps, mapDispatchToProp)(Home);
