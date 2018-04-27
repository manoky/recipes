/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ style, favorites, recipes, ...props }) => (
  <ul className="list-reset">
    <CSSTransitionGroup
      transitionName="slideOutRight"
      transitionLeaveTimeout={300}
      transitionEnter={false}
    >
      {recipes.map(recipe => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          favorited={favorites.includes(recipe.id)}
          {...props}
        />
      ))}
    </CSSTransitionGroup>
  </ul>
);

RecipeList.defaultProps = {
  recipes: [],
  favorites: [],
};

RecipeList.propTypes = {
  style: PropTypes.object,
  favorites: PropTypes.array,
  recipes: PropTypes.array,
};
export default RecipeList;
