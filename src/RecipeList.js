import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, deleteRecipe }) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Converts recipes array into HTML elements */}
          {recipes.map((recipe, index) => {
            return <RecipeItem
              key={index}
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
            />  
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
