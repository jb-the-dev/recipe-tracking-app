import React from "react";

// HTML template to use with each recipe

export default function RecipeItem({recipe, deleteRecipe}){

    return (
        <>
            <tr>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td>
                    <img src={recipe.photo} alt={recipe.photo}/>
                </td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
                <td>
                    <button name="delete" onClick={deleteRecipe}>Delete</button>
                </td>
            </tr>
        </>
    )
}