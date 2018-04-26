import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const RecipeDetail = props => {
  if (!props.recipe) {
    return (
      <p
        className={classNames('h3 p2 bg-white italic center', props.className)}
        style={props.style}
      >
        Please select a recipe to view the details
      </p>
    );
  }
  return (
    <div
      className={classNames('p2 bg-white', props.className)}
      style={props.style}
    >
      <h2 className="h2">{props.recipe.name}</h2>
      <img className="fit" src={props.recipe.image} alt={props.recipe.image} />
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
        <h3>Ingredients</h3>
        {props.recipe.ingredients && (
          <ul>
            {props.recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        )};
        <h3>Steps</h3>
        {props.recipe.steps && (
          <ol>{props.recipe.steps.map(step => <li key={step}>{step}</li>)}</ol>
        )}
        <Link
          to={`/recipe/${props.recipe.id}`}
          href={`/recipe/${props.recipe.id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object,
  className: PropTypes.string,
};
export default RecipeDetail;
