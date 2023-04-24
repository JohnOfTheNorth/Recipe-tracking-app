import React from "react";
import RecipeDelete from "./RecipeDelete";

function RecipeList({ recipes, deleteRecipe }) {
  const rows = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} />
        </td>
        <td className="content_td">
          {" "}
          <p>{ingredients} </p>
        </td>
        <td className="content_td">
          {" "}
          <p>{preparation} </p>
        </td>
        <td>
          <RecipeDelete deleteRecipe={() => deleteRecipe(index)} />
        </td>
      </tr>
    )
  );

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
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
