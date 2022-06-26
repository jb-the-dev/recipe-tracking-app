import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  // declare initial recipe object
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  // create formData state variable and handler
  const [formData, setFormData] = useState({...initialFormState})
  const handleFormChange = (event) => {
    const {target} = event;
    setFormData({...formData, [target.name]: target.value})
  }
  
  // create form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // adds new recipe based on user form inputs
    createRecipe({  
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation
    })
    
    // clears form contents
    setFormData({...initialFormState}) 
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
              <input 
                id="name"
                name="name" 
                placeholder="Name"
                onChange={handleFormChange}
                value={formData.name}
                required
              />
            </td>
            <td htmlFor="cuisine">
              <input 
                id="cuisine"
                name="cuisine" 
                placeholder="Cuisine"
                onChange={handleFormChange}
                value={formData.cuisine}
                required
              />
            </td>
            <td htmlFor="photo">
              <input
                id="photo" 
                name="photo" 
                type="url" 
                placeholder="URL" 
                onChange={handleFormChange}
                value={formData.photo}
                required
              />
            </td>
            <td htmlFor="ingredients">
              <textarea 
                id="ingredients"
                name="ingredients" 
                placeholder="Ingredients"
                onChange={handleFormChange}
                value={formData.ingredients}
                required
              />
            </td>
            <td htmlFor="preparation">
              <textarea 
                id="preparation"
                name="preparation" 
                placeholder="Preparation" 
                onChange={handleFormChange}
                value={formData.preparation}
                required
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
