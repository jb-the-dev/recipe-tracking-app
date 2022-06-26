import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // add new recipe object to recipes array
function createRecipe(recipe){
  setRecipes([...recipes, recipe])
}
  // delete recipe object from recipes array
function deleteRecipe(indexToDelete){
  setRecipes(recipes.filter((_, index) => index !== indexToDelete))
}
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
