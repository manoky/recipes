import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from './RecipeList';
import { showModal } from '../actions/modals';
import { toggleFavorite } from '../actions/favorites';

const Favorites = ({ recipes, favorites, onToggleFavorite }) => (
  <div className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={recipes.filter(r => favorites.includes(r.id))}
      favorites={favorites}
      onFavorited={onToggleFavorite}
    />
  </div>
);

Favorites.propTypes = {
  recipes: PropsTypes.array,
  favorites: PropsTypes.array,
  onToggleFavorite: PropsTypes.func,
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => ({
  onToggleFavorite: id => {
    const message = 'Are you sure you want to unfavorite?';
    const onSubmit = () => dispatch(toggleFavorite(id));
    dispatch(showModal('CONFIRM_MODAL', { message, onSubmit }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
