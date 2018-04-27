/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const RecipeListItem = ({ recipe, onClick, favorited, onFavorited }) => (
  <li
    className="py2 border-bottom border-bottom-dashed pointer"
    onClick={() => onClick(recipe.id)}
  >
    <Checkbox active={favorited} onClick={() => onFavorited(recipe.id)} />
    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  onClick: PropTypes.func,
  favorited: PropTypes.bool,
  onFavorited: PropTypes.func,
};

RecipeListItem.defaultProps = {
  recipe: {},
};
export default RecipeListItem;
