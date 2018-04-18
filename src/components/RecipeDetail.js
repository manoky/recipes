import React from 'react';

const RecipeDetail = (props) =>(
  <div style={props.style}>
    <h2>Creepy Halloween Skull Cupcakes</h2>
    <img src="https://images.media-allrecipes.com/userphotos/600x600/4557475.jpg"/>
    <div>
      <span> Dessert</span>
      <span>1200 cal</span>
      <h3>Ingredients</h3>
      <ul>
        <li>1 package devil's food cake mix</li>
        <li>1 cup water</li>
        <li>3 eggs</li>
        <li>1/3 cup vegetable oil</li>
        <li>1 1/2 packages prepared vanilla frosting</li>
        <li>1 pouch prepared chocolate frosting</li>
      </ul>
      <h3>Steps</h3>
      <ol>
        <li>
          Preheat oven to 350 degrees F (175 degrees C). Line two 12-cup muffin tins with paper liners, preferable dark-colored or Halloween-themed ones.
        </li>

        <li>
          Combine cake mix, water, eggs, and oil in a large bowl; beat with an electric mixer on low speed until moistened, about 30 seconds. Beat at medium speed until batter is smooth and creamy, about 2 minutes. Spoon batter into the prepared muffin cups, filling each 3/4 full.
        </li>
      </ol>
    </div>
     
  </div>
);
export default RecipeDetail;