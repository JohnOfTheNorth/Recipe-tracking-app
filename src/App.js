import React, { useState } from "react";
import "./App.css";
import RecipeData from "./RecipeData";
import RecipeList from "./RecipeList";
import RecipeCreate from "./RecipeCreate";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipe) =>
      currentRecipe.filter((recipe, index) => index !== indexToDelete)
    );

  const addRecipe = (newRecipe) =>
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

  return (
    <div className="App">
      <header>
        <h1
          style={{
            fontFamily: "Playfair Display SC",
            textAlign: "center",
            fontSize: "64px",
          }}
        >
          Delicious Food Recipes
        </h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
