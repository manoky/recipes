import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';

const testRecipes = [
  {
    id: 1,
    name: 'Recipe 1',
    category: 'category 1',
  },
  {
    id: 2,
    name: 'Recipe 2',
    category: 'category 2',
  },
];

describe('<RecipeList />', () => {
  test('Should not break if no recipe passed', () => {
    const component = renderer.create(<RecipeList />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly', () => {
    const component = renderer.create(<RecipeList recipes={testRecipes} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorite state correctly', () => {
    const component = renderer.create(
      <RecipeList recipes={testRecipes} favorites={[1]} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
