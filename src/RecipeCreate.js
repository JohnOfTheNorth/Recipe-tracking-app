import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialForm });

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addRecipe(formData);
    console.log("Submitted:", formData);
    setFormData({ ...initialForm });
  };

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={changeHandler}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={changeHandler}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={changeHandler}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                onChange={changeHandler}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                onChange={changeHandler}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
