import React from "react";

function RecipeDelete({ deleteRecipe }) {
  return (
    <button name="delete" onClick={deleteRecipe}>
      Delete
    </button>
  );
}

export default RecipeDelete;
